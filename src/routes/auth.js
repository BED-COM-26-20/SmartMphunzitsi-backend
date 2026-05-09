const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '30d' });
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const isValidEmail = (email) => /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(email);
const isStrongPassword = (pwd) => pwd.length>= 8;

// POST /api/auth/register
router.post('/register',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, email, password, form, learningStyle } = req.body;

      if (!isStrongPassword(password)) {
        return res.status(400).json({ message: 'Password must include uppercase, lowercase, number, and special character' });
      }

      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'User already exists' });

      const user = await User.create({
        name, email, password,
        form: form || 'Form 1',
        learningStyle: learningStyle || 'visual'
      });

      res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          form: user.form,
          learningStyle: user.learningStyle,
          token: generateToken(user._id)
        }
      });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ message: error.message });
    }
  }
);

// POST /api/auth/login
router.post('/login',
  [
    body('email').isEmail(),
    body('password').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: 'Invalid email or password' });

      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

      user.lastLogin = Date.now();
      await user.save();

      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          form: user.form,
          learningStyle: user.learningStyle,
          token: generateToken(user._id)
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: error.message });
    }
  }
);

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: true,
        message: `If an account exists with ${email}, a password reset link has been sent.`
      });
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;
    const mailOptions = {
      to: user.email,
      subject: 'Smart Mphunzitsi Password Reset',
      html: `<p>You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password. Link expires in 1 hour.</p>`
    };
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: ` Password reset link sent to ${user.email}. Please check your inbox.`
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// POST /api/auth/reset-password/:token (with detailed logging)
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    console.log('\n=== RESET PASSWORD REQUEST ===');
    console.log('Token received:', token);
    console.log('Password received:', password ? `Yes (length ${password.length})` : 'No');

    if (!password) {
      console.log(' No password provided');
      return res.status(400).json({ message: 'Password is required' });
    }

    if (password.length < 8) {
      console.log(' Password too short');
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      console.log(' User not found or token expired');
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    console.log(' User found:', user.email);
    console.log('Token expiry:', user.resetPasswordExpires);

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    console.log(' Password reset successful');
    res.json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    console.error(' Reset password error:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// GET /api/auth/me
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json({ success: true, data: user });
  } catch (error) {
    console.error('Me endpoint error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
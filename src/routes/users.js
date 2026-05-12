const express = require('express');
const User = require('../models/User');
const Progress = require('../models/Progress');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get current user profile
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/profile
// @desc    Update current user profile (name, form, learningStyle)
// @access  Private
router.put('/profile', protect, async (req, res) => {
  try {
    const { name, form, learningStyle } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name) user.name = name;
    if (form) user.form = form;
    if (learningStyle) user.learningStyle = learningStyle;

    await user.save();

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        form: user.form,
        learningStyle: user.learningStyle
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/users/change-password
// @desc    Change user password
// @access  Private
router.put('/change-password', protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Please provide current and new password' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'New password must be at least 6 characters' });
    }

    const user = await User.findById(req.user._id);
    const isMatch = await user.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save(); // pre-save hook will hash the new password

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/users/dashboard
// @desc    Get user dashboard data (profile + progress overview)
// @access  Private
router.get('/dashboard', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    const subjects = ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'Agriculture'];

    // Get progress for all subjects
    const progressData = await Promise.all(
      subjects.map(async (subject) => {
        const progress = await Progress.findOne({ userId: req.user._id, subject });
        return {
          subject,
          completedLessons: progress?.completedLessons.length || 0,
          totalLessons: progress?.totalLessons || 0,
          overallProgress: progress?.overallProgress || 0
        };
      })
    );

    // Calculate total stats
    const totalCompleted = progressData.reduce((sum, p) => sum + p.completedLessons, 0);
    const totalLessons = progressData.reduce((sum, p) => sum + p.totalLessons, 0);
    const overallProgress = totalLessons > 0
      ? Math.round((totalCompleted / totalLessons) * 100)
      : 0;

    res.json({
      success: true,
      data: {
        user,
        stats: {
          totalCompleted,
          totalLessons,
          overallProgress
        },
        progress: progressData
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/users/account
// @desc    Delete user account and all their progress
// @access  Private


module.exports = router;
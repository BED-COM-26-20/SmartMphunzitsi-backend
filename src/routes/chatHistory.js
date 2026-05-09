const express = require('express');
const ChatSession = require('../models/ChatSession');
const { protect } = require('../middleware/auth');

const router = express.Router();

// GET /api/chat/history
router.get('/history', protect, async (req, res) => {
  try {
    const sessions = await ChatSession.find({ userId: req.user._id })
      .sort({ pinned: -1, updatedAt: -1 }); // pinned first, then recent
    res.json({ success: true, data: sessions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

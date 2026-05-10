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



// POST /api/chat/session (create or update)
router.post('/session', protect, async (req, res) => {
  try {
    const { sessionId, subject, topic, lessonId, messages, pinned } = req.body;
    if (!sessionId) return res.status(400).json({ message: 'sessionId required' });

    let session = await ChatSession.findOne({ userId: req.user._id, sessionId });
    if (session) {
      session.messages = messages;
      session.subject = subject;
      session.topic = topic;
      session.lessonId = lessonId || session.lessonId;
      if (pinned !== undefined) session.pinned = pinned;
      session.updatedAt = Date.now();
    } else {
      session = new ChatSession({
        userId: req.user._id,
        sessionId,
        subject,
        topic,
        lessonId,
        messages,
        pinned: pinned || false,
      });
    }
    await session.save();
    res.json({ success: true, data: session });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



// DELETE /api/chat/history/:sessionId
router.delete('/history/:sessionId', protect, async (req, res) => {
  try {
    await ChatSession.findOneAndDelete({ userId: req.user._id, sessionId: req.params.sessionId });
    res.json({ success: true, message: 'Session deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
const express = require('express');
const { body, validationResult } = require('express-validator');
const Lesson = require('../models/Lesson');
const { protect } = require('../middleware/auth');

const router = express.Router();

// ========================
// PUBLIC ROUTES
// ========================

// GET /api/lessons/subject/:subject
router.get('/subject/:subject', async (req, res) => {
  try {
    const { subject } = req.params;
    const { form } = req.query;
    const query = { subject };
    if (form) query.form = form;
    const lessons = await Lesson.find(query).sort('order');
    if (!lessons.length) {
      return res.status(404).json({ message: `No lessons found for ${subject}${form ? ` (${form})` : ''}` });
    }
    res.json({ success: true, count: lessons.length, data: lessons });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// GET /api/lessons/topics/:subject/:form
router.get('/topics/:subject/:form', async (req, res) => {
  try {
    const { subject, form } = req.params;
    const lessons = await Lesson.find({ subject, form })
      .sort('order')
      .select('topic lessonNumber lessonTitle lessonId learningObjectives');
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
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

// GET /api/lessons/:subject/:lessonId
router.get('/:subject/:lessonId', async (req, res) => {
  try {
    const { subject, lessonId } = req.params;
    const lesson = await Lesson.findOne({ subject, lessonId });
    if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ========================
// PROTECTED ROUTES
// ========================

// GET /api/lessons/my-subjects
router.get('/my-subjects', protect, async (req, res) => {
  try {
    const userForm = req.user.form;
    const subjects = ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'Agriculture'];
    const result = [];
    for (const subject of subjects) {
      const lessons = await Lesson.find({ subject, form: userForm })
        .sort('order')
        .select('topic lessonNumber lessonTitle lessonId learningObjectives');
      if (lessons.length > 0) {
        result.push({ subject, form: userForm, count: lessons.length, lessons });
      }
    }
    res.json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// POST /api/lessons
router.post('/',
  protect,
  [
    body('subject').notEmpty(),
    body('form').notEmpty(),
    body('topic').notEmpty(),
    body('lessonTitle').notEmpty(),
    body('detailedContent').isLength({ min: 50 }).withMessage('Content too short (min 50 chars)')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      const lessonData = { ...req.body };
      if (!lessonData.lessonId || lessonData.lessonId.trim() === '') {
        const subjectCode = lessonData.subject.substring(0, 3).toLowerCase();
        const formCode = lessonData.form.replace(' ', '').toLowerCase();
        const topicCode = (lessonData.topic || 'general').substring(0, 8).toLowerCase().replace(/\s/g, '-');
        const lessonNum = lessonData.lessonNumber || 1;
        lessonData.lessonId = `${subjectCode}-${formCode}-${topicCode}-${lessonNum}`;
      }
      const lesson = new Lesson(lessonData);
      const savedLesson = await lesson.save();
      res.status(201).json({ success: true, message: 'Lesson created', data: savedLesson });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ success: false, message: 'Duplicate lessonId.' });
      }
      res.status(400).json({ success: false, message: error.message });
    }
  }
);



// DELETE /api/lessons/:id
router.delete('/:id', protect, async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) return res.status(404).json({ success: false, message: 'Lesson not found' });
    res.json({ success: true, message: 'Lesson deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
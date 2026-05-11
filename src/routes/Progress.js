const express = require('express');
const { body, validationResult } = require('express-validator');
const Progress = require('../models/Progress');
const Lesson = require('../models/Lesson');
const { protect } = require('../middleware/auth');

const router = express.Router();

// POST /api/progress/complete – record a completed lesson with score
router.post('/complete',
  protect,
  [
    body('subject').notEmpty(),
    body('lessonId').notEmpty(),
    body('score').isInt({ min: 0, max: 100 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { subject, lessonId, lessonTitle, topic, score } = req.body;
      const userId = req.user._id;

      // Get total number of lessons for this subject
      const totalLessons = await Lesson.countDocuments({ subject });

      let progress = await Progress.findOne({ userId, subject });
      if (!progress) {
        progress = new Progress({
          userId,
          subject,
          totalLessons,
          completedLessons: []
        });
      } else {
        progress.totalLessons = totalLessons;
      }

      // Update or add the completed lesson
      const existingIndex = progress.completedLessons.findIndex(l => l.lessonId === lessonId);
      if (existingIndex !== -1) {
        progress.completedLessons[existingIndex].score = score;
        progress.completedLessons[existingIndex].completedAt = Date.now();
      } else {
        progress.completedLessons.push({
          lessonId,
          lessonTitle: lessonTitle || 'Untitled',
          score,
          completedAt: Date.now()
        });
      }

      // Update overall progress percentage
      progress.overallProgress = (progress.completedLessons.length / totalLessons) * 100;
      progress.updatedAt = Date.now();

      await progress.save();
      res.json({ success: true, data: progress });
    } catch (error) {
      console.error('Error saving progress:', error);
      res.status(500).json({ message: error.message });
    }
  }
);

// GET /api/progress/:subject – get progress for a specific subject
router.get('/:subject', protect, async (req, res) => {
  try {
    const { subject } = req.params;
    const userId = req.user._id;
    let progress = await Progress.findOne({ userId, subject });

    const totalLessons = await Lesson.countDocuments({ subject });
    if (!progress) {
      return res.json({ subject, completedLessons: [], totalLessons, overallProgress: 0 });
    }
    progress.totalLessons = totalLessons;
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/progress/overview/all – optimised with aggregation
router.get('/overview/all', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    // 1. Get total lessons per subject using aggregation
    const lessonsPerSubject = await Lesson.aggregate([
      { $group: { _id: "$subject", totalLessons: { $sum: 1 } } }
    ]);
    const lessonMap = new Map(lessonsPerSubject.map(item => [item._id, item.totalLessons]));

    // 2. Get all progress documents for this user (lean for speed)
    const progressDocs = await Progress.find({ userId }).lean();

    // 3. Map subject to progress data
    const progressMap = new Map();
    progressDocs.forEach(doc => {
      progressMap.set(doc.subject, {
        completedLessons: doc.completedLessons || [],
        overallProgress: doc.overallProgress || 0
      });
    });

    

    res.json(overview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
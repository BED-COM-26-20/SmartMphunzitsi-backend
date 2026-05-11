const express = require('express');
const { body, validationResult } = require('express-validator');
const Progress = require('../models/Progress');
const Lesson = require('../models/Lesson');
const { protect } = require('../middleware/auth');

const router = express.Router();


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

    // 4. Build overview for all subjects
    const subjects = ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'English', 'Agriculture'];
    const overview = subjects.map(subject => {
      const totalLessons = lessonMap.get(subject) || 0;
      const prog = progressMap.get(subject) || { completedLessons: [], overallProgress: 0 };
      return {
        subject,
        completedLessons: prog.completedLessons,
        totalLessons,
        overallProgress: totalLessons > 0 ? Math.round((prog.completedLessons.length / totalLessons) * 100) : 0
      };
    });

    res.json(overview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  form: { type: String, required: true },
  topic: { type: String, required: true },
  lessonNumber: { type: Number, required: true },
  lessonTitle: { type: String, required: true },
  lessonId: { type: String, required: true, unique: true },
  order: { type: Number, required: true },
  learningObjectives: [String],
  introduction: String,
  keyPoints: [String],
  detailedContent: String,
  summary: String,
  estimatedTime: String,
  malawiExamples: [{ title: String, description: String }],
  practiceQuestions: [{ question: String, answer: String, hint: String }]
}, { timestamps: true });

// ------------------------------
// INDEXES (Option 1)
// ------------------------------
// Index for sorting and filtering by subject, form, order



module.exports = mongoose.model('Lesson', lessonSchema);
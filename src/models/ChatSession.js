const mongoose = require('mongoose');



const chatSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sessionId: { type: String, required: true, unique: true },
  subject: { type: String, default: 'General' },
  topic: { type: String, default: 'General' },
  lessonId: { type: String },
  messages: [messageSchema],
  pinned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

chatSessionSchema.index({ userId: 1, sessionId: 1 }, { unique: true });
chatSessionSchema.index({ userId: 1, pinned: -1, updatedAt: -1 }); // sort pinned first

module.exports = mongoose.model('ChatSession', chatSessionSchema);
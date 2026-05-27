const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ['user', 'assistant'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});



chatSessionSchema.index({ userId: 1, sessionId: 1 }, { unique: true });
chatSessionSchema.index({ userId: 1, pinned: -1, updatedAt: -1 }); // sort pinned first

module.exports = mongoose.model('ChatSession', chatSessionSchema);
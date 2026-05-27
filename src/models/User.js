const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  form: { type: String, enum: ['Form 1', 'Form 2', 'Form 3', 'Form 4'], default: 'Form 1' },
  learningStyle: { type: String, enum: ['visual', 'auditory', 'reading', 'kinesthetic'], default: 'visual' },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
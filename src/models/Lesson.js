const mongoose = require('mongoose');



// ------------------------------
// INDEXES (Option 1)
// ------------------------------
// Index for sorting and filtering by subject, form, order
lessonSchema.index({ subject: 1, form: 1, order: 1 });


module.exports = mongoose.model('Lesson', lessonSchema);
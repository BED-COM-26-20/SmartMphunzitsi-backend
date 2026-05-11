const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();

const allLessons = [

  
async function seedLessons() {
  // Check required environment variable
  if (!process.env.MONGODB_URI) {
    console.error('ERROR: MONGODB_URI environment variable is not defined.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Optional: check if Lesson model is compiled (if not, will throw anyway)
    if (!Lesson || typeof Lesson.deleteMany !== 'function') {
      throw new Error('Lesson model not properly loaded. Check the path "../models/Lesson".');
    }

    await Lesson.deleteMany({});
    console.log('Cleared existing lessons');

    await Lesson.insertMany(allLessons);
    console.log(`Inserted ${allLessons.length} lessons`);

  } catch (error) {
    console.error('Error seeding lessons:', error);
    process.exit(1);
  } finally {
    // Close the database connection before exiting
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }

  process.exit(0);
}

seedLessons();
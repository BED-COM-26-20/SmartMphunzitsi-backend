require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');
const Progress = require('../models/Progress');

async function createIndexes() {
  console.log(' Connecting to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, 
    });
    console.log(' Connected.\n');
  } catch (err) {
    console.error(' Connection failed:', err.message);
    console.error('   Check your MONGODB_URI and IP whitelist in Atlas.');
    process.exit(1);
  }

  try {
    console.log(' Syncing indexes for Lesson collection...');
    await Lesson.syncIndexes();
    console.log(' Lesson indexes ready.\n');

    console.log('Syncing indexes for Progress collection...');
    await Progress.syncIndexes();
    console.log(' Progress indexes ready.\n');

    const lessonIndexes = await Lesson.collection.indexes();
    const progressIndexes = await Progress.collection.indexes();

    console.log('Lesson indexes:', lessonIndexes.map(i => i.name).join(', '));
    console.log(' Progress indexes:', progressIndexes.map(i => i.name).join(', '));
    console.log('\n All indexes are ready!');
  } catch (err) {
    console.error(' Error creating indexes:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log(' Disconnected.');
    process.exit(0);
  }
}

createIndexes();
require('dotenv').config();
const app = require('./src/App');
const mongoose = require('mongoose');


console.log('\n Environment Check:');
console.log('  MONGODB_URI:', process.env.MONGODB_URI ? ' Set' : ' Missing');
console.log('  JWT_SECRET:', process.env.JWT_SECRET ? ' Set' : ' Missing');
console.log('  GROQ_API_KEY:', process.env.GROQ_API_KEY ? ' Set' : '  Missing');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'development');
console.log(' YOUTUBE_API_KEY:', process.env.YOUTUBE_API_KEY ? ' set' : 'Missing');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI missing');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(' MongoDB connected');
  } catch (error) {
    console.error(' DB error:', error.message);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit(0);
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(` Server on http://localhost:${PORT}`);
  });
};

startServer();

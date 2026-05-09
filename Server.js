const app = require('./src/App');
const mongoose = require('mongoose');
require('dotenv').config();

console.log('\n Environment Check:');
console.log('  MONGODB_URI:', process.env.MONGODB_URI ? ' Set' : ' Missing');
console.log('  JWT_SECRET:', process.env.JWT_SECRET ? ' Set' : ' Missing');
console.log('  GROQ_API_KEY:', process.env.GROQ_API_KEY ? ' Set' : '  Missing');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'development');
console.log(' YOUTUBE_API_KEY:', process.env.YOUTUBE_API_KEY ? ' set' : 'Missing');
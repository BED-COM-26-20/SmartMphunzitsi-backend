const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const chatHistoryRoutes = require('./routes/chatHistory');
app.use('/api/chat', chatHistoryRoutes);

// Request logger (development only)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

// ROUTES

try {
  const authRouter = require('./routes/auth');
  app.use('/api/auth', authRouter);
  console.log(' Auth routes loaded');
} catch (error) {
  console.log(' Auth routes not loaded:', error.message);
}

try {
  const usersRouter = require('./routes/users');
  app.use('/api/users', usersRouter);
  console.log(' Users routes loaded');
} catch (error) {
  console.log(' Users routes not loaded:', error.message);
}

try {
  const lessonsRouter = require('./routes/lessons');
  app.use('/api/lessons', lessonsRouter);
  console.log(' Lessons routes loaded');
} catch (error) {
  console.log(' Lessons routes not loaded:', error.message);
}

try {
  const progressRouter = require('./routes/Progress');
  app.use('/api/progress', progressRouter);
  console.log(' Progress routes loaded');
} catch (error) {
  console.log(' Progress routes not loaded:', error.message);
}

try {
  const chatRouter = require('./routes/Chat');
  app.use('/api/chat', chatRouter);
  console.log(' Chat routes loaded');
} catch (error) {
  console.log(' Chat routes not loaded:', error.message);
}

//   QUIZ ROUTE 
try {
  const quizRoutes = require('./routes/quiz');
  app.use('/api/quiz', quizRoutes);
  console.log(' Quiz routes loaded');
} catch (error) {
  console.log(' Quiz routes not loaded:', error.message);
}

// DEFAULT ROUTES

// Root
app.get('/', (req, res) => {
  res.json({
    message: '🎓 Smart Mphunzitsi API is running',
    version: '1.0.0',
    status: 'OK'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development'
  });
});


// ERROR HANDLING

// 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(' Server Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

module.exports = app;
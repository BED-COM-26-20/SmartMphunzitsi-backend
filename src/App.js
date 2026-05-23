const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//  CORS CONFIGURATION 
const allowedOrigins = [
  process.env.CLIENT_URL,           
  'http://localhost:3000',
  'http://localhost:3001'
].filter(Boolean);                  

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow access from this origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,                
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


// Chat history routes
const chatHistoryRoutes = require('./routes/chatHistory');
app.use('/api/chat', chatHistoryRoutes);

// Request logger (development only)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });
}

// Auth routes
try {
  const authRouter = require('./routes/auth');
  app.use('/api/auth', authRouter);
  console.log(' Auth routes loaded');
} catch (error) {
  console.log(' Auth routes not loaded:', error.message);
}

// Users routes
try {
  const usersRouter = require('./routes/users');
  app.use('/api/users', usersRouter);
  console.log(' Users routes loaded');
} catch (error) {
  console.log(' Users routes not loaded:', error.message);
}

// Lessons routes
try {
  const lessonsRouter = require('./routes/lessons');
  app.use('/api/lessons', lessonsRouter);
  console.log(' Lessons routes loaded');
} catch (error) {
  console.log(' Lessons routes not loaded:', error.message);
}

// Progress routes
try {
  const progressRouter = require('./routes/Progress');
  app.use('/api/progress', progressRouter);
  console.log(' Progress routes loaded');
} catch (error) {
  console.log(' Progress routes not loaded:', error.message);
}

// Chat routes
try {
  const chatRouter = require('./routes/Chat');
  app.use('/api/chat', chatRouter);
  console.log(' Chat routes loaded');
} catch (error) {
  console.log(' Chat routes not loaded:', error.message);
}

// Quiz routes
try {
  const quizRoutes = require('./routes/quiz');
  app.use('/api/quiz', quizRoutes);
  console.log(' Quiz routes loaded');
} catch (error) {
  console.log(' Quiz routes not loaded:', error.message);
}

// DEFAULT ROUTES 
app.get('/', (req, res) => {
  res.json({
    message: 'Smart Mphunzitsi API is running',
    version: '1.0.0',
    status: 'OK'
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Smart Mphunzitsi API',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        me: 'GET /api/auth/me'
      },
      users: {
        profile: 'GET /api/users/profile',
        updateProfile: 'PUT /api/users/profile',
        changePassword: 'PUT /api/users/change-password',
        dashboard: 'GET /api/users/dashboard',
        deleteAccount: 'DELETE /api/users/account'
      },
      lessons: {
        bySubject: 'GET /api/lessons/subject/:subject',
        bySubjectAndForm: 'GET /api/lessons/subject/:subject?form=Form 1',
        topics: 'GET /api/lessons/topics/:subject/:form',
        single: 'GET /api/lessons/:subject/:lessonId',
        mySubjects: 'GET /api/lessons/my-subjects'
      },
      progress: {
        complete: 'POST /api/progress/complete',
        bySubject: 'GET /api/progress/:subject',
        overview: 'GET /api/progress/overview/all'
      },
      chat: {
        message: 'POST /api/chat'
      },
      quiz: {
        generate: 'POST /api/quiz/generate'
      }
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    environment: process.env.NODE_ENV || 'development'
  });
});

// ========== ERROR HANDLING ==========
// 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

module.exports = app;
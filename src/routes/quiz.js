const express = require('express');
const { body, validationResult } = require('express-validator');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/generate',
  protect,
  [
    body('subject').notEmpty(),
    body('topic').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { subject, topic, lessonContent } = req.body;

    try {
      if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: 'AI service not configured' });
      }

      const prompt = `Generate exactly 5 multiple-choice quiz questions for a student studying ${subject} – topic: "${topic}". 
      Each question must have:
      - "question": text,
      - "options": array of 4 possible answers,
      - "correct": the correct answer (must match one option),
      - "explanation": short reason why it's correct.
      Use examples from Malawi. Return ONLY valid JSON in this format:
      [
        {
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correct": "A",
          "explanation": "..."
        }
      ]`;

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'system', content: 'You are an exam creator.' }, { role: 'user', content: prompt }],
          temperature: 0.7,
          max_tokens: 2048
        })
      });

      if (!response.ok) throw new Error('Groq API error');
      const data = await response.json();
      const questions = JSON.parse(data.choices[0].message.content);
      res.json({ success: true, questions: questions.slice(0,5) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate quiz' });
    }
  }
);

module.exports = router;
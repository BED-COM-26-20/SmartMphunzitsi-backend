const express = require('express');
const { protect } = require('../middleware/auth');
const Progress = require('../models/Progress'); // adjust path as needed

const router = express.Router();


// YouTube helper (fetches 2 relevant videos for the current topic)

async function fetchYouTubeVideos(query, maxResults = 1) {
  if (!process.env.YOUTUBE_API_KEY) return [];
  try {
    const params = new URLSearchParams({
      part: 'snippet',
      q: query,
      type: 'video',
      videoEmbeddable: 'true',
      safeSearch: 'strict',
      relevanceLanguage: 'en',
      maxResults: String(maxResults),
      key: process.env.YOUTUBE_API_KEY,
    });
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map(item => ({
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (err) {
    console.error('YouTube API error:', err.message);
    return [];
  }
}


// Main chat endpoint

router.post('/', protect, async (req, res) => {
  try {
    const {
      message,
      subject,
      topic,
      lessonContext,
      conversationHistory = [],
      learningStyle,
    } = req.body;

    if (!message) return res.status(400).json({ message: 'Message required' });
    if (!process.env.GROQ_API_KEY) return res.status(500).json({ message: 'Groq API key missing' });

    
    // 1. Fetch subject‑specific prior knowledge (using your Progress model)
    
    let priorKnowledgeSection = '';
    try {
      const progressDoc = await Progress.findOne({ userId: req.user._id, subject });
      if (progressDoc && progressDoc.completedLessons.length) {
        const lessons = progressDoc.completedLessons;
        const totalLessons = progressDoc.totalLessons || lessons.length;
        const avgScore = lessons.reduce((sum, l) => sum + (l.score || 0), 0) / lessons.length;
        
        // Identify mastered (≥80%) and weak (<60%) lessons
        const mastered = lessons.filter(l => l.score >= 80).map(l => l.lessonTitle);
        const weak = lessons.filter(l => l.score < 60).map(l => l.lessonTitle);
        
        priorKnowledgeSection = `
STUDENT'S PRIOR KNOWLEDGE IN ${subject.toUpperCase()} (use this to personalise your responses):
- Completed lessons: ${lessons.length} out of ${totalLessons}
- Average quiz score: ${avgScore.toFixed(1)}%
- Mastered lessons (score ≥80%): ${mastered.join(', ') || 'None yet'}
- Lessons needing improvement (score <60%): ${weak.join(', ') || 'None'}

Guidelines:
- If the student asks about a mastered lesson, offer a quick review or more advanced applications.
- If they ask about a weak lesson, provide extra examples, simpler explanations, or suggest reviewing that lesson.
- Adapt the difficulty of practice questions based on their average score (higher score → more challenging questions).
`;
      }
    } catch (err) {
      console.error('Error fetching progress:', err);
      // Continue without prior knowledge
    }

 
    // 2. YouTube videos for visual learners
    
    const isVisual = !learningStyle || learningStyle === 'visual';
    let videoSection = '';

    if (isVisual && process.env.YOUTUBE_API_KEY) {
      const searchQuery = lessonContext?.title
        ? `${lessonContext.title} ${subject} education`
        : `${topic} ${subject} secondary school education`;

      const videos = await fetchYouTubeVideos(searchQuery, 2);
      if (videos.length) {
        const videoLines = videos.map(v => `📹 [${v.title}](${v.url})`).join('\n');
        videoSection = `\n\nRELEVANT VIDEOS (already fetched — include these as‑is at the end of your response when helpful):\n${videoLines}`;
      }
    }

    
    // 3. Short question detection
    
    const isShortQuestion = message.split(' ').length <= 8 && message.endsWith('?');
    const responseLengthInstruction = isShortQuestion
      ? 'Give a direct, concise answer (max 2 sentences). Do not add extra explanations unless asked.'
      : 'Provide a structured explanation as a teacher would, step by step, using bullet points and headings where appropriate.';

   
    // 4. Learning‑style instructions
   
    let styleInstruction = '';
    switch (learningStyle) {
      case 'visual':
        styleInstruction = `**VISUAL LEARNER MODE**:
- Use vivid spatial language and analogies (e.g., "Imagine a picture where…", "Draw a line from X to Y").
- Describe diagrams, graphs, or tables in words.
- Emphasise visual organisation: use headings, bullet points, and clear spacing.
- Avoid long paragraphs; break content into small visual chunks.
- When provided, include the RELEVANT VIDEOS links at the end of your response using markdown link format [title](url).`;
        break;
      case 'auditory':
        styleInstruction = `**AUDITORY LEARNER MODE**:
- Use rhythmic explanations, rhymes, or mnemonics where helpful.
- Suggest the student say things aloud or repeat key points.
- Use a conversational, story‑telling tone.
- Repeat important information in different words.`;
        break;
      case 'reading':
        styleInstruction = `**READING/WRITING LEARNER MODE**:
- Provide detailed written explanations with clear headings, numbered lists, and bullet points.
- Include definitions, key terms, and written summaries.
- Use rich text structure: headings, subheadings, bold.
- Favour lists over long paragraphs.`;
        break;
      case 'kinesthetic':
        styleInstruction = `**KINESTHETIC LEARNER MODE**:
- Use hands‑on examples, real‑world actions, and step‑by‑step procedures.
- Suggest physical actions (e.g., "tap your finger to count", "use beans to represent numbers").
- Give practical applications and encourage practice.`;
        break;
      default:
        styleInstruction = `Use a balanced mix of clear explanations, examples, and a friendly, structured format.`;
    }

  //events of instruction
    const gagneInstruction = `
TEACHING METHODOLOGY (apply these principles naturally, without mentioning their names or numbering them):

When explaining a new concept or answering a longer question, structure your response using these pedagogical steps (as a natural flow, not as a list):

- **Start with engagement** – Open with a question, a short scenario, or a surprising fact relevant to Malawi.
- **State what they will learn** – In one sentence, tell them what they will understand after your explanation.
- **Connect to what they already know** – Briefly mention related knowledge they likely have (e.g., "Remember when we learned about X?"). Use the provided prior knowledge section if available.
- **Explain clearly** – Present the core content step by step. Use examples, analogies, and simple language.
- **Offer support** – Give a tip, a mnemonic, or an analogy to help them remember.
- **Ask them to practice** – Pose a simple question or small task related to the explanation.
- **Give feedback** – Immediately provide the correct answer or guide them toward it.
- **Check understanding** – Suggest they summarise in their own words or ask a follow‑up question.
- **Show real‑world use** – Give an example from daily life in Malawi (farming, market, school, home) and encourage them to try it themselves.

Do **not** label these steps with numbers or bold headings like "Step 1". Weave them naturally into your prose. For short factual questions, you may only need the first few steps. For complex topics, aim to include all nine seamlessly.
`;

    // 6. Base system prompt (subject, topic, rules)
   
    const isGeneralChat = (subject === 'General' && topic === 'General');
    const ruleOne = isGeneralChat
      ? 'You may answer ANY educational question (Mathematics, Physics, Biology, Chemistry, English, Agriculture, History, Geography, etc.) or school‑related topic. Use the provided subject and topic as helpful context, but do not restrict your answers. If the question is purely non‑educational, politely say: "I am here to help with school subjects. Please ask me about your studies."'
      : `ONLY answer questions related to the above subject, topic, and lesson context. If a student asks about something else, politely redirect them: "That's outside our current lesson. Let's focus on ${topic}."`;

    const baseSystemPrompt = `You are Smart Mphunzitsi, a patient and clear AI teacher for secondary school students in Malawi. Your student is ${req.user.name}, Form ${req.user.form}. Use simple, everyday English. NEVER use Chichewa or any other language – answer only in English.

Current subject: ${subject}
Current topic: ${topic}

Lesson context (if provided):
- Title: ${lessonContext?.title || 'Not specified'}
- Learning objectives: ${(lessonContext?.objectives || []).join('; ') || 'Not provided'}
- Key points: ${(lessonContext?.keyPoints || []).join('; ') || 'Not provided'}
- Summary: ${lessonContext?.summary || 'Not provided'}

The student's preferred learning style is: ${learningStyle || 'visual'}.

${styleInstruction}
${videoSection}
${priorKnowledgeSection}

GENERAL RULES:
1. ${ruleOne}
2. ${responseLengthInstruction}
3. Use headings (e.g., **Key Concept:**), bullet points, and short paragraphs to organise your answer.
4. For short factual questions, answer in one clear sentence, then ask if they want more detail.
5. Keep your response under 400 words. If the question is very broad, break it into parts and ask which part they want first.
6. Use analogies from everyday life in Malawi (farming, markets, school, etc.).
7. Be encouraging and celebrate their curiosity.
8. IMPORTANT: If RELEVANT VIDEOS are provided above, include them at the end of your response using exactly the markdown format provided: [title](url). Do NOT invent or modify any video links.`;

    const finalSystemPrompt = baseSystemPrompt + '\n\n' + gagneInstruction;

    // 7. Call Groq API (LLaMA 3.3 70B)
    
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: finalSystemPrompt },
          ...conversationHistory.slice(-10),
          { role: 'user', content: message },
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error:', groqRes.status, errText);
      throw new Error('Groq API error');
    }

    const data = await groqRes.json();
    const aiResponse = data.choices[0].message.content;

    res.json({ success: true, response: aiResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
});

module.exports = router;
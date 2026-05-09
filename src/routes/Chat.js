

// ── Chat route ────────────────────────────────────────────────────────────────
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

    // ── Fetch real YouTube videos for the current topic ────────────────────
    const isVisual = !learningStyle || learningStyle === 'visual';
    let videoSection = '';

    if (isVisual && process.env.YOUTUBE_API_KEY) {
      const searchQuery = lessonContext?.title
        ? `${lessonContext.title} ${subject} education`
        : `${topic} ${subject} secondary school education`;

      const videos = await fetchYouTubeVideos(searchQuery, 2);

      if (videos.length) {
        const videoLines = videos
          .map(v => `📹 [${v.title}](${v.url})`)
          .join('\n');
        videoSection = `\n\nRELEVANT VIDEOS (already fetched — include these as-is at the end of your response when helpful):\n${videoLines}`;
      }
    }

    // ── Detect short question (≤8 words ending with ?) ─────────────────────
    const isShortQuestion = message.split(' ').length <= 8 && message.endsWith('?');
    const responseLengthInstruction = isShortQuestion
      ? 'Give a direct, concise answer (max 2 sentences). Do not add extra explanations unless asked.'
      : 'Provide a structured explanation as a teacher would, step by step, using bullet points and headings where appropriate.';

    // ── Learning-style instructions ────────────────────────────────────────
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
- Use a conversational, story-telling tone.
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
- Use hands-on examples, real-world actions, and step-by-step procedures.
- Suggest physical actions (e.g., "tap your finger to count", "use beans to represent numbers").
- Give practical applications and encourage practice.`;
        break;
      default:
        styleInstruction = `Use a balanced mix of clear explanations, examples, and a friendly, structured format.`;
    }

    // ── System prompt (only the general chat is modified) ──────────────────
    const isGeneralChat = (subject === 'General' && topic === 'General');
    const ruleOne = isGeneralChat
      ? 'You may answer ANY educational question (Mathematics, Physics, Biology, Chemistry, English, Agriculture, History, Geography, etc.) or school‑related topic. Use the provided subject and topic as helpful context, but do not restrict your answers. If the question is purely non‑educational, politely say: "I am here to help with school subjects. Please ask me about your studies."'
      : `ONLY answer questions related to the above subject, topic, and lesson context. If a student asks about something else, politely redirect them: "That's outside our current lesson. Let's focus on ${topic}."`;

    const systemPrompt = `You are Smart Mphunzitsi, a patient and clear AI teacher for secondary school students in Malawi. Your student is ${req.user.name}, Form ${req.user.form}. Use simple, everyday English. NEVER use Chichewa or any other language – answer only in English.

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

GENERAL RULES:
1. ${ruleOne}
2. ${responseLengthInstruction}
3. Use headings (e.g., **Key Concept:**), bullet points, and short paragraphs to organise your answer.
4. For short factual questions, answer in one clear sentence, then ask if they want more detail.
5. Keep your response under 300 words. If the question is very broad, break it into parts and ask which part they want first.
6. Use analogies from everyday life in Malawi (farming, markets, school, etc.).
7. Be encouraging and celebrate their curiosity.
8. IMPORTANT: If RELEVANT VIDEOS are provided above, include them at the end of your response using exactly the markdown format provided: [title](url). Do NOT invent or modify any video links.`;

    // ── Groq API call ──────────────────────────────────────────────────────
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory.slice(-10),
          { role: 'user', content: message },
        ],
        max_tokens: 600,
        temperature: 0.5,
      }),
    });

    if (!groqRes.ok) throw new Error('Groq API error');
    const data = await groqRes.json();
    const aiResponse = data.choices[0].message.content;

    res.json({ success: true, response: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
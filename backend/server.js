// server.js
// This is our backend server
// It receives questions from React and sends them to Groq AI
// Then sends the AI answer back to React

const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk');
require('dotenv').config();

// Create the server app
const app = express();

// Allow React (port 3000) to talk to this server (port 5000)
app.use(cors());

// Allow server to read JSON data sent from React
app.use(express.json());

// Connect to Groq AI using our secret key from .env file
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// This is the tutor's personality and instructions
// It tells the AI how to behave as a tutor
const SYSTEM_PROMPT = `You are TutorBot, a friendly and patient study tutor.
Your job is to help students understand any topic clearly.

Always:
1. Explain in simple easy language
2. Give step-by-step explanations
3. Use real life examples
4. Offer a practice problem at the end
5. Be encouraging and supportive
6. Ask if they understood or need more help`;

// This creates a URL: POST http://localhost:5000/ask
// When React sends a question here, this function runs
app.post('/ask', async (req, res) => {
  try {
    // Get the conversation history from React
    const { messages } = req.body;

    // Send the conversation to Groq AI
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile', // free Groq model
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 1024
    });

    // Get the AI reply text
    const reply = response.choices[0].message.content;

    // Send reply back to React
    res.json({ reply });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
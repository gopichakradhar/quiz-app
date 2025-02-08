// server.js
const express = require('express');
const fetch = require('node-fetch'); // Use built-in fetch if using Node 18+
const path = require('path');
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Proxy endpoint for quiz data
app.get('/api/quizdata', async (req, res) => {
  try {
    const response = await fetch('https://api.jsonserve.com/MwKrGT');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Set CORS header if needed
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ error: 'Failed to load quiz data' });
  }
});

// Fallback: Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

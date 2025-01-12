const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration options
const corsOptions = {
  origin: '*', // Allow all origins
  methods: ['POST', 'OPTIONS'], // Allow only POST and OPTIONS methods
  allowedHeaders: ['Content-Type'], // Allow Content-Type header
  maxAge: 86400 // Cache preflight request results for 24 hours
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Your existing chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { user_id, message } = req.body;
    
    // Your existing chat logic here
    // Example response:
    const response = {
      message: "This is a response from the chatbot",
      // ... other response data
    };

    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!',
    message: err.message
  });
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
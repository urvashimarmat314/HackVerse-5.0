import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const DAILY_API_KEY = process.env.DAILY_API_KEY;

app.post('/api/create-room', async (req, res) => {
  try {
    const response = await fetch('https://api.daily.co/v1/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DAILY_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          enable_chat: true,
          enable_screenshare: true,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create room');
    }

    const roomData = await response.json();
    res.status(200).json({ url: roomData.url });
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'Failed to create room' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


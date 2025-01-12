import React, { useState } from 'react';
import axios from 'axios';

const AIChat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateResponse = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await axios.post('/api/ai/generate', { prompt });
      if (result.data.success) {
        setResponse(result.data.response);
      } else {
        setError('Failed to get response');
      }
    } catch (err) {
      setError('Error connecting to AI service');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
      
      <form onSubmit={generateResponse} className="space-y-4">
        <div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Generating...' : 'Get AI Response'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold mb-2">AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIChat;
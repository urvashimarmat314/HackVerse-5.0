import React, { useState } from "react";

const MedicalChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "I'm processing your query..." },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-between">
      {/* Header */}
      <header className="w-full py-4 bg-blue-600 text-white text-center font-bold text-lg shadow-md">
        Dr. Jivka Health Bot
      </header>

      {/* Chat Window */}
      <div className="flex flex-col w-full max-w-2xl flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col h-full p-4 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                  message.sender === "bot"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="w-full max-w-2xl p-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg shadow border border-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition ease-in-out duration-300"
            onClick={handleSend}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h7m0 0v11m0-11l7 7m-7-7l7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalChatBot;

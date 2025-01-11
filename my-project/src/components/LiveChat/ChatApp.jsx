import React, { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { ref, push, onValue } from "firebase/database";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile, BsFileEarmarkArrowUp, BsReply } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import Picker from "emoji-picker-react";
import Particles from "react-tsparticles";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [file, setFile] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const userId = "user1";

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = data
        ? Object.values(data).map((msg) => ({
            ...msg,
            isUser: msg.sender === userId,
          }))
        : [];
      setMessages(loadedMessages);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    const messagesRef = ref(database, "messages");
    if (input.trim() || file) {
      push(messagesRef, {
        text: input.trim(),
        sender: userId,
        timestamp: new Date().toISOString(),
        type: file ? "file" : "text",
        fileUrl: file ? URL.createObjectURL(file) : null,
        replyTo: replyTo ? replyTo.text : null,
      });
      setInput("");
      setFile(null);
      setReplyTo(null);
    } else {
      alert("Please type a message or select a file before sending.");
    }
  };

  const addEmoji = (event, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

 

  return (
    <div className="relative flex flex-col h-screen bg-black text-white font-sans">
     

      <div className="relative flex flex-col h-full z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0078d4] to-[#005a8a] bg-opacity-70 p-4 border-b border-[#005a8a] rounded-lg relative w-full">
  <div className="flex items-center space-x-4">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww"
        alt="Doctor"
        className="w-12 h-12 rounded-full object-cover transform transition-all duration-300 ease-in-out hover:scale-110"
      />
      <FaCircle className="absolute bottom-0 right-0 text-green-500 text-xs" />
    </div>
    <div>
      <h2 className="font-semibold text-lg text-white hover:text-gray-300 transition-colors duration-300 ease-in-out">Dr. Sayd</h2>
      <div className="flex items-center text-sm text-green-500">
        <span className="mr-1">●</span>
        Online
      </div>
    </div>
  </div>
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-transparent via-white/20 to-transparent pointer-events-none" />
</div>






        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl max-w-xs transition-all duration-300 ease-in-out transform group ${
                msg.isUser
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 self-end text-white"
                  : "bg-gradient-to-r from-blue-300 to-blue-500 self-start text-white"
              } shadow-lg hover:scale-102 relative`}
              onClick={() => setReplyTo(msg)}
            >
              {msg.replyTo && (
                <div className="text-gray-300 text-sm italic mb-2 border-l-2 border-gray-500 pl-2">
                  Replying to: {msg.replyTo}
                </div>
              )}
              <div className="flex flex-col">
                {msg.type === "file" ? (
                  <a
                    href={msg.fileUrl}
                    download
                    className="text-blue-300 underline"
                  >
                    {msg.text}
                  </a>
                ) : (
                  <p className="mb-2 text-lg">{msg.text}</p>
                )}
                <span className="text-xs text-gray-300">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="absolute -right-2 top-2 transform translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="bg-gray-800 p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition-all duration-300">
                  <BsReply 
                    size={16} 
                    className="text-white transform rotate-180 hover:scale-110 transition-all duration-300" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-900 flex flex-col border-t-2 border-gray-800 relative">
          {file && (
            <div className="mb-2 flex items-center justify-between bg-gray-800 p-2 rounded-lg text-white">
              <span className="text-sm">{file.name}</span>
              <button
                className="text-red-500 hover:text-red-600 transition-all"
                onClick={() => setFile(null)}
              >
                Remove
              </button>
            </div>
          )}

          {replyTo && (
            <div className="mb-2 flex items-center justify-between bg-gray-800 p-2 rounded-lg text-gray-300 italic">
              <span>Replying to: {replyTo.text}</span>
              <button
                className="text-red-500 hover:text-red-600 transition-all"
                onClick={() => setReplyTo(null)}
              >
                Cancel
              </button>
            </div>
          )}

          <div className="flex items-center">
            <input
              className="flex-grow bg-gray-800 p-3 rounded-lg outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition-all"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-4 p-3 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            >
              <BsEmojiSmile size={24} color="white" />
            </button>
            <div className="relative">
              <label className="ml-4 p-3 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                <BsFileEarmarkArrowUp size={24} color="white" />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <button
              className="ml-4 p-3 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all"
              onClick={sendMessage}
            >
              <AiOutlineSend size={24} color="white" />
            </button>
          </div>

          {showEmojiPicker && (
            <div className="absolute bottom-16 right-16 bg-gray-900 rounded-lg shadow-lg z-20">
              <Picker onEmojiClick={addEmoji} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-900 p-2 text-center text-sm text-gray-500 border-t border-gray-800">
        A Concept By Jivika
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
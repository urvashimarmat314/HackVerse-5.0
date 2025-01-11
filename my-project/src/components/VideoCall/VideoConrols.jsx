import React, { useState } from "react";

const VideoControls = ({ callFrame }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const toggleAudio = () => {
    if (!callFrame) {
      console.error("Call frame is not initialized.");
      return;
    }
    callFrame.setLocalAudio(!isMuted);
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    if (!callFrame) {
      console.error("Call frame is not initialized.");
      return;
    }
    callFrame.setLocalVideo(!isVideoOff);
    setIsVideoOff(!isVideoOff);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <button
        onClick={toggleAudio}
        style={{
          padding: "10px 20px",
          backgroundColor: isMuted ? "#f44336" : "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: callFrame ? "pointer" : "not-allowed",
          opacity: callFrame ? "1" : "0.5",
          transition: "background-color 0.3s ease",
        }}
        disabled={!callFrame}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <button
        onClick={toggleVideo}
        style={{
          padding: "10px 20px",
          backgroundColor: isVideoOff ? "#f44336" : "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: callFrame ? "pointer" : "not-allowed",
          opacity: callFrame ? "1" : "0.5",
          transition: "background-color 0.3s ease",
        }}
        disabled={!callFrame}
      >
        {isVideoOff ? "Turn Video On" : "Turn Video Off"}
      </button>
    </div>
  );
};

export default VideoControls;

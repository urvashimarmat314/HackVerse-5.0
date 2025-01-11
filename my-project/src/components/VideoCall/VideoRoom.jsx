import React from "react";

const VideoRoom = () => {
  const videoCallUrl = "https://urvashi31.daily.co/P41LA9QMvQyaCc8C9yFC";

  const joinRoom = () => {
    // Redirect to the video call URL
    window.location.href = videoCallUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Header with floating image */}
      <div className="relative w-full h-96">
        <img
          src="../src/assets/photo-1588196749597-9ff075ee6b5b.jpg" // Replace with your desired header image
          alt="Header Image"
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-5xl font-extrabold animate-fade-in">
            Join the Video Call Room
          </h1>
          <p className="text-xl mt-4 animate-fade-in">
            Connect with others seamlessly.
          </p>
        </div>
      </div>

      {/* Doctor's Info Card */}
      <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl mt-10">
        <div className="flex items-center mb-8">
          <img
            src="https://via.placeholder.com/150" // Replace with a doctor's image
            alt="Doctor"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Dr. John Doe</h2>
            <p className="text-lg text-gray-600">Specialist in Cardiology</p>
            <p className="text-md text-gray-500 mt-2">
              Available for consultations and video calls. Join now to talk with Dr. John.
            </p>
          </div>
        </div>
       
        <button
          onClick={joinRoom}
          className="w-full px-6 py-3 text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-300 hover:scale-105"
        >
          Join Call
        </button>
      </div>
    </div>
  );
};

export default VideoRoom;

import React from "react";

const MedicineHeader = () => {
  return (
    <header className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../src/assets/218955_small.mp4"
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4">
          Jivika: Finding Your Medicine<br /> Than You Can Say <br /> 
          <span className="text-blue-400 text-5xl ">"I Need a Prescription!"</span>
        </h1>
      </div>
    </header>
  );
};

export default MedicineHeader;




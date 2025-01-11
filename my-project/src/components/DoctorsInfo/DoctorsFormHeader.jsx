import React from "react";

const DoctorsHeader = () => {
  return (
    <div
      className="relative w-full h-[calc(100vh-80px)] text-white" // Adjust height to account for the navbar
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2024/05/11/11/04/call-center-8754751_1280.jpg')`, // Replace with your image URL
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Doctors Form
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
          Thank you for being part of the Dr. Jivka platform! Your expertise and
          dedication are greatly appreciated in helping us provide quality
          healthcare services to our users.
        </p>
      </div>
    </div>
  );
};

export default DoctorsHeader;

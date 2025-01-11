import React from "react";

const ContactHeader = () => {
  return (
    <div className="relative w-full h-72 sm:h-96 lg:h-[500px] bg-cover bg-center text-white" 
      style={{
        backgroundImage: `url('../src/assets/premium_photo-1661382210749-759c11c197a4.jpg')`, // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-300 mb-4">
          <span className="hover:text-gray-100 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Get in Touch with Us
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
          Have questions or need support? Reach out to us, and we'll be happy to assist you. We're here to help!
        </p>

        {/* Call to Action Button */}
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;

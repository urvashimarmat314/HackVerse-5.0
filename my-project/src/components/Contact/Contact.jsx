import React from 'react';

const Contact = () => {
  return (
    <div className="w-full h-screen">
      {/* Contact Header Section */}
      <div
        className="relative h-full bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152_1280.jpg')`, // Replace with your image URL
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-5xl font-bold">Doctors Form</h1>
          <p className="mt-4 text-lg sm:text-xl text-center max-w-lg">
            Thank you for being part of the Dr. Jivka platform! Your expertise
            and dedication are greatly appreciated in helping us provide quality
            healthcare services to our users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

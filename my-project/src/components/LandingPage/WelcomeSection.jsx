import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white">
      {/* Text Section */}
      <div className="text-center px-6 md:px-12 py-12">
        <h3 className="text-blue-500 font-bold uppercase text-sm tracking-widest">
          Welcome to Meddical
        </h3>
        <h1 className="text-blue-900 font-bold text-2xl md:text-4xl mt-4">
          A Great Place to Receive Care
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <button className="mt-6 text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center justify-center">
          Learn More <span className="ml-2 material-icons">arrow_forward</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-72 sm:h-96 lg:h-[500px] bg-cover bg-center text-white" 
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_960_720.jpg')`, // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Breadcrumbs */}
        

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Get in Touch with Us
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
          Have questions or need support? Reach out to us, and we'll be happy to assist you. We're here to help!
        </p>

        {/* Call to Action Button */}
        
      </div>
    </div>


    </section>
  );
};

export default WelcomeSection;

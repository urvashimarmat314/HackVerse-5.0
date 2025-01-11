import React from "react";

const ChatAppUI = () => {
  return (
    <div className="relative w-full text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../src/assets/pexels-navneet-shanu-202773-672630-min.jpg')",
          }}
        ></div>

        {/* Low Exposure Overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* Floating Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-tight text-white animate-float-text drop-shadow-lg">
            Welcome to <span className="text-cyan-400">FutureCare.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 animate-slide-in max-w-3xl drop-shadow-lg">
            Redefining healthcare with technology and innovation. Your health
            matters, and we’re here to prove it.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-20 py-16 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12">
          {[
            {
              title: "Instant Chat",
              description: "24/7 direct access to certified medical experts.",
              icon: "💬",
            },
            {
              title: "Video Consultations",
              description: "Personalized healthcare advice via secure video calls.",
              icon: "🎥",
            },
            {
              title: "Health Analytics",
              description: "Monitor your vitals with cutting-edge tools.",
              icon: "📊",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="text-6xl mb-4 animate-pulse">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-cyan-400 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-20 py-16 bg-black">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-12">
          {["A life-changing platform.", "Superb care!", "Highly innovative!"].map(
            (testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
              >
                <p className="text-gray-400 italic">"{testimonial}"</p>
                <div className="text-right">
                  <span className="font-bold">- User {index + 1}</span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-20 py-16 bg-gradient-to-t from-gray-900 to-black text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Impact in Numbers</h2>
        <div className="flex flex-wrap justify-center gap-16 px-6 sm:px-12">
          {[
            { value: "1M+", label: "Chats Delivered" },
            { value: "50K+", label: "Doctors Registered" },
            { value: "99.9%", label: "Satisfied Users" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-300"
            >
              <h3 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 mb-2 animate-bounce">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-20 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          Questions? We're here to help anytime.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
     

      {/* Animations */}
      <style>
        {`
          @keyframes float-text {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes gradient-slide {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float-text {
            animation: float-text 4s ease-in-out infinite;
          }
          .animate-gradient-slide {
            animation: gradient-slide 8s ease infinite;
          }
          .animate-slide-in {
            animation: slide-in 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ChatAppUI;

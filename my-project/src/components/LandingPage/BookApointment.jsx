import React from 'react';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg grid md:grid-cols-2">
        {/* Left Section - Image and Text */}
        <div className="relative bg-blue-50 p-8 flex items-center">
          <img
            src="https://via.placeholder.com/800x600"
            alt="Doctor"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Book an Appointment
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 bg-blue-900 text-white">
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="time"
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. John</option>
              </select>
              <select
                className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              className="p-3 rounded bg-blue-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>

            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 rounded text-white font-bold hover:bg-blue-500 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;

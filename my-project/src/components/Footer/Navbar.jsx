import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-blue-900">
              <span className="text-white">Dr.</span>
              <span className="text-blue-500">Jivika</span>
            </h1>
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex flex-wrap space-x-6 text-sm font-medium">
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/aibot">AI Bot</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/Appointment">Appointment</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/Medicines">Medicines</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/NOTICE">Notice</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/video-call">VideoCall</Link>
            </li>
            
          </ul>

          {/* Mobile Menu (Dropdown Toggle) */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              id="mobile-menu-toggle"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex mt-4 md:mt-0 items-center space-x-4">
            <button
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition-transform transform hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
            <button
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-blue-800 text-white space-y-2 py-4 px-4"
        >
          <Link
            to="/"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/aibot"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            AI Bot
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Contact
          </Link>
         
          <Link
            to="/Appointment"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Appointment
          </Link>
          <Link
            to="/Medicines"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Medicines
          </Link>
          <Link
            to="/NOTICE"
            className="block hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Notice
          </Link>
          <button
            onClick={() => navigate("/signup")}
            className="block w-full text-left bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="block w-full text-left bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md"
          >
            Log In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

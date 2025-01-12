import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { api } from "../../axios.config.js";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/api/user/authcheck"); // Adjust API endpoint as needed
        if (response.status === 200) {
          const userData = response.data.user;
          console.log(userData);
          // Set the displayName directly in the user object
          if (userData.role === "doctor") {
            userData.displayName = `Dr. ${userData.name}`;
          } else {
            userData.displayName = userData.name;
          }
          setUser(userData); // Set the user data with displayName
        }
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data?.message || error.message);
        alert("Failed to fetch user data. Please try again.");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await api.get("/api/user/logout"); // Adjust if it's a GET request
      if (response.status === 200) {
        console.log("Successfully logged out:", response.data.message);

        // Clear any local authentication state if necessary
        localStorage.removeItem("authToken");

        // Redirect user to the login page
        navigate("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error.response?.data?.message || error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  if (!user) {
    return null; // Optionally show a loader or placeholder while user data is loading
  }

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
              <Link to="/appointment">Appointment</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/medicines">Medicines</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/Notice">Bulletin</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/video-call">VideoCall</Link>
             </li>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative mt-4 md:mt-0">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 bg-blue-800 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              <span>{user.displayName}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 origin-top-right ${
                isProfileOpen
                  ? "transform opacity-100 scale-100"
                  : "transform opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <hr className="my-1" />
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ProfileNavbar;

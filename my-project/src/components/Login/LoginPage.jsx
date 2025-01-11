import React, { useState } from "react";
import {api} from "../../axios.config.js";
import { useNavigate } from "react-router-dom"; // For navigation

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // For redirecting users after login

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form reload
  
    // Collect form data
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
  
    setIsLoading(true); // Start loading
    try {
      // Send login data to backend
      const response = await api.post("/api/user/login", data);
  
      if (response.status === 200) {
        setLoginSuccess(true); // Show success message
        const redirectUrl = response.data.redirectTo; // Get the redirect URL from the response
  
        setTimeout(() => {
          setLoginSuccess(false);
          navigate(redirectUrl); // Redirect to the URL received from the backend
        }, 3000); // Hide alert after 3 seconds
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false); // Stop loading
    }
  };  

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Video Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <video
          src="https://cdn.pixabay.com/video/2019/04/09/22704-329952760_tiny.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-500/20" /> {/* Overlay */}
       
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-md p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Log In</h1>
            <p className="text-lg text-gray-600">
              Access your account and manage your medicine needs with ease!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 font-semibold ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or log in with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100">
              Google
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-100">
              Apple
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Success Alert */}
      {loginSuccess && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-md shadow-lg">
          <p className="font-semibold">Login Successful!</p>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-4 rounded-md shadow-lg">
          <p className="font-semibold">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
import React from 'react';

const Footerai = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h4>
          <p className="mb-6 text-gray-400">
            Stay updated with the latest news and special offers!
          </p>
          <form className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-r-md text-white font-medium">
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 Hospital's Name. All Rights Reserved by PNTEC-LTD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footerai;

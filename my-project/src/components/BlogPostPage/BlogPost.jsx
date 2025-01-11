import React from "react";

const BlogPost = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-64 pb-16 p-5 md:p-10">
      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/800/400"
              alt="Blog"
              className="w-full object-cover h-60"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <span className="flex items-center gap-1">
                  <i className="fas fa-calendar-alt"></i> Monday 05, September 2021
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-user"></i> By Author
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-eye"></i> 68
                </span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-heart"></i> 86
                </span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                A Passion for Putting Patients First
              </h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque placerat scelerisque tortor ornare ornare. Quisque
                placerat scelerisque tortor ornare ornare.
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition">
                Read More &rarr;
              </button>
            </div>
          </div>

          {/* Additional Blog Posts */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/800/400"
                alt={`Blog ${index + 2}`}
                className="w-full object-cover h-60"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-calendar-alt"></i> Monday 06, September 2021
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-user"></i> By Author
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-eye"></i> {45 + index * 10}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-heart"></i> {50 + index * 15}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Blog Post Title {index + 2}
                </h2>
                <p className="text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  placerat scelerisque tortor ornare ornare.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold transition">
                  Read More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="space-y-10">
          {/* Search */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 text-blue-500 hover:text-blue-700">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((post) => (
                <li key={post} className="flex items-center space-x-4">
                  <img
                    src="/api/placeholder/80/80"
                    alt="Post"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">
                      This Article's Title Goes Here, but not too long.
                    </p>
                    <span className="text-sm text-gray-500">
                      Monday 05, September 2021
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Surgery", "Health Care", "Medical", "Professional"].map(
                (category, index) => (
                  <li
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-800">{category}</span>
                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                      {index + 3}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
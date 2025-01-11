import React from "react";

const BlogLayout = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Main Content */}
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1550792436-181701c71f63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
          alt="Doctors"
          className="w-full h-auto rounded-lg mb-4"
        />
        <p className="text-justify leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
          Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
          scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor
          ornare ornare Convallis felis vitae tortor augue. Velit nascetur
          proin massa in.
        </p>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <svg
            className="absolute left-3 top-2/4 -translate-y-2/4 w-5 h-5 text-gray-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Posts</h2>
          <ul className="space-y-4">
            {[...Array(5)].map((_, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Post Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-gray-500">Monday 05, September 2021</p>
                  <h3 className="font-medium text-sm">
                    This Article's Title goes Here, but not too long.
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {[
              { name: "Surgery", count: 3 },
              { name: "Health Care", count: 5 },
              { name: "Medical", count: 8 },
              { name: "Professional", count: 10 },
            ].map((category, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
              >
                <span>{category.name}</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;

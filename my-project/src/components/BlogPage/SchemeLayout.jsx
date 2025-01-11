import React, { useState } from "react";

const SchemeLayout = () => {
  // State to manage which scheme's document list is expanded
  const [expandedScheme, setExpandedScheme] = useState(null);

  // Sample data for schemes and their required documents
  const schemes = [
    {
      id: 1,
      title: "Prime Minister's Health Scheme",
      description:
        "This scheme provides affordable health services to underprivileged people.",
      date: "January 1, 2021",
      image: "https://via.placeholder.com/500x300",
      documents: ["Aadhar Card", "Income Certificate", "Address Proof"],
    },
    {
      id: 2,
      title: "National Education Support Scheme",
      description:
        "This scheme focuses on free education for children from low-income families.",
      date: "March 15, 2020",
      image: "https://via.placeholder.com/500x300",
      documents: ["Birth Certificate", "ID Proof", "Residence Proof"],
    },
  ];

  // Toggle document list visibility
  const toggleDocuments = (id) => {
    setExpandedScheme((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-20 flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6">
      {/* Main Content */}
      <div className="flex-1">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="mb-8">
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{scheme.title}</h2>
            <p className="text-justify leading-relaxed">{scheme.description}</p>
            <p className="text-sm text-gray-500">Introduced on: {scheme.date}</p>
            <button
              onClick={() => toggleDocuments(scheme.id)}
              className="mt-4 text-blue-500 hover:underline transition"
            >
              {expandedScheme === scheme.id
                ? "Hide Required Documents"
                : "View Required Documents"}
            </button>
            {/* Document List */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expandedScheme === scheme.id ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="mt-4 space-y-3">
                {scheme.documents.map((doc, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow-md transition transform hover:scale-105"
                  >
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Schemes"
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

        {/* Recent Schemes */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Schemes</h2>
          <ul className="space-y-4">
            {schemes.map((scheme) => (
              <li key={scheme.id} className="flex items-center gap-4">
                <img
                  src={scheme.image}
                  alt="Scheme Thumbnail"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-gray-500">{scheme.date}</p>
                  <h3 className="font-medium text-sm">{scheme.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-4">Scheme Categories</h2>
          <ul className="space-y-2">
            {["Health", "Education", "Agriculture", "Social Welfare"].map(
              (category, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                >
                  <span>{category}</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    {Math.floor(Math.random() * 10) + 1}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SchemeLayout;

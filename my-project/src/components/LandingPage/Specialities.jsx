import React from "react";

const Specialties = () => {
  const specialties = [
    { title: "Neurology" },
    { title: "Bones" },
    { title: "Oncology" },
    { title: "Otorhinolaryngology" },
    { title: "Ophthalmology" },
    { title: "Cardiovascular" },
    { title: "Pulmonology" },
    { title: "Renal Medicine" },
    { title: "Gastroenterology" },
    { title: "Urology" },
    { title: "Dermatology" },
    { title: "Gynaecology" },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-blue-500 uppercase text-sm font-medium tracking-wider mb-2">
          Always Caring
        </h2>
        <h1 className="text-navy-900 text-3xl font-bold mb-8">Our Specialties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-gray-50 hover:bg-blue-600 hover:text-white transition duration-300 rounded-lg p-6"
            >
              <div className="text-center">
                <div className="flex justify-center items-center mb-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {/* Icon Placeholder */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-blue-500 group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 11c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11h2m0 0h-2m2 0h2M15 7V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v2m8 6v5m-6 0v-5m6 5h-6m0 0H9m6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-medium">{specialty.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;

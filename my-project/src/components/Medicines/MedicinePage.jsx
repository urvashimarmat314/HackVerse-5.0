import React, { useEffect, useState } from "react";

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const medicineData = data.map((user) => ({
          id: user.id,
          name: user.name,
          availability: Math.random() > 0.5 ? "Available" : "Out of Stock",
          dealer: user.company.name,
          contact: {
            phone: user.phone,
            email: user.email,
          },
        }));
        setMedicines(medicineData);
        setFilteredMedicines(medicineData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching medicines:", error);
        setLoading(false);
      }
    };
    fetchMedicines();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(query)
    );
    setFilteredMedicines(filtered);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading medicines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-blue-600">
        Nearby Medicine Availability
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-4 sm:mb-6 px-2 sm:px-0">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for medicines..."
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Medicine Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 break-words">
                  {medicine.name}
                </h2>
                <p
                  className={`text-base sm:text-lg mt-2 font-medium ${
                    medicine.availability === "Available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {medicine.availability}
                </p>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Dealer: {medicine.dealer}
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-gray-700 text-sm sm:text-base break-words">
                    <strong>Phone:</strong> {medicine.contact.phone}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base break-words">
                    <strong>Email:</strong> {medicine.contact.email}
                  </p>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base">
                Contact Dealer
              </button>
            </div>
          ))
        ) : (
          <div className="text-center col-span-full py-8 text-gray-500">
            <p className="text-lg">No medicines found matching "{searchTerm}"</p>
            <p className="text-sm mt-2">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinePage;
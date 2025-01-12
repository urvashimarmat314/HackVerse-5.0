import React, { useState } from "react";
import {api} from "../../axios.config.js";

const DoctorsForm = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    MedicalCollege: "",
    UGDegree: "",
    YearOfUGCompletion: "",
    MedicalRegistrationNumber: "",
    Specialities: [],
    PGDegree: "",
    PGSpecialization: "",
    YearOfPGCompletion: "",
    // experience: "",
  });

  const SpecialityOptions = [
    "General Medicine",
    "Pediatrics",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Neurology",
    "Ayurveda",
    "Gynecology",
    "ENT",
    "Ophthalmology",
  ];

  const UGDegrees = ["MBBS", "BAMS", "BHMS", "BDS"];
  const PGDegrees = ["MD", "MS", "DNB", "DM"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialityChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => {
      const updatedSpecialities = e.target.checked
        ? [...prev.Specialities, value]
        : prev.Specialities.filter((Speciality) => Speciality !== value);
      return { ...prev, Specialities: updatedSpecialities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/api/user/profile/doctor",
        formData
      );
      console.log("Doctor Registered:", response.data);
    } catch (error) {
      console.error("Error registering doctor:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Doctor Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender
                </label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Education Details */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Education Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Medical College
                  </label>
                  <input
                    type="text"
                    name="MedicalCollege"
                    value={formData.MedicalCollege}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    UG Degree
                  </label>
                  <select
                    name="UGDegree"
                    value={formData.UGDegree}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select UG Degree</option>
                    {UGDegrees.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Year of UG Completion
                  </label>
                  <input
                    type="number"
                    name="YearOfUGCompletion"
                    value={formData.YearOfUGCompletion}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Medical Registration Number
                  </label>
                  <input
                    type="text"
                    name="MedicalRegistrationNumber"
                    value={formData.MedicalRegistrationNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Specialities */}
            <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Select Specialities</h1>

      <div className="relative">
        <label className="block text-gray-700 font-semibold mb-2">
          Specialities
        </label>

        {/* Wrapper for Checkboxes */}
        <div className="relative overflow-y-auto max-h-72 border border-gray-300 rounded-lg shadow-lg p-4">
          <ul className="space-y-4">
            {SpecialityOptions.map((Speciality) => (
              <li key={Speciality} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  value={Speciality}
                  onChange={handleSpecialityChange}
                  checked={formData.Specialities.includes(Speciality)}
                  className="form-checkbox text-blue-500 focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium">{Speciality}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Display Selected Specialities */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Selected Specialities:</h2>
        {formData.Specialities.length > 0 ? (
          <ul className="list-disc pl-5">
            {formData.Specialities.map((spec, index) => (
              <li key={index} className="text-gray-800">
                {spec}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No specialities selected.</p>
        )}
      </div>
    </div>
            {/* PG Details (Optional) */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Post Graduation Details (Optional)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    PG Degree
                  </label>
                  <select
                    name="PGDegree"
                    value={formData.PGDegree}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select PG Degree</option>
                    {PGDegrees.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    PG Specialization
                  </label>
                  <input
                    type="text"
                    name="PGSpecialization"
                    value={formData.PGSpecialization}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Year of PG Completion
                  </label>
                  <input
                    type="number"
                    name="YearOfPGCompletion"
                    value={formData.YearOfPGCompletion}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div> */}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorsForm;
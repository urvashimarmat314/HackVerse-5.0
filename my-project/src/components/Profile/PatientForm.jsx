import React, { useState } from "react";
import { api } from "../../axios.config.js";
import { useTranslation } from "react-i18next";

const PatientForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    MedicalHistory: "",
    Contact: "",
    EmergencyContact: "",
    Allergies: "",
    CurrentMedications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "http://localhost:5000/api/user/profile/patient/",
        formData,
        {
          withCredentials: true,
        }
      );
      alert(t("patientForm.formSuccess"));
      setFormData({
        Age: "",
        Gender: "",
        MedicalHistory: "",
        Contact: "",
        EmergencyContact: "",
        Allergies: "",
        CurrentMedications: "",
      });
    } catch (error) {
      console.error("Error sending data to backend:", error);
      alert(t("patientForm.formError"));
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-600 flex flex-col items-center justify-center">
      <div className="relative w-full h-72 bg-blue-800 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">{t("patientForm.title")}</h1>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("hi")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          हिंदी
        </button>
        <button
          onClick={() => changeLanguage("mr")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          मराठी
        </button>
        <button
          onClick={() => changeLanguage("kn")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          ಕನ್ನಡ
        </button>
      </div>

      <form
        className="bg-white shadow-xl rounded-lg p-8 mt-8 w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          {t("patientForm.fillDetails")}
        </h2>
        <div className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.age")}:
            </label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.gender")}:
            </label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                {t("patientForm.selectGender")}
              </option>
              <option value="Male">{t("patientForm.male")}</option>
              <option value="Female">{t("patientForm.female")}</option>
              <option value="Other">{t("patientForm.other")}</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.medicalHistory")}:
            </label>
            <textarea
              name="MedicalHistory"
              value={formData.MedicalHistory}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.contact")}:
            </label>
            <input
              type="tel"
              name="Contact"
              value={formData.Contact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.emergencyContact")}:
            </label>
            <input
              type="tel"
              name="EmergencyContact"
              value={formData.EmergencyContact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.allergies")}:
            </label>
            <input
              type="text"
              name="Allergies"
              value={formData.Allergies}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Current Medications */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.medications")}:
            </label>
            <input
              type="text"
              name="CurrentMedications"
              value={formData.CurrentMedications}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-1/3 mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg"
        >
          {t("patientForm.submit")}
        </button>
      </form>
    </div>
  );
};
 
export default PatientForm;

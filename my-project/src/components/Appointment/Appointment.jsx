import React, { useState, useEffect } from "react";
import { api } from "../../axios.config.js"; // Assuming axios instance is set up in axios.config.js
// import Cookies from "js-cookie"; // Assuming you use js-cookie for cookies management

const Appointment = () => {
  const [formData, setFormData] = useState({
    doctorId: "",
    reason: "",
    dateTime: "", // Combined date and time
    mode: "", // Online or Offline
    notes: "", // Optional
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Fetch departments on mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await api.get("/api/user/appointment/uniqueDepartments");
        setDepartments(response.data.departments); // Update with distinct departments
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  // Fetch doctors based on selected department
  const fetchDoctors = async (department) => {
    try {
      const response = await api.get(`/api/user/appointment/doctors?specialization=${department}`);
      setDoctors(response.data.doctors); // Update with doctors from selected department
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setFormData({ ...formData, department });
    fetchDoctors(department); // Fetch doctors on department change
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      formData.doctorId,
      `${formData.preferredDate}T${formData.preferredTime}:00`,
      formData.reason,
      formData.appointmentType,
      formData.additionalNotes
    );

    // Creating the final data for submission
    const appointmentData = {
      doctorId: formData.doctorId,
      dateTime: `${formData.preferredDate}T${formData.preferredTime}:00`, // Combining date and time
      reason: formData.reason,
      mode: formData.appointmentType, // Online or Offline
      notes: formData.additionalNotes,
    };

    try {
      const response = await api.post("/api/user/appointment/schedule", appointmentData);

      if (response.status === 201) {
        alert("Appointment booked successfully!");
      } else {
        alert("Error booking appointment.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center animate-fade-in overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form Section */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Please fill in the form below to book an appointment.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <select
                name="department"
                value={formData.department}
                onChange={handleDepartmentChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.UserId.name}
                  </option>
                ))}
              </select>

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              >
                <option value="">Reason for Appointment</option>
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Emergency">Emergency</option>
              </select>

              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              />
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              />
              <div className="col-span-2 flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Online"
                    checked={formData.appointmentType === "Online"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Online
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="Offline"
                    checked={formData.appointmentType === "Offline"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Offline
                </label>
              </div>
              <textarea
                name="additionalNotes"
                placeholder="Additional Notes (Optional)"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Schedule Section */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6">Schedule Hours</h2>
            <div className="mt-6">
              <p className="text-lg font-semibold">Available Slots:</p>
              <ul className="space-y-2 mt-2">
                {Array.from({ length: 12 }, (_, i) => {
                  const startHour = 9 + i;
                  const start = startHour < 12 ? `${startHour}:00 AM` : `${startHour - 12}:00 PM`;
                  const endHour = startHour + 1;
                  const end =
                    endHour < 12
                      ? `${endHour}:00 AM`
                      : endHour === 12
                      ? `12:00 PM`
                      : `${endHour - 12}:00 PM`;
                  return (
                    <li key={i} className="flex justify-between">
                      <span>Slot {i + 1}</span>
                      <span>
                        {start} - {end}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

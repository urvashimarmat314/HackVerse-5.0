import React, { useState, useEffect } from "react";
import {api }from "../../axios.config.js";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [previousAppointments, setPreviousAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await api.get("/api/user/appointment/dashboard/doctor");
        
        if (response.data.success) {
          // Separate appointments into current and previous
          const current = [];
          const previous = [];
          const now = new Date();

          response.data.appointments.forEach((appointment) => {
            const appointmentDateTime = new Date(appointment.dateTime);
            if (appointmentDateTime >= now) {
              current.push({
                id: appointment.appointmentId,
                patientName: appointment.patientName || "Unknown",
                time: appointmentDateTime.toLocaleTimeString(),
                date: appointmentDateTime.toLocaleDateString(),
                status: appointment.status || "pending",
              });
            } else {
              previous.push({
                id: appointment.appointmentId,
                patientName: appointment.patientName || "Unknown",
                time: appointmentDateTime.toLocaleTimeString(),
                date: appointmentDateTime.toLocaleDateString(),
                status: appointment.status || "completed",
              });
            }
          });

          setAppointments(current);
          setPreviousAppointments(previous);
        } else {
          setError("Failed to fetch appointments.");
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Error fetching appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleAction = (id, action) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status: action } : appointment
      )
    );
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading appointments...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Appointments</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {appointments.length > 0 ? (
            appointments.map(({ id, patientName, time, date, status }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium">Patient: {patientName}</p>
                  <p>
                    Date: {date} | Time: {time}
                  </p>
                  <p>Status: {status}</p>
                </div>
                <div>
                  {status === "pending" && (
                    <>
                      <button
                        onClick={() => handleAction(id, "accepted")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(id, "rejected")}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No upcoming appointments.</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Previous Appointments</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {previousAppointments.length > 0 ? (
            previousAppointments.map(({ id, patientName, time, date, status }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium">Patient: {patientName}</p>
                  <p>
                    Date: {date} | Time: {time}
                  </p>
                  <p>Status: {status}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No previous appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;


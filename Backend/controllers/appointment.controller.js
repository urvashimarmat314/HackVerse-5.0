import { Appointment, DoctorDetails, User } from "../models/index.js";

export const scheduleAppointment = async (req, res) => {
  try {
    const { doctorId, dateTime, reason, mode, notes } = req.body;

    const patientId = req.user._id; // Get the logged-in patient's ID
    // console.log("Patient:", patientId);

    // Create the appointment
    const newAppointment = new Appointment({
      patientId,
      doctorId,
      dateTime,
      reason,
      mode,
      notes,
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment scheduled successfully",
      data: newAppointment,
    });
  } catch (error) {
    console.error("Error scheduling appointment:", error);
    res.status(500).json({
      success: false,
      message: "Server error while scheduling appointment",
      error: error.message,
    });
  }
};

export const getDepartments = async (req, res) => {
  try {
    const departments = await DoctorDetails.distinct("Specialization");
    res.status(200).json({
      success: true,
      departments,
    });
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching departments",
      error: error.message,
    });
  }
};

export const getDoctorsByDepartment = async (req, res) => {
  try {
    const { specialization } = req.query; // Get specialization from query params
    if (!specialization) {
      return res.status(400).json({
        success: false,
        message: "Specialization is required",
      });
    }

    // Find doctors that belong to the selected specialization (array of specializations)
    const doctors = await DoctorDetails.find({ Specialization: specialization })
      .populate("UserId", "name") // Populate the 'UserId' field with 'name'
      .exec(); // Ensure this is executed correctly

    if (!doctors || doctors.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No doctors found for specialization: ${specialization}`,
      });
    }

    res.status(200).json({
      success: true,
      doctors, // This will include doctor details and their associated 'UserId' name
    });
  } catch (error) {
    console.error("Error fetching doctors by department:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching doctors",
      error: error.message,
    });
  }
};

export const getAppointmentsForDoctor = async (req, res) => {
  try {
    const doctorId = req.user._id; // Extract doctor ID from the logged-in user's JWT
    // console.log(doctorId);
    const doctorDetails = await DoctorDetails.findOne({ UserId: doctorId });
    // console.log(doctorDetails._id);
    const appointments = await Appointment.find({
      doctorId: doctorDetails._id,
    });
    // Assuming 'User' is your User model
    const patientIds = appointments.map((appointment) => appointment.patientId);

    // Fetch names for each patientId
    const patientNames = await Promise.all(
      patientIds.map(async (id) => {
        const user = await User.findById(id); // Fetch user by ID
        return user?.name || "Unknown"; // Return name or 'Unknown' if user is not found
      })
    );

    // console.log(patientNames);
    // const patient = await Patient.find({})
    // .populate("patientId", "name email") // Populate patient details (name, email, etc.)
    // .exec();

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found for this doctor",
      });
    }

    // Format appointments to include relevant details
    const formattedAppointments = appointments.map((appointment) => ({
      appointmentId: appointment._id,
      // patientName: appointment.patientId.name,
      // patientEmail: appointment.patientId.email,
      reason: appointment.reason,
      dateTime: appointment.dateTime,
      mode: appointment.mode,
      notes: appointment.notes || "No additional notes",
      formattedDateTime: appointment.dateTime.toLocaleString(), // Human-readable date-time
    }));

    res.status(200).json({
      success: true,
      appointments: formattedAppointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching appointments",
      error: error.message,
    });
  }
};

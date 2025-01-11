import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientDetails",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DoctorDetails",
    required: true,
  },
  dateTime: { // Combined date and time
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    enum: ["Online", "Offline"],
    default: "Offline",
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
    required: true,
  }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;

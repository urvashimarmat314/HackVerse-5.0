import mongoose from "mongoose";

const doctorDetailsSchema = {
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  Age: {
    type: Number,
    required: true,
  },
  UGCollege: {
    type: String,
    required: true,
  },
  UGDegree: {
    type: String,
    required: true,
  },
  YearOfUGCompletion: {
    type: Number,
    required: true,
  },
  MedicalRegistrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  Specialization: {
    type: [String],
    enum: [
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
    ],
    required: true,
  },
  PGDegree: {
    type: String,
  },
  PGSpecialization: {
    type: String,
  },
  YearOfPGCompletion: {
    type: Number,
  },
  ConsultationFee: {
    type: Number, // Add this for simplicity
    default: 0, // Default fee if not provided
  },
};

const DoctorDetails = mongoose.model("DoctorDetails", doctorDetailsSchema);
export default DoctorDetails;
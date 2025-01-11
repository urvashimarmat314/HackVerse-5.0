import mongoose from "mongoose";

const patientDetailsSchema = {
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  MedicalHistory: {
    type: String,
  },
  Contact: {
    type: Number,
    required: true,
  },
  EmergencyContact: {
    type: Number,
  },
  // BloodType: {
  //   type: String,
  //   required: true,
  //   enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  // },
  Allergies: {
    type: String,
    default: "None"
  },
  CurrentMedications: {
    type: String,
    default: "None"
  },
  // PastSurgeries: {
  //   type: String,
  //   required: true,
  // },
  // ChronicConditions: {
  //   type: String,
  //   required: true,
  // },
  MedicalFile: {
    type: String,
  },
};

const PatientDetails = mongoose.model("PatientDetails", patientDetailsSchema);
export default PatientDetails;

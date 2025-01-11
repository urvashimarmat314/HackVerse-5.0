import { PatientDetails } from "../models/index.js";

export const setPatientProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Access the User ID from the decoded token

    // Check if a patient profile already exists for the user
    const existingPatientProfile = await PatientDetails.findOne({ UserId: userId });
    
    if (existingPatientProfile) {
      return res.status(400).json({
        success: false,
        message: "Patient profile already exists. You can update your profile instead.",
      });
    }

    const {
      Age, // Patient's age
      Gender, // Patient's gender
      Allergies = "None", // Default value for allergies
      CurrentMedications = "None", // Default value for medications
      EmergencyContact, // Emergency contact number
      MedicalFile = "", // Medical file link
      MedicalHistory, // Medical history details
      Contact, // Patient's contact number
    } = req.body;

    // List of required fields
    const requiredFields = [Age, Gender, EmergencyContact];

    // Validate required fields
    for (let field of requiredFields) {
      if (!field) {
        console.error("Missing required field:", field);
        return res.status(400).json({
          success: false,
          message: "All required fields must be provided",
        });
      }
    }

    // Create the patient profile in the database
    const patientProfileData = {
      UserId: userId,
      Age,
      Gender,
      Allergies,
      CurrentMedications,
      EmergencyContact,
      MedicalFile,
      MedicalHistory,
      Contact,
    };

    const newPatientProfile = await PatientDetails.create(patientProfileData);

    return res.status(201).json({
      success: true,
      message: "Patient profile created successfully",
      data: newPatientProfile,
    });
  } catch (error) {
    console.error("Error in setPatientProfile:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while creating patient profile",
      error: error.message,
    });
  }
};


export const viewPatientProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Get the userId from the decoded token
    const patientProfile = await PatientDetails.findOne({ UserId: userId });

    if (!patientProfile) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Patient profile retrieved successfully",
      data: patientProfile,
    });
  } catch (error) {
    console.error("Error in viewPatientProfile:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while retrieving patient profile",
      error: error.message,
    });
  }
};


export const updatePatientProfile = async (req, res) => {
  try {
    const userId = req.user._id; // User ID from the authenticated user
    const updates = req.body;

    // Fields allowed to be updated
    const allowedUpdates = [
      "Age",
      "Gender",
      "Allergies",
      "CurrentMedications",
      "EmergencyContact",
      "MedicalFile",
      "MedicalHistory",
      "Contact",
    ];

    const isUpdateValid = Object.keys(updates).every((key) =>
      allowedUpdates.includes(key)
    );

    if (!isUpdateValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid update fields provided",
      });
    }

    const updatedPatientProfile = await PatientDetails.findOneAndUpdate(
      { UserId: userId },
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedPatientProfile) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Patient profile updated successfully",
      data: updatedPatientProfile,
    });
  } catch (error) {
    console.error("Error in updatePatientProfile:", error);
    return res.status(500).json({
      success: false,
      message: "Server error occurred while updating patient profile",
      error: error.message,
    });
  }
};

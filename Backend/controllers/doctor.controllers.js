import { DoctorDetails } from "../models/index.js";

// Controller to create a doctor's profile
export const setDoctorProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const existingDoctorProfile = await DoctorDetails.findOne({ UserId: userId });
    
    if (existingDoctorProfile) {
      
      return res.status(400).json({
        success: false,        
        message: "Doctor profile already exists. You can update your profile instead.",
      });
    }
    const {
      Gender,
      Age,
      UGCollege,
      UGDegree,
      YearOfUGCompletion,
      MedicalRegistrationNumber,
      Specialization,
      PGDegree,
      PGSpecialization,
      YearOfPGCompletion,
      ConsultationFee,
    } = req.body;
    
    const newDoctorProfile = new DoctorDetails({
      UserId: userId,
      Gender,
      Age,
      UGCollege,
      UGDegree,
      YearOfUGCompletion,
      MedicalRegistrationNumber,
      Specialization,
      PGDegree,
      PGSpecialization,
      YearOfPGCompletion,
      ConsultationFee,
    });

    await newDoctorProfile.save();

    res
      .status(201)
      .json({
        message: "Doctor profile created successfully!",
        data: newDoctorProfile,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating doctor profile", error: error.message });
  }
};

// Controller to update a doctor's profile
export const updateDoctorProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const updatedData = req.body;

    const updatedProfile = await DoctorDetails.findOneAndUpdate(
      {UserId: userId},
      updatedData,
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    res
      .status(200)
      .json({
        message: "Doctor profile updated successfully",
        data: updatedProfile,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating doctor profile", error: error.message });
  }
};

// Controller to view a doctor's profile
export const viewDoctorProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Get the userId from the decoded token

    // Find the doctor profile by UserId, not _id
    const doctorProfile = await DoctorDetails.findOne({ UserId: userId })
      .populate("UserId"); // Populate the UserId reference with user data

    if (!doctorProfile) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }

    res.status(200).json({
      message: "Doctor profile retrieved successfully",
      data: doctorProfile,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving doctor profile",
      error: error.message,
    });
  }
};
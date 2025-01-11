import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    };
    const createdUser = await User.create(newUser);

    // Reuse login function to directly log in after registration
    return handleLogin(createdUser, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error occurred",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(403).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Reuse login function
    return handleLogin(existingUser, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error occurred",
      error: error.message,
    });
  }
};

const handleLogin = async (user, res) => {
  // console.log("JWT Payload:", { userId: user._id, role: user.role, name: user.name });
  const token = await jwt.sign(
    { userId: user._id, role: user.role, name: user.name }, // Include id, role, name in JWT payload
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  const decoded = jwt.decode(token);
  // console.log("Decoded JWT for debugging:", decoded);

  // Set the token in a cookie
  res.status(200).cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // in milliseconds
  });
  // console.log(user.role);
  // Redirect based on user role
  if (user.role === "Patient") {
    return res.json({
      success: true,
      message: `Welcome ${user.name}!`,
      redirectTo: "/profile/patient",  // Redirect URL for Patient
    });
  } else if (user.role === "Doctor") {
    return res.json({
      success: true,
      message: `Welcome Dr. ${user.name}!`,
      redirectTo: "/profile/doctor",  // Redirect URL for Doctor
    });
  }
};


export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Logout error:", error); // Log any errors that happen during logout
    res.status(500).json({
      success: false,
      message: "Error during logout",
    });
  }
};

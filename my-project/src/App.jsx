import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

// Import Navbar components
import Navbar from "./components/Footer/Navbar";
import ProfileNavbar from "./components/Footer/ProfileNavbar";

// Import Page Components
import AibotPage from "../src/pages/AiBot";
import ContactPage from "../src/pages/ContactPage";
import LandingPage from "../src/pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PatientForm from "./components/Profile/PatientForm";
import Notice from "./pages/Notice";
import Medicines from "./pages/Medicines";
import Login from "./pages/Login";
import SignIn from "./components/Login/SignUp";
import LoginPage from "./components/Login/LoginPage";
import VideoCall from "./pages/VideoCall";
// import LiveChat from "./pages/LiveChat";
import AppointmentForm from "./pages/AppointmentForm";
import DoctorsInfo from "./pages/DoctorsInfo";
import DashBoard from "./pages/DashBoard";
import NavbarSelector from "./components/Footer/NavbarSelector"
import SchemeLayout from "./components/BlogPage/SchemeLayout";

const App = () => {
  return (
    <Router>
      {/* Navbar Selector */}
      <NavbarSelector />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

       {/* AI Bot Page */}
       <Route path="/aibot" element={<AibotPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Profile Pages */}
        <Route path="/profile/patient" element={<PatientForm />} />
        <Route path="/profile/doctor" element={<DoctorsInfo />} />

        {/* Other Pages */}
        <Route path="/Appointment" element={<AppointmentForm />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/NOTICE" element={<Notice/>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/SchemePage" element={<SchemeLayout/>}/>
      </Routes>
    </Router>
  );
};

export default App;

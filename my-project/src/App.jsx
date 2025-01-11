import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentForm from "./pages/AppointmentForm";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Footer/Navbar";
import SignUp from "./components/Login/SignUp";
import LoginPage from "./components/Login/LoginPage";
import NavbarSelector from "./components/Footer/NavbarSelector";
import VideoCall from "./pages/VideoCall";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Router>
        {/* Navigation */}
        <NavbarSelector />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

          {/* Other Pages */}
          <Route path="/Appointment" element={<AppointmentForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/VideoCall" element={<VideoCall/>} />


        </Routes>
      </Router>

    </h1>
  )
}
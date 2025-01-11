import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentForm from "./pages/AppointmentForm";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Footer/Navbar";
import NavbarSelector from "./components/Footer/NavbarSelector";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Router>
        {/* Navigation */}
        <NavbarSelector />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          

        </Routes>
      </Router>
    </h1>
  )
}
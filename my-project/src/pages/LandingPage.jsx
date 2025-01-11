import React from "react";
import MedicalLandingPage from "../components/LandingPage/MedicalLandingPage";
import WelcomeSection from "../components/LandingPage/WelcomeSection";
import MedicalServices from "../components/LandingPage/MedicalServices";
import Specialties from "../components/LandingPage/Specialities";
import DoctorSlider from "../components/LandingPage/DoctorSlider";
import NewsGrid from "../components/LandingPage/NewsGrid";
import ContactSection from "../components/Footer/ContactSection";

const LandingPage = () => {
  return (
    <div>
      <MedicalLandingPage />
     
      <MedicalServices />
      <Specialties />
      <DoctorSlider />
      
      <ContactSection />
    </div>
  );
};

export default LandingPage;

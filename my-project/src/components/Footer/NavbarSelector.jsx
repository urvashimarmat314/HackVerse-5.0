import React, { useEffect, useState } from "react";
import { api } from "../../axios.config.js";
import Navbar from "./Navbar";
import ProfileNavbar from "./ProfileNavbar";

const NavbarSelector = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await api.get("/api/user/authcheck", { withCredentials: true });
        setIsAuthenticated(response.data.success);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return isAuthenticated ? <ProfileNavbar /> : <Navbar />;
};

export default NavbarSelector;

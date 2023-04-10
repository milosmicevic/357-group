import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className={`nav-links font-semibold ${isOpen ? "open" : ""}`}>
        <a href="#">SERVICES</a>
        <a href="#">NETWORK</a>
        <a href="#contact" className="text-secondary">
          CONTACT
        </a>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
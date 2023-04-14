import React, { useState } from "react";
import "./Navigation.scss";
import Logo from "../../assets/logo.gif";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-20 bg-dark xl:z-0">
      <div className="container navigation-wrapper">
        <div className="logo">
          <a href="/" aria-label="logo">
            <img className="logo-image" src={Logo} alt="logo" />
          </a>
        </div>
        <div className={`nav-links font-semibold ${isOpen ? "open" : ""}`}>
          <a href="/services" aria-label="services" onClick={() => setIsOpen(false)}>
            SERVICES
          </a>
          <a href="#" aria-label="network" onClick={() => setIsOpen(false)}>
            NETWORK
          </a>
          <a href="/#contact" aria-label="contact" className="text-secondary" onClick={() => setIsOpen(false)}>
            CONTACT
          </a>
        </div>
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

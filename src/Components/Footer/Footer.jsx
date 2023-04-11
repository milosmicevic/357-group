import React from "react";
import "./Footer.scss";

import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container flex items-center justify-between">
        <img className="w-[200px] grayscale" src={Logo} alt="logo" />
        <p className="text-[#929292] m-0">357 Group © 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

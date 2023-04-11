import React from "react";
import "./Services.scss";

import RealEstateImage from "../../assets/real-estate.jpg";

import ServiceIcon1 from "../../assets/services-icons/service-1.png";
import ServiceIcon2 from "../../assets/services-icons/service-2.png";
import ServiceIcon3 from "../../assets/services-icons/service-3.png";
import ServiceIcon4 from "../../assets/services-icons/service-4.png";
import ServiceIcon5 from "../../assets/services-icons/service-5.png";
import ServiceIcon6 from "../../assets/services-icons/service-6.png";
import ServiceIcon7 from "../../assets/services-icons/service-7.png";
import ServiceIcon8 from "../../assets/services-icons/service-8.png";
import ServiceIcon9 from "../../assets/services-icons/service-9.png";

const Services = () => {
  const services = [
    { title1: "Investment Firm", title2: "Licensing - Offshore", src: ServiceIcon1 },
    { title1: "Risk Management", title2: "Consulting", src: ServiceIcon2 },
    { title1: "Payments:", title2: "Banking, EMIs, PSPs", src: ServiceIcon3 },
    { title1: "Compliance Support", src: ServiceIcon4 },
    { title1: "Marketing Consultancy", src: ServiceIcon5 },
    { title1: "Organizational Consultancy", src: ServiceIcon6 },
    { title1: "Referral", src: ServiceIcon7 },
    { title1: "Regulation Consultancy", src: ServiceIcon8 },
    { title1: "Technological Consultancy", src: ServiceIcon9 },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="container">
        <div className="flex flex-col gap-8 md:w-5/12 services-content">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between w-full bg-white border-2 rounded-lg border-primary">
              <div className="flex flex-col justify-center w-full px-4 text-3xl">
                <p className="mb-0">{service.title1}</p>
                {service.title2 ? <p className="mb-0">{service.title2}</p> : ""}
              </div>
              <div className="bg-primary py-2.5 px-5 rounded-lg -mr-[2px]">
                <img className="w-20" src={service.src} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="slider">
          <svg width="100%" height="100%" viewBox="0 0 1100 1100">
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsla(224, 100%, 55%, 1)" />
                <stop offset="10%" stopColor="hsla(152, 86%, 77%, 1)" />
                <stop offset="60%" stopColor="hsla(132, 71%, 47%, 1)" />
              </linearGradient>
            </defs>
            <path />
          </svg>

          <div className={`slide-container active`}>
            <h1>SERVICES</h1>
            <img src={RealEstateImage} alt={`Services Image`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState, useEffect } from "react";
import "./Hero.scss";

import FinancialImage from "../../assets/financial.jpg";
import MarketingImage from "../../assets/marketing.jpg";
import RealEstateImage from "../../assets/real-estate.jpg";
import TechnologyImage from "../../assets/technology.jpg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: FinancialImage, title: "Financial" },
    { src: MarketingImage, title: "Marketing" },
    { src: RealEstateImage, title: "Real Estate" },
    { src: TechnologyImage, title: "Technology" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="hero" className="relative">
      <div className="container">
        <div className="md:w-1/2 hero-content">
          <h1 className="font-normal leading-[60px] mb-20">Over 20 years of experience in management consulting</h1>
          <div className="flex flex-col gap-3 text-2xl w-max lg:text-3xl">
            <input type="text" className="py-1 rounded-md placeholder:text-center" placeholder="email@company.com" />
            <button className="py-1 text-white rounded-md bg-secondary">Join Our Network</button>
          </div>
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
          {images.map((image, index) => (
            <div key={index} className={`slide-container ${index === activeIndex ? "active" : ""}`} onClick={() => handleClick(index)}>
              <h1>{image.title}</h1>
              <img src={image.src} alt={`Slide ${index}`} />
            </div>
          ))}
          <div className="pagination">
            {images.map((image, index) => (
              <div key={index} className={index === activeIndex ? "active" : ""} onClick={() => handleClick(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
      <div className="container flex flex-col justify-center h-full">
        <div className="md:w-1/2">
          <h1 className="font-normal leading-[60px] mb-20">Over 20 years of experience in management consulting</h1>
          <div className="flex flex-col w-max gap-3 text-2xl lg:text-3xl">
            <input type="text" className="placeholder:text-center rounded-md py-1" placeholder="email@company.com" />
            <button className="bg-secondary text-white rounded-md py-1">Join Our Network</button>
          </div>
        </div>

        <div className="slider">
          <div className="circle">
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
      </div>
    </section>
  );
};

export default Hero;

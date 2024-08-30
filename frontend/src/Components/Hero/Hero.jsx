import React from "react";
import "./Hero.css";
import hero_image from "../Assets/home_img.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
    
        <div>
          <div className="hero-hand-icon">
            <p>HEALTHY</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>AND</p>
          <p>Fresh GROCERY</p>
        </div>
        <div className="hero-latest-btn">
          <div>LEARN MORE</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

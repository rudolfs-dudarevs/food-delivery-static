import React from "react";
import "./Hero.scss";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="hero-pretitle">Food app</h3>
      <h1 className="hero-title">
        Why stay hungry when you can order from Bella Olonje
      </h1>
      <p className="hero-text">Download the bella olonje's food app now on</p>
      <div className="buttons">
        <Button text="Playstore" isPrimary />
        <Button text="App store" />
      </div>
    </div>
  );
};

export default Hero;

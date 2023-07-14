import React from "react";
import "./DownloadApp.scss";
import Button from "../Button/Button";

const DownloadApp = () => {
  return (
    <div className="download-app">
      <h2 className="hero-title">Download the app now.</h2>
      <p className="hero-text">
        Available on your favorite store. Start your premium experience now
      </p>
      <div className="buttons">
        <Button text="Playstore" isPrimary />
        <Button text="App store" />
      </div>
    </div>
  );
};

export default DownloadApp;

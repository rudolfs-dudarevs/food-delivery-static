import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Linkedin from "../../assets/icon-linkedin.svg";
import Instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <img src={Logo} className="logo desktop-only" />
      </Link>
      <div className="media-icon-wrapper">
        <Link to="/">
          <img src={Twitter} className="media-icon" />
        </Link>
        <Link to="/">
          <img src={Facebook} className="media-icon" />
        </Link>
        <Link to="/" className="mobile-only">
          <img src={Linkedin} className="media-icon" />
        </Link>
        <Link to="/" className="desktop-only">
          <img src={Instagram} className="media-icon" />
        </Link>
      </div>
      <p className="copyright">Copyright 2020 BellaOlonje.com</p>
    </footer>
  );
};

export default Footer;

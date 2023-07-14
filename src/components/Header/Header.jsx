import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} className="logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

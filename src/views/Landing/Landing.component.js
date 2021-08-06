import React from "react";
import "./Landing.css";
import logo from "../../assets/images/Recipes-small-logo.png";
import browseButton from "../../assets/images/browse-button.png";
import searchButton from "../../assets/images/search-button.png";

const LandingPage = () => {
  return (
    <div className="centered column">
      <img src={logo} alt="Recipes Period logo" />
      <img src={browseButton} alt="Browse" className="image-button" />
      <img src={searchButton} alt="Search" className="image-button" />
    </div>
  );
};

export default LandingPage;

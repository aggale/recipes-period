import React from "react";
import { useHistory } from "react-router";

import "./Landing.css";

import logo from "../../assets/images/Recipes-small-logo.png";
import browseButton from "../../assets/images/browse-button.png";
import searchButton from "../../assets/images/search-button.png";

const LandingPage = () => {

  const history = useHistory();

  const onNavigate = (route) => () => {
    history.push(route);
  }

  return (
    <div className="centered column">
      <img src={logo} alt="Recipes Period logo" />
      <img src={browseButton} alt="Browse" className="image-button" onClick={onNavigate('browse')} />
      <img src={searchButton} alt="Search" className="image-button" onClick={onNavigate('search')} />
    </div>
  );
};

export default LandingPage;

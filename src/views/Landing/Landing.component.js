import React from "react";
import { useHistory } from "react-router";

import "./Landing.styles.css";

import landingMessage from "../../assets/images/landing-page-message.png";
import browseButton from "../../assets/images/browse-button.png";
import searchButton from "../../assets/images/search-button.png";

const LandingPage = () => {

  const history = useHistory();

  const onNavigate = (route) => () => {
    history.push(route);
  }

  return (
    <div className="landing-body centered column">
      <img src={landingMessage} className="landing-message" alt="Made-from-scratch, fresh, healthy food for busy people" />
      <div className="landing-navigation">
        <img src={browseButton} alt="Browse" className="image-button" onClick={onNavigate('browse')} />
        <img src={searchButton} alt="Search" className="image-button" onClick={onNavigate('search')} />
      </div>
    </div>
  );
};

export default LandingPage;

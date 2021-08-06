import React from 'react';

import TopNavigation from './TopNavigation.component';

import logo from "../../assets/images/Recipes-small-logo.png";
//import separator from '../../assets/images/separator.png';

import './Header.styles.css';

const Header = () => (
    <div className="header-block">
        <img className="logo" src={logo} alt="Recipes period logo"/>
        {/*<img className="separator" src={separator} alt="happy foods forming a line above the navigation" /> */}
        <TopNavigation />
       
    </div>
);

export default Header;
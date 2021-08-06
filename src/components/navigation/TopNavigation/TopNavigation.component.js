import React from 'react';
import {Link} from 'react-router-dom';

import './TopNavigation.styles.css'

const TopNavigation = () => (
    <div>
        <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
        <Link to='/browse'>Browse</Link>
        <Link to='/search'>Search</Link>
    </div>
);

export default TopNavigation;
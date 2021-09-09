import React from 'react';

import TranslucentBox from '../../components/containers/TranslucentBox/TranslucentBox.component';

import './About.styles.css';

const AboutPage = () => (
    <TranslucentBox className='transparent-container'>
        <h1 className="about-text headline">Recipes. is about recipes. Period.</h1>
        <p className="about-text medium-text">No more of the endless scroll searching for an ingredient list. We bring you recipes and nothing else so that you can get cooking.</p>
        <p className="about-text small-text">Enjoy main dishes, sides, desserts, and more that prioritize healthy, whole ingredients that fuel your body without sacrificing flavor.</p>
    </TranslucentBox>
);

export default AboutPage;
import React from 'react';

import TranslucentBox from '../../components/containers/TranslucentBox.component';

import './About.styles.css';

const AboutPage = () => (
    <TranslucentBox className='transparent-container'>
        <h1 className="headline">Recipes. is about recipes. Period.</h1>
        <p className="medium-text">No more of the endless scroll searching for an ingredient list. We bring you recipes and nothing else so that you can get cooking.</p>
    </TranslucentBox>
);

export default AboutPage;
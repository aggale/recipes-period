import React from 'react';
import { connect } from 'react-redux';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'

const BrowsePage = ({recipes}) => {
    const recipeItems = Object.values(recipes);

    return (
        <div className="browse-cards">
            {recipeItems.map(recipe => <SummaryCard title={recipe.title} description={recipe.description} />)}
            
        </div>
    );
}

const mapStateToProps = ({recipes}) => ({
    recipes
});

export default connect(mapStateToProps)(BrowsePage);
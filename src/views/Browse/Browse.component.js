import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes } from '../../redux/recipes/recipes.slice';
import { selectRecipesForSummary } from '../../redux/recipes/recipes.selectors';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'

const BrowsePage = () => {
    const dispatch = useDispatch();
    let recipes = useSelector(selectRecipesForSummary);

    // Get firestore data
    

    useEffect( ()  => {
        console.log('use effect')
        dispatch(fetchRecipes());
    }, []);

    return (
        <div className="browse-cards">
            {recipes.map(recipe => <SummaryCard key={recipe.title} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
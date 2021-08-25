import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes, fetchImageUrl } from '../../redux/recipes/recipes.slice';
import { selectImageUrls, selectRecipesForSummary } from '../../redux/recipes/recipes.selectors';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'

const BrowsePage = () => {
    const dispatch = useDispatch();
    let recipes = useSelector(selectRecipesForSummary);
    let imageUrls = useSelector(selectImageUrls);

    useEffect( ()  => {
        dispatch(fetchRecipes());
    }, []);

    useEffect( () => {
        console.log("rop")
        for (let recipe of Object.values(recipes)) {
            // Only look this up if we dont' know it
            if (!imageUrls[recipe.title]) {
                console.log('got here also')
                dispatch(fetchImageUrl(recipe));
            }
            console.log('got here', imageUrls[recipe.title])
        }
    });

    return (
        <div className="browse-cards">
            {recipes.map(recipe => <SummaryCard key={recipe.title} imageUrl={imageUrls[recipe.title]} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
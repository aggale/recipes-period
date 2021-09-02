import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes, fetchImageUrl } from '../../redux/recipes/recipes.slice';
import { selectImageUrls, selectLoadingStatus, selectRecipesForSummary } from '../../redux/recipes/recipes.selectors';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';
import Loading from '../../components/containers/Loading/Loading.component';

import './Browse.styles.css'

const BrowsePage = () => {
    const dispatch = useDispatch();
    let recipes = useSelector(selectRecipesForSummary);
    let imageUrls = useSelector(selectImageUrls);
    let loading = useSelector(selectLoadingStatus);

    /**
     * Fetch the recipe data
     */
    useEffect( ()  => {
        dispatch(fetchRecipes());
    }, []);

    /**
     * Fetch the Firebase storage urls 
     */
    useEffect( () => {
        for (let recipe of Object.values(recipes)) {
            dispatch(fetchImageUrl(recipe));
        }
    });

    return (
        <div className="browse-cards">
            {loading ? <Loading /> : recipes.map(recipe => <SummaryCard key={recipe.id} imageUrl={imageUrls[recipe.id]} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
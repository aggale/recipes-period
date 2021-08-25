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
            {loading ? <Loading /> : recipes.map(recipe => <SummaryCard key={recipe.title} imageUrl={imageUrls[recipe.title]} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
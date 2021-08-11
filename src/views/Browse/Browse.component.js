import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { convertRecipesSnapshotToMap, firestore } from '../../firebase/firebase-utils';

import { updateRecipesAction } from '../../redux/recipes/recipes.actions';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'


const BrowsePage = () => {
    const dispatch = useDispatch();
    const recipesObj = useSelector(state => state.recipes.recipes);
    const recipeItems = recipesObj ? Object.values(recipesObj) : [];

    // Get firestore data
    useEffect(() => {
        const recipesRef = firestore.collection('recipes');

        const unsubscribeFromRecipes = recipesRef.onSnapshot(async (snapshot) => {
            const recipesMap = convertRecipesSnapshotToMap(snapshot);

            dispatch(updateRecipesAction(recipesMap));
        });

        return () => {
            unsubscribeFromRecipes();
        };
    }, []);

    return (
        <div className="browse-cards">
            {recipeItems.map(recipe => <SummaryCard key={recipe.title} title={recipe.title} description={recipe.description} />)}
            
        </div>
    );
}

export default BrowsePage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { convertRecipesSnapshotToMap, firestore } from '../../firebase/firebase-utils';

import { recipesUpdate } from '../../redux/recipes/recipes.slice';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'


const BrowsePage = () => {
    const dispatch = useDispatch();
    const recipesObj = useSelector(state => state.recipes.recipes);
    const recipeItems = recipesObj ? Object.values(recipesObj) : [];
    // Create recipes with a list of ingredients without measurements
    const recipeItemsWithIngredientList = recipeItems.map(recipe => ({
        ...recipe, 
        ingredients: Object.keys(recipe.ingredients).reduce((list, ingredient) => list + ', ' + ingredient)
    }));

    // Get firestore data
    useEffect(() => {
        const recipesRef = firestore.collection('recipes');

        const unsubscribeFromRecipes = recipesRef.onSnapshot(async (snapshot) => {
            const recipesMap = convertRecipesSnapshotToMap(snapshot);

            dispatch(recipesUpdate(recipesMap));
        });

        return () => {
            unsubscribeFromRecipes();
        };
    }, []);

    return (
        <div className="browse-cards">
            {recipeItemsWithIngredientList.map(recipe => <SummaryCard key={recipe.title} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { convertRecipesSnapshotToMap, firestore } from '../../firebase/firebase-utils';

import { recipesUpdate } from '../../redux/recipes/recipes.slice';
import { selectRecipesForSummary } from '../../redux/recipes/recipes.selectors';

import SummaryCard from '../../components/containers/SummaryCard/SummaryCard.component';

import './Browse.styles.css'

const BrowsePage = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipesForSummary);

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
            {recipes.map(recipe => <SummaryCard key={recipe.title} {...recipe} />)}       
        </div>
    );
}

export default BrowsePage;
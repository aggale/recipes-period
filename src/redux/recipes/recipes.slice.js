import { createSlice } from '@reduxjs/toolkit';

import { firestore, convertRecipesSnapshotToMap, convertRecipeSnapshotToObject, getImageUrl } from '../../firebase/firebase-utils.js';

const initialState = { recipes: {}, imageUrls: {} };

/**
 * Gets recipe data out of Firestore.
 */
export const fetchRecipes = () => async (dispatch) => {
    try {
        dispatch(recipesLoading());
        
        const snapshot = await firestore.collection('recipes').get();

        const recipeData = convertRecipesSnapshotToMap(snapshot);

        dispatch(recipesReceived(recipeData));
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch recipe data out of Firestore for a particular recipe. Only fetch
 * if we don't already have the data since recipe data will rarely change/
 * need refresh.
 */
 export const fetchRecipe = (id) => async (dispatch, getState) => {
    // Skip fetch if we already have data
    const state = getState();

    if (state.recipes.recipes[id]) {
        return;
    }

    try {
        dispatch(recipesLoading());
        
        const snapshot = await firestore.collection("recipes").doc(id).get();
        const recipeData = convertRecipeSnapshotToObject(snapshot);

        dispatch(recipeReceived(recipeData));
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetches the url for the image being stored in Google Firebase Storage.
 * We'll do this for each image as we need it and store the result in a map
 * in redux so that we can memoize and save trips.
 * @param {*} recipe recipe object to get image for
 * @returns An object with the identifier of the recipe and the imageUrl 
 * or null if image not found
 */
export const fetchImageUrl = (recipe) => async (dispatch, getState) => {
    try {
        // Check if we already know this url since these are static and we won't need to refetch
        const state = getState();
        let imageUrl = state.recipes.imageUrls[recipe.image];
        
        if (!imageUrl) {
            imageUrl = await getImageUrl(recipe.image);   
        }  

        dispatch(imageUrlReceived({ id: recipe.id, imageUrl}));
    } catch (error) {
        console.error(error);
    }
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        recipesLoading(state, action) {
            state.loading = true;
        },
        recipesReceived(state, action) {
            state.loading = false;
            state.recipes = action.payload;
        },
        recipeReceived(state, action) {
            state.loading = false;
            state.recipes[action.payload.id] = action.payload;
        },
        imageUrlReceived(state, action) {
            state.imageUrls[action.payload.id] = action.payload.imageUrl;
        }
    },
});

export const { recipesLoading, recipesReceived, recipeReceived, imageUrlReceived } = recipesSlice.actions;

export default recipesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

import { firestore, convertRecipesSnapshotToMap } from '../../firebase/firebase-utils.js';

const initialState = {};

export const fetchRecipes = () => async (dispatch) => {
    try {
        dispatch(recipesLoading());
        
        const snapshot = await firestore.collection('recipes').get();
        const recipeData = convertRecipesSnapshotToMap(snapshot);

        dispatch(recipesReceived(recipeData));
    } catch (error) {
        console.log(error);
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
        }
    },
});

export const { recipesLoading, recipesReceived } = recipesSlice.actions;

export default recipesSlice.reducer;
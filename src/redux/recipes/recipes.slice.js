import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { firestore, convertRecipesSnapshotToMap } from '../../firebase/firebase-utils.js';

const initialState = {};

// export const fetchRecipes = createAsyncThunk(
//     '/recipes/fetchRecipes',
//     async () => {
//         const recipesRef = firestore.collection('recipes');

//         recipesRef.get().then((snapshot) => {
//             console.log("snapshot", snapshot)
//             return convertRecipesSnapshotToMap(snapshot).then(async (result) => result);
//         });      
//     }
// );

export const fetchRecipes = () => (dispatch) => {
    try {
        dispatch(recipesLoading());
        
        firestore.collection('recipes').get().then(
            (snapshot) => {
                const fetchedRecipes = convertRecipesSnapshotToMap(snapshot);
                dispatch(recipesReceived(fetchedRecipes));
            }
        );
        
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
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchRecipes.pending, (state, action) => {
    //             state.loading = true;
    //         })
    //         .addCase(fetchRecipes.fulfilled, (state, action) => {
    //             console.log('addCase', action.payload)
    //             state.loading = false;
    //             state.recipes = action.payload;
    //         })
    //         .addCase(fetchRecipes.rejected, (state, action) => {
    //             state.loading = false;
    //         });
    // }
});

export const { recipesLoading, recipesReceived } = recipesSlice.actions;

export default recipesSlice.reducer;
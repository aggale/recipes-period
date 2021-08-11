import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        recipesUpdate(state, action) {
            return { ...state, recipes: action.payload };
        }
    }
});

export const { recipesUpdate } = recipesSlice.actions;

export default recipesSlice.reducer;
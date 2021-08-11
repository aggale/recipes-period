import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import recipesReducer from "./recipes/recipes.slice";

const store = configureStore({
    reducer: {
        recipes: recipesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
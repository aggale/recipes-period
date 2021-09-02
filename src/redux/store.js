import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import recipesReducer from "./recipes/recipes.slice";

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = configureStore({
    reducer: {
        recipes: recipesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
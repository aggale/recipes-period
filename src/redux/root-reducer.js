import { combineReducers } from "redux";

import recipesReducer from "./recipes/recipes.reducers";

const rootReducer = combineReducers({
    recipes: recipesReducer
})

export default rootReducer;
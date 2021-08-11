import { RecipesActionTypes } from './recipes.types';

const INITIAL_STATE = {};

const recipesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RecipesActionTypes.UPDATE_RECIPES:
            return { ...state, recipes: action.payload }
        default:
            return state;
    }
}

export default recipesReducer;
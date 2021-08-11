import { RecipesActionTypes } from './recipes.types';

export const updateRecipesAction = (recipes) => ({
    type: RecipesActionTypes.UPDATE_RECIPES,
    payload: recipes
});
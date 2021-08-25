import { createSelector } from '@reduxjs/toolkit';

export const selectRecipeObj = (state) => state.recipes.recipes;

export const selectImageUrls = (state) => state.recipes.imageUrls;

export const selectLoadingStatus = (state) => state.recipes.loading;

export const selectRecipes = createSelector(
    [selectRecipeObj], 
    (recipesObj) => recipesObj ? Object.values(recipesObj) : []
);

/**
 * Gets list of recipe objects with adjustments made for displaying as a summary.
 * (Ingredients are displayed as a comma-separated list of ingredients without 
 * measurements)
 */
export const selectRecipesForSummary = createSelector(
    [selectRecipes],
    (recipes) => recipes.map(recipe => ({
        ...recipe, 
        ingredients: Object.keys(recipe.ingredients).reduce((list, ingredient) => list + ', ' + ingredient)
    }))
);
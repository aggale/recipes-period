import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import FullRecipeCard from '../../components/containers/FullRecipeCard/FullRecipeCard.component';
import { fetchImageUrl, fetchRecipe } from '../../redux/recipes/recipes.slice';

import './FullRecipe.styles.css';

const FullRecipe = () => {
    let { id } = useParams();

    const dispatch = useDispatch();

    const recipe = useSelector(state => state.recipes.recipes[id]);
    const imageUrl = useSelector(state => state.recipes.imageUrls[id]);

    useEffect( () => {
        dispatch(fetchRecipe(id));
    })

    useEffect( () => {     
        if (recipe) {  
            dispatch(fetchImageUrl(recipe));
        }
    })

    return recipe ? (
            <div className='full-recipe'>
                <FullRecipeCard {...recipe} imageUrl={imageUrl} />
            </div>
        ) : (
            <div>Recipe does not exist :(</div>
        );
}

export default FullRecipe;
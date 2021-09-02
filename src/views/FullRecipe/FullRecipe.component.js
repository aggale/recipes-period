import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import FullRecipeCard from '../../components/containers/FullRecipeCard/FullRecipeCard.component';

import './FullRecipe.styles.css';

const FullRecipe = () => {
    let { id } = useParams();
    
    const recipes = useSelector(state => state);
    console.log(recipes);
    const {title, ...otherData} = useSelector(state => state.recipes.recipes[id]);
    const {imageUrl} = useSelector(state => state.recipes.imageUrls[id]);

    return (
        <div className='full-recipe-card'>
            <h1>{title}</h1>
            {imageUrl && (<img className="summary-card-image" src={imageUrl} alt={`${title}`} />)}
            <FullRecipeCard {...otherData} />
        </div>    
    );
}

export default FullRecipe;
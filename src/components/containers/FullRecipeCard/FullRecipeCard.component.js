import React from 'react';

import Card from '../Card/Card.component';

import './FullRecipeCard.styles.css';

const FullRecipeCard = ({title, description, difficulty, time, ingredients, imageUrl}) => {
    return (
        <div className='full-recipe-card'>
            <Card>
                <h1>{title}</h1>
                {imageUrl && (<img className="summary-card-image" src={imageUrl} alt={`${title}`} />)}
                <p className="summary-card-description">{description}</p>
                <div className="summary-card-extra-info">
                    <p><span className="bold">Difficulty: </span>{difficulty}</p>
                    <p><span className="bold">Time: </span>{time}</p>
                    <p><span className="bold">Ingredients: </span>{Object.keys(ingredients)}</p>
                </div>                
            </Card>
        </div>
        
    );
}

export default FullRecipeCard;
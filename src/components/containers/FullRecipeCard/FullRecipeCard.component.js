import React from 'react';

import Card from '../Card/Card.component';

import './FullRecipeCard.styles.css';

const FullRecipeCard = ({title, description, difficulty, time, ingredients, steps, imageUrl}) => {
    const ingredientListNoMeasurements = Object.keys(ingredients).reduce((list, item) => list + ", " + item);
    const ingredientList = Object.keys(ingredients).map(ingredient => ingredients[ingredient] + ' ' + ingredient);

    return (
        <div className='full-recipe-card'>
            <Card>
                <div className="full-recipe-card-header">
                    {imageUrl && (<img className="card-image full-recipe-card-image" src={imageUrl} alt={`${title}`} />)}
                    <h1 className="full-recipe-card-title">{title}</h1>
                </div>
                <p className="full-recipe-card-description">{description}</p>
                <div className="full-recipe-card-extra-info">
                    <p><span className="bold">Difficulty: </span>{difficulty}</p>
                    <p><span className="bold">Time: </span>{time}</p>
                    <p><span className="bold">You'll need: </span>
                        {ingredientListNoMeasurements}
                    </p>
                </div>
                <div className="full-recipe-card-ingredients">
                    <h2 className="full-recipe-card-heading">Ingredients:</h2>
                    <ul>
                        {ingredientList.map((ingredient) => (<li className="full-recipe-card-ingredient">{ingredient}</li>))}
                    </ul>                  
                </div>  
                <div className="full-recipe-card-steps">
                <h2 className="full-recipe-card-heading">Instructions:</h2>
                    <ol>
                        {steps.map((ingredient) => (<li className="full-recipe-card-step">{ingredient}</li>))}
                    </ol>
                </div>              
            </Card>
        </div>
        
    );
}

export default FullRecipeCard;
import React from 'react';

import Card from '../Card/Card.component';

import './SummaryCard.styles.css';

const SummaryCard = ({title, description, difficulty, time, ingredients, imageUrl}) => {
    console.log('i', imageUrl);
    return (
        <div className='summary-card'>
            <Card>
                {imageUrl && (<img className="summary-card-image" src={imageUrl} alt={`${title}`} />)}
                <h1>{title}</h1>
                <p className="summary-card-description">{description}</p>
                <div className="summary-card-extra-info">
                    <p><span className="bold">Difficulty: </span>{difficulty}</p>
                    <p><span className="bold">Time: </span>{time}</p>
                    <p><span className="bold">Ingredients: </span>{ingredients}</p>
                </div>                
            </Card>
        </div>
        
    );
}

export default SummaryCard;
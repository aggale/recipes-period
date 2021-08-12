import React from 'react';

import Card from '../Card/Card.component';

import './SummaryCard.styles.css';

const SummaryCard = ({title, description, difficulty, time, ingredients}) => {
    return (
        <div className='summary-card'>
            <Card>
                <h1>{title}</h1>
                <p className="description">{description}</p>
                <div className="extra-info">
                    <p><span className="bold">Difficulty: </span>{difficulty}</p>
                    <p><span className="bold">Time: </span>{time}</p>
                    <p><span className="bold">Ingredients: </span>{ingredients}</p>
                </div>
                
            </Card>
        </div>
        
    );
}

export default SummaryCard;
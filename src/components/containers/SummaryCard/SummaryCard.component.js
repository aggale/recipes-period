import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card/Card.component';

import './SummaryCard.styles.css';

const SummaryCard = ({id, title, description, difficulty, time, ingredients, imageUrl}) => {
    return (
        <div className='summary-card'>
            <Card>
                {imageUrl && (
                    <Link to={`/recipes/${id}`}>
                        <img className="card-image summary-card-image" src={imageUrl} alt={`${title}`} />
                    </Link>
                )}
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
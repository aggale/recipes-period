import React from 'react';

import Card from '../Card/Card.component';

import './SummaryCard.styles.css';

const SummaryCard = ({title, description}) => {
    return (
        <div className='summary-card'>
            <Card>
                <h1>{title}</h1>
                <p>{description}</p>
            </Card>
        </div>
        
    );
}

export default SummaryCard;
import React from 'react';

import Card from '../Card/Card.component';

import './SummaryCard.styles.css';

const SummaryCard = ({title, summary}) => {
    return (
        <div className='summary-card'>
            <Card>
                <h1>{title}</h1>
                <p>{summary}</p>
            </Card>
        </div>
        
    );
}

export default SummaryCard;
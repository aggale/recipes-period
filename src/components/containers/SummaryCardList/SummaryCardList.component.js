import React from 'react';

import SummaryCard from '../SummaryCard/SummaryCard.component';
import Loading from '../Loading/Loading.component';

import './SummaryCardList.styles.css'

const SummaryCardList = ({loading, recipes, imageUrls}) => (
    <div className="summary-card-list">
        {loading ? <Loading /> : recipes.map(recipe => <SummaryCard key={recipe.id} imageUrl={imageUrls[recipe.id]} {...recipe} />)}
    </div>
);

export default SummaryCardList;
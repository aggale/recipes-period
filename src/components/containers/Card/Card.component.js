import React from 'react';

import './Card.styles.css'

const Card = ({children}) => {
    return <div className='card'>{children}</div>
}

export default Card;
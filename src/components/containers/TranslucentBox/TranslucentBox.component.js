import React from 'react';

import './TranslucentBox.styles.css'

const TranslucentBox = (props) => (
    <div className='translucent-container'>{props.children}</div>
)

export default TranslucentBox;
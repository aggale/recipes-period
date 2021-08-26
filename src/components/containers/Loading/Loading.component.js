import React from 'react';

import loadingImage from '../../../assets/images/loading.png'
import './Loading.styles.css'

const Loading = (props) => (
    <div className="loading-container">
        <img src={loadingImage} alt="Loading" className='loading-image' />
    </div>
)

export default Loading;
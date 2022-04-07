import React from 'react';
import './SingleReview.css';

const SingleReview = ({re}) => {
    const {name,review,rating,image} = re;
    
    return (
        <div className='review-container'>
            <img src={image} alt="" />
            <h1>Name:{name}</h1>
            <h2>Review:{review}</h2>
            <p>Rating:{rating}</p>
        </div>
    );
};

export default SingleReview;
import React from 'react';
import './Meals.css';

const Meals = ({me}) => {
    const {image,name,review,rating} = me
    return (
        <div className='meal-container'>

            
           <div className='cart-container'>
           <img src={image} alt="" />
            <h1>{name}</h1>
            <h3>Review: {review}</h3>
            <p className='rating'>Rating: {rating}</p>
            <button className='button'>Order Now</button>
           </div>

        </div>
    );
};

export default Meals;
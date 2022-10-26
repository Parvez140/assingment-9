import React from 'react';
import './Review.css';

const Review = (props) => {
    // console.log()
    const {name, img, review, ratting} = props.review;
    return (
        <div className='carts'>
            <div className='cart'>
                <div className='cart-img'>
                <img src={img} alt="" />
                </div>
                <div className='cart-details'>
                    <h4>{name}</h4>
                    <p>{review}</p>
                    <h5>Ratting: {ratting}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;
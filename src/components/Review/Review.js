import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css';

const Review = (props) => {
    // console.log()
    const {name, img, review} = props.review;
    return (
        <div className='carts'>
            <div className='cart'>
                <div className='cart-img'>
                <img src={img} alt="" />
                </div>
                <div className='cart-details'>
                    <h4>{name}</h4>
                    <p>{review}</p>
                    <h5>Ratting: <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                    <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                    <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                    <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                    <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Review;
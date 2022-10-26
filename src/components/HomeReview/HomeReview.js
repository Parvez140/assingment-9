import React from 'react';
import './HomeReview.css';
import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';


const HomeReview = () => {
    const [reviews, setReviews] = useReviews([]);
    const reviewSlice = reviews.slice(0, 3);
    console.log(reviewSlice);
    return (
        <div style={{padding:"30px"}}>
            <div className='home-carts'>
                {
                    reviewSlice.map(
                        review => <div>
                                    <div className='cart'>
                                    <div className='cart-img'>
                                    <img src={review.img} alt="" />
                                    </div>
                                    <div className='cart-details'>
                                        <h4>{review.name}</h4>
                                        <p>{review.review}</p>
                                        <h5>Ratting: {review.ratting}</h5>
                                    </div>
                                    </div>
                                </div>
                    )
                }
            </div>
            <div className='btn-div'>
                <button  className='home-reviews-btn'><Link state={{"textDecoration": "none"}} to="reviews">See All Reviews</Link></button>
            </div>
        </div>
    );
};

export default HomeReview;
import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <div>
            <h2 style={{"color":"yellowgreen",'textAlign':'center',"fontSize":"32px","margin":'50px'}}>Our Clients Reviews</h2>
            <div className='carts'>
            {
                reviews.map(review => <Review 
                    key={review.id}
                    review={review} />)
            }
            </div>
        </div>
    );
};

export default Reviews;<h2>Reviews</h2>
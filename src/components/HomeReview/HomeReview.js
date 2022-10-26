import React from 'react';
import './HomeReview.css';
import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



const HomeReview = () => {
    const [reviews, setReviews] = useReviews([]);
    const reviewSlice = reviews.slice(0, 3);
    console.log(reviewSlice);

    return (
        <div style={{padding:"50px"}}>
            <h2 style={{"color":"yellowgreen",'textAlign':'center',"fontSize":"32px","marginBottom":'50px'}}>What Our Clients Say</h2>
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
                                        <h5>Ratting: <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                                            <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                                            <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                                            <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                                            <FontAwesomeIcon style={{"color":"goldenrod"}} icon={faStar}/>
                                        </h5>
                                    </div>
                                    </div>
                                </div>
                    )
                }
            </div>
            <div className='btn-div'>
                <button to='/reviews' className='home-reviews-btn'><Link to="/reviews">See All Reviews</Link></button>
            </div>
        </div>
    );
};

export default HomeReview;
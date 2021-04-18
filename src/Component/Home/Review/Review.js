import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Review.css';

const Review = () => {
    return (
        <div className="review-container" style={{ paddingTop: '3%' }}>
            <h1 className="text-center font-family text-white mb-5 fw-bolder">WHAT <span style={{ color: '#ff6600' }}>THE PARENTS SAY</span></h1>
            <p className=" border-bottom"></p>
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Review;
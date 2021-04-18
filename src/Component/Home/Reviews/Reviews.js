import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css';



const Reviews = () => {
    const [feedback, setFeedback] = useState([])
    useEffect( () => {
        fetch('https://protected-waters-29079.herokuapp.com/feedback')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Slider {...settings} style={{height:'200px'}} className="container mt-5 mb-5 pb-5">
        {
            feedback.map(review =>
                <div className="text-center mt-4 mb-5 pb-5">
                    <p className=" text-brand text-light">{review.description}</p>
                    <h1 className=" text-brand text-light">{review.name}</h1>
                </div>
            )
        }
    </Slider>
    );
};

export default Reviews;
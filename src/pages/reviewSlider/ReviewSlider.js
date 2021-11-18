import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './reviewSlider.css';
import axios from 'axios';

const ReviewSlider = () => {

    const [reviewData, setReviewData] = useState([]);
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const [star, setStar] = useState(0);

    useEffect(() => {
        axios.get('https://glacial-ridge-32887.herokuapp.com/all-reviews')
        .then((response) => {          
          setReviewData(response.data.slice(response.data.length - 3 ))
        }) 
        .catch((error) => {
          console.log(error.message);
        })
    },[]);

 

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviewData.length - 1 ? 0 : prevIndex + 1                    
        ),   
        
      3000,
    );  
      setStar(reviewData[index]?.star);     
    return () => {
      resetTimeout();
    };
  }, [index,reviewData]);

    
    return (
      <div className="review-slider">
      <div className="review-slider-title">
          <h2>Our Customar Review</h2>
      </div>
        <div className="slideshow">
            <div className="card">
                <div className="card-thumb">
                    <img src={reviewData[index]?.userImage} className="client-img" alt=""/>
                    <span className="client-name">{reviewData[index]?.userName}</span>  
                </div>
                <div className="card-body">
                    <p className="review">{reviewData[index]?.reviewText}</p>
                    <div className="rating">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" value={star} readOnly /> 
                        </Stack> 
                    </div>
                </div>
            </div>              
        </div>
    </div>
  )
};


export default ReviewSlider;
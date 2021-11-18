import React, { useState } from 'react';
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import './userReview.css';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import UseFirebaseAuth from '../../customhook/UseFirebaseAuth';

const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+"
  };

const UserReview = () => {
    const navigate = useNavigate();    
    const {user} = UseFirebaseAuth();
    const {reviewProductId} = useParams();
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [reviewData, setReviewData] = useState({});
    
    const handleINput = e => {
        const field =  e.target.name;
        const value = e.target.value;
        const newReviewData = {...reviewData};
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }

    const handleReviewForm = e => {
        e.preventDefault();       

        function getFormateTime() {
            const now = new Date().toLocaleString();
        
            const date = now.split(',')[0].split('/');     
            
            return {
                date: `${date[1]}/${date[0]}/${date[2]}`,               
            };
        }

        const {date} = getFormateTime();
       
        const updateReviewData = {
            ...reviewData,
            star: value,
            userName: user?.displayName,
            userEmail: user?.email,           
            reviewData: date,
            reviewId: reviewProductId,
        }
        
        
        axios.post('https://glacial-ridge-32887.herokuapp.com/add-new-review',updateReviewData)
        .then((response) => {
            if(response.data.insertedId) {
                alert('Successfully added Review');
                e.target.reset();
                navigate('/all-products',{
                    replace: true,
                })
            }
        })
        .catch((error) => {
            console.lgo(error.message);
        })
    }


    return (
        <div className="user-review-section">
            <div className="container">                  
                <div className="user-review-container">
                    <div className="user-review-section-title">
                        <h2>User Review</h2>
                    </div> 
                    <form onSubmit={handleReviewForm}>
                        <div className="user-review-area">
                            <div className="user-review-from-design">
                                <label htmlFor="user-name">Your Name</label>
                                <input type="text"  placeholder="Enter Your Name" id="user-name" value={user?.displayName} disabled required/>
                            </div>                           
                            <div className="user-review-from-design">
                                <label htmlFor="image-url">Your Image Url</label>
                                <input type="url"  placeholder="Enter Your Image Url" id="image-url" name="userImage" onInput={handleINput}  required/>
                            </div>
                            <div className="user-review-from-design">
                                <label htmlFor="your-rating">Your Rating</label>                              
                                <Box
                                    sx={{
                                        width: 200,
                                        display: "flex",
                                        alignItems: "center",                                        
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={1}                                      
                                        onChange={(event, newValue) => {
                                        setValue(newValue);                                                                              
                                        }}
                                        onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                </Box>
                            </div>                            
                            <div className="user-review-from-design">
                                <label htmlFor="review-details">Product Details</label>
                                <textarea id="review-details" cols="40" rows="7" placeholder="Enter Your Product review" name="reviewText" onInput={handleINput}  required></textarea>
                            </div>
                            <div className="user-review-submit-btn">
                                <input type="submit" value="Submit Review" id="user-review-button"/>
                            </div>                           
                        </div>                        
                    </form>
                </div>                
            </div>
        </div>
    );
};

export default UserReview;
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './singleProduct.css';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {productName,productImage,mainPrice,offerPrice,totalStar,totlaComment} = product;
    const [orderProduct, setOrderProduct] = useState({});       
    const navigate = useNavigate();
    
    function handleBuyNow (data) {        
         setOrderProduct(data);         
         navigate("/shipping",{
             replace: true,
         })
    }
    return (
        <div className="single-product">
            <div className="single-product-container">
                <div className="single-product-image">
                    <img src={productImage} alt="" />
                </div>
                <div className="single-product-name">
                    <p>{productName}</p>
                </div>
                <div className="single-product-price-section">
                    <div className="single-product-offer-price">
                        <small className="offer-price">${offerPrice}</small>
                    </div>
                    <div className="single-product-main-price">
                        <strike className="main-price">${mainPrice}</strike>
                        <small className="offer">-{Math.round(((mainPrice - offerPrice) / mainPrice) * 100)}%</small>
                    </div>
                </div>
                <div className="single-product-footer-section">
                    <div className="single-product-rating-section">
                        <div className="single-product-rating-section-container">
                            <div className="single-product-rating">
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={parseInt(totalStar) / parseInt(totlaComment)}readOnly />
                                </Stack>                                
                            </div>
                            <div className="single-product-comment">
                                <small>{`(${totlaComment})`}</small>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-buy-button">
                        <button onClick={() => handleBuyNow(product)}>Buy Now</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
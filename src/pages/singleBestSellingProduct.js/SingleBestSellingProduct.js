import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './singleBestSellingProduct.css';
import { useNavigate } from 'react-router';

const SingleBestSellingProduct = ({data}) => {
    const {_id,productName,productImage,offerPrice,mainPrice,totalStar,totlaComment} = data;
    const navigate = useNavigate();
  

    const handleBuyNowButton = id => {
        navigate(`/shipping/${id}`, {
            replace: true,
        })
    }

    return (
        <div className="single-best-selling-product">
            <div className="single-best-selling-product-container">
                <div className="single-best-selling-product-image">
                    <img src={productImage} alt="" />
                </div>
                <div className="single-best-selling-product-name">
                    <p>{productName}</p>
                </div>
                <div className="single-best-selling-product-price-section">
                    <div className="single-best-selling-product-offer-price">
                        <small className="offer-price">${offerPrice}</small>
                    </div>
                    <div className="single-best-selling-product-main-price">
                        <strike className="main-price">${mainPrice}</strike>
                        <small className="offer">-{Math.round(((mainPrice - offerPrice) / mainPrice) * 100)}%</small>
                    </div>
                </div>
                <div className="single-best-selling-product-footer-section">
                    <div className="single-best-selling-product-rating-section">
                        <div className="single-best-selling-product-rating-section-container">
                            <div className="single-best-selling-product-rating">
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={parseInt(totalStar) / parseInt(totlaComment)}readOnly />
                                </Stack>                                
                            </div>
                            <div className="single-best-selling-product-comment">
                                <small>{`(${totlaComment})`}</small>
                            </div>
                        </div>
                    </div>
                    <div className="single-best-selling-product-buy-button">
                        <button onClick={() => handleBuyNowButton(_id)}>Buy Now</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default SingleBestSellingProduct;
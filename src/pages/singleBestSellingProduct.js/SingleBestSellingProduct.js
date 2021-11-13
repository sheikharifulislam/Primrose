import React from 'react';
import './singleBestSellingProduct.css';

const SingleBestSellingProduct = ({data,bgColor}) => {
    const {productName,productImage} = data;
    const textBg = {
        backgroundColor: `rgb(${bgColor.red},${bgColor.green},${bgColor.blue})`,
    } 

    return (
        <div className="single-best-selling-product">
            <div className="single-best-selling-product-container">
                <div className="single-best-selling-product-image">
                    <img src={productImage} alt="" />
                </div>
            </div>
            <div className="single-best-selling-product-name" style={textBg}>
                <p>{productName}</p>
            </div>
        </div>
    );
};

export default SingleBestSellingProduct;
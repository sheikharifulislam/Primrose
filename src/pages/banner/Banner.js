import React from 'react';
import './banner.css';
import bannerImage from  '../../images/banner.jpg'
const Banner = () => {
    return (
        <div className="web-banner">
            <picture className="banner-image">
                <img src={bannerImage} alt="Web Site Banner" />
            </picture>
            <div className="banner-into-text">
                <h2>Anti-Dandruff Shampoos from PrimRose</h2>
            </div>
        </div>
    );
};

export default Banner;
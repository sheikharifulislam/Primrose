import React from 'react';
import './banner.css';
import bannerImage from  '../../images/banner.webp'
const Banner = () => {
    return (
        <div className="web-banner">
            <picture className="banner-image">
                <img src={bannerImage} alt="Web Site Banner" />
            </picture>                 
        </div>
    );
};

export default Banner;
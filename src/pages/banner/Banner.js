import React from 'react';
import {useNavigate} from 'react-router-dom';
import './banner.css';
import bannerImage from  '../../images/banner.webp'
const Banner = () => {

    const navigate = useNavigate()

    const handleMoreProductBtn = () => {
        navigate('/all-products',{
            replace: true,
        })
    }

    return (
        <div className="web-banner">
            <picture className="banner-image">
                <img src={bannerImage} alt="Web Site Banner" />
            </picture>
            <div className="banner-into-container">
                <div className="banner-into-text">
                    <h2>LIVE LIMITLESS</h2>
                    <p>With the new Sunsilk Collection, your hair will be exactly how you desire</p>
                    <button id="more-product-button" onClick={handleMoreProductBtn}>Our Products</button>
                </div>
            </div>            
        </div>
    );
};

export default Banner;
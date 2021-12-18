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
        </div>
    );
};

export default Banner;
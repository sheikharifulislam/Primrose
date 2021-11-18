import React from 'react';
import NavBar from '../navBar/NavBar'
import BestSellingProducts from '../bestSellingProducts/BestSellingProducts';
import Banner from '../banner/Banner';
import ReviewSlider from '../reviewSlider/ReviewSlider';
import Footer from '../footer/Footer';
const Home = () => {
    return (
       <>
        <NavBar />
        <Banner/>
        <BestSellingProducts/>
        <ReviewSlider/>       
        <Footer/>
       </>
    );
};

export default Home;
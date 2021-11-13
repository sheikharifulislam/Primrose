import React from 'react';
import NavBar from '../navBar/NavBar'
import BestSellingProducts from '../bestSellingProducts/BestSellingProducts';
import Banner from '../banner/Banner';
const Home = () => {
    return (
       <>
        <NavBar />
        <Banner/>
        <BestSellingProducts/>       
       </>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import SingleProduct from '../singleProduct/SingleProduct';
import './allProducts.css';
import axios from 'axios';

const AllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        axios.get('https://glacial-ridge-32887.herokuapp.com/all-products')
        .then((response) => {
            setAllProduct(response.data);
        })
        .catch((error) => {
            console.log(error.message)
        })
    },[])


    return (
        <>
            <NavBar/>
            <section className="all-products-section">
                <div className="container-xl">
                    <div className="all-products-section-title">
                        <h2>Just For You</h2>
                    </div>
                    <div className="all-products-container">
                        {
                            allProduct.map((product) => <SingleProduct key={product._id} product={product}/>)
                        }
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AllProducts;
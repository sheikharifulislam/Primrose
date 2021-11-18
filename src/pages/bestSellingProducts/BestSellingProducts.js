import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleBestSellingProduct from '../singleBestSellingProduct.js/SingleBestSellingProduct';
import './bestSellingProduct.css';

const BestSellingProducts = () => {

    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/all-products?limit=6')
        .then((response) =>  {
            setAllProduct(response.data);            
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[])

    return (
        <section className="best-selling-products">
            <div className="container-mediam">
                <div className="best-selling-product-section-title">
                    <h2>Best Selling Products</h2>
                </div>
                <div className="all-best-selling-products">
                    {
                        allProduct.map((product) => <SingleBestSellingProduct key={product._id} data={product}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
import React, { useEffect, useState } from 'react';
import SingleBestSellingProduct from '../singleBestSellingProduct.js/SingleBestSellingProduct';
import './bestSellingProduct.css';

const BestSellingProducts = () => {

    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('/productData.json')
        .then((response) => response.json())
        .then((data) => setAllProduct(data))
        .catch((error) => console.log(error.message))
    },[])

    return (
        <section className="best-selling-products">
            <div className="container">
                <div className="best-selling-product-section-title">
                    <h2>Best Selling Products</h2>
                </div>
                <div className="all-best-selling-products">
                    {
                        allProduct.slice(0,6).map((product) => <SingleBestSellingProduct key={product.id} data={product} bgColor={{
                            red: Math.floor(Math.random() * 200),
                            green: Math.floor(Math.random() * 155),
                            blue: Math.floor(Math.random() * 215),
                        }}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BestSellingProducts;
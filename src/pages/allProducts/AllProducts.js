import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import SingleProduct from '../singleProduct/SingleProduct';
import './allProducts.css';

const AllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('/productData.json')
        .then((response) => response.json())
        .then((data) => setAllProduct(data))
        .catch((error) => console.log(error.message))
    },[])


    return (
        <>
            <NavBar/>
            <section className="all-products-section">
                <div className="container-fluid">
                    <div className="all-products-section-title">
                        <h2>Just For You</h2>
                    </div>
                    <div className="all-products-container">
                        {
                            allProduct.map((product) => <SingleProduct key={product.id} product={product}/>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProducts;
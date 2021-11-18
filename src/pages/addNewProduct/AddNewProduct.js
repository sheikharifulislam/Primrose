import axios from 'axios';
import React, { useState } from 'react';
import './addNewProduct.css';
const AddNewProduct = () => {

    const [productData, setProductData] = useState({
        totlaComment: '0',
        totalStar: '0',
    });

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...productData};
        newProduct[field] = value;        
        setProductData(newProduct)
    }

    const handelAddSubmit = e => {        
        e.preventDefault();
        if(productData.offerPrice === 0) {
            productData.offerPrice = productData.mainPrice;
        }
        axios.post('https://glacial-ridge-32887.herokuapp.com/add-new-product',productData)
        .then((response) => {
            if(response.data.insertedId) {
                alert('Successfully Add Product');
                e.target.reset();
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className="add-new-product-section">
          <div className="add-new-product-section-title">
                <h2>Add New Product</h2>
                <div className="add-product-container">
                    <form action="" onSubmit={handelAddSubmit}>
                        <div className="add-product-area">
                            <div className="add-product-from-design">
                                <label htmlFor="product-name">Product Name</label>
                                <input type="text"  placeholder="Enter Your Product Name" id="product-name" name="productName" onInput={handleInput} required/>
                            </div>                           
                            <div className="add-product-from-design">
                                <label htmlFor="product-quantity">Product Quantity</label>
                                <input type="number"  placeholder="Enter Your Product Quantity" id="product-quantity" name="productQuantity" onInput={handleInput} required/>
                            </div>
                            <div className="add-product-from-design">
                                <label htmlFor="product-image">Product Image</label>                              
                                <input type="url" placeholder="Enter Your Image Url" name="productImage" onInput={handleInput} required/>
                            </div>
                            <div className="add-product-from-design">
                                <label htmlFor="product-price">Product Price</label>
                                <input type="number"  placeholder="Enter Your Product Price" id="product-price" name="mainPrice" onInput={handleInput} required/>
                            </div>
                            <div className="add-product-from-design">
                                <label htmlFor="product-offer-price">Product Offer Price</label>
                                <input type="number"  placeholder="Enter Your Product Offer Price" id="product-offer-price" name="offerPrice" onInput={handleInput}/>
                            </div>
                            <div className="add-product-from-design">
                                <label htmlFor="product-details">Product Details</label>
                                <textarea id="product-details" cols="40" rows="7" placeholder="Enter Your Product Descripaction" name="productDetails" onInput={handleInput} required></textarea>
                            </div>                           
                        </div>
                        <input type="submit" value="Add New" id="add-new-product-button"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
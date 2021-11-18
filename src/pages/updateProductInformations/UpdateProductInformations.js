import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './updateProductInformatins.css';

const UpdateProductInformations = () => {

    const {PreviousProductId} = useParams();
    const navigate = useNavigate();   

    const [productData, setProductData] = useState({
        productName: '',
        productImage: '',
        productDetails: '',
        mainPrice: '',
        offerPrice: '',
        productQuantity: '',        
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/single-product?productId=${PreviousProductId}`)
        .then((response) => {
            setProductData(response.data);            
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[PreviousProductId])

    

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...productData};
        newProduct[field] = value;        
        setProductData(newProduct)
    }

    const handelUpdateForm = e => {        
        e.preventDefault();
        axios.patch(`http://localhost:5000/update-product-info?productId=${PreviousProductId}`,productData)
        .then((response) => {            
            if(response.data.modifiedCount) {
                alert('Succefull Update Product Informations');
                navigate('/dashboard/manage-products',{
                    replace: true,
                })
            }            
        })
        .catch((error) => {
            console.log(error.message);
        })
             
    }


    return (
        <div className="update-new-product-section">
            <div className="update-new-product-section-title">
                <h2>update Product Informations</h2>
                <div className="update-product-container">
                    <form action="" onSubmit={handelUpdateForm}>
                        <div className="update-product-area">
                            <div className="update-product-from-design">
                                <label htmlFor="product-name">Product Name</label>
                                <input type="text"  placeholder="Enter Your Product Name" id="product-name" name="productName" value={productData?.productName} onInput={handleInput} required/>
                            </div>                           
                            <div className="update-product-from-design">
                                <label htmlFor="product-quantity">Product Quantity</label>
                                <input type="number"  placeholder="Enter Your Product Quantity" id="product-quantity" name="productQuantity" value={productData?.productQuantity} onInput={handleInput} required/>
                            </div>
                            <div className="update-product-from-design">
                                <label htmlFor="product-image">Product Image</label>                              
                                <input type="url" placeholder="Enter Your Image Url" name="productImage" value={productData?.productImage} onInput={handleInput} required/>
                            </div>
                            <div className="update-product-from-design">
                                <label htmlFor="product-price">Product Price</label>
                                <input type="number"  placeholder="Enter Your Product Price" id="product-price" name="mainPrice" value={productData?.mainPrice} onInput={handleInput} required/>
                            </div>
                            <div className="update-product-from-design">
                                <label htmlFor="product-offer-price">Product Offer Price</label>
                                <input type="number"  placeholder="Enter Your Product Offer Price" id="product-offer-price" name="offerPrice" value={productData?.offerPrice} onInput={handleInput}/>
                            </div>
                            <div className="update-product-from-design">
                                <label htmlFor="product-details">Product Details</label>
                                <textarea id="product-details" cols="40" rows="7" placeholder="Enter Your Product Descripaction" name="productDetails" value={productData?.productDetails} onInput={handleInput} required></textarea>
                            </div>                           
                        </div>
                        <input type="submit" value="update now" id="update-new-product-button"/>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default UpdateProductInformations;
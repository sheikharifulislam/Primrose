import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useFirebase from '../../customhook/useFirebase';
import NavBar from '../navBar/NavBar';
import './shipping.css';

const Shipping = () => {

    const {user} = useFirebase();
    const {OrderProductId} = useParams()
    const [shippingData,setShippingData] = useState('');
    const [orderProductData, setOrderProductData] = useState({});
    const navigate = useNavigate();

    // const initializeShippinginfo = {
    //     customarName: '',
    //     customarEmail: '',
    //     customarMobileNumber: '',
    //     shippingAddress: '',
    // }
 
   

    const handelINputField = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newShippingData = {...shippingData}
        newShippingData[field] = value;
        setShippingData(newShippingData); 
            
    }

    //load single product data 

    useEffect(() => {
        axios.get(`https://glacial-ridge-32887.herokuapp.com/single-product?productId=${OrderProductId}`)
        .then((response) => {
            setOrderProductData(response.data);                           
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[OrderProductId]);


    //function for handle form
    const handleShippingForm = e => {
        e.preventDefault();
        function getFormateTime() {
            const now = new Date().toLocaleString();
        
            const date = now.split(',')[0].split('/');          
            const time = now.split(',')[1].split(':');
            return {
                date: `${date[1]}/${date[0]}/${date[2]}`,
                time: `${time[0]}:${time[1]}${time[2].slice(2)}`
            };
        }

        const {date} = getFormateTime();
        const {time} = getFormateTime();   

        const updateInputData = {
            ...shippingData,
            customarName: user.displayName,
            customarEmail: user.email,
        };

        const data = {
            userEmail: user?.email,
           orderInfo: {
               ...updateInputData,
               productName:  orderProductData?.productName,
               productPrice: orderProductData?.offerPrice,
               orderDate: date,
               orderTime: time,               
           },
           orderStatus: 'pending',
        }

        axios.post('https://glacial-ridge-32887.herokuapp.com/add-new-order',data)
        .then((response) => {
            if(response.data.insertedId) {
                alert('Product Order Successfull');
                navigate('/all-products',{
                    replace: true,
                })
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
        
        
        
    }

    return (
        <>
            <NavBar/>           
            <div className="shipping-form">
                <div className="shipping-form-container">
                    <div className="shipping-form-title">
                        <h2>Shippin Form</h2>
                    </div>
                    <form onSubmit={handleShippingForm}>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Name"  name="customarName" value={user?.displayName} disabled/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="email" placeholder="Enter Your Email"  name="customarEmail" value={user?.email} disabled/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="tel" placeholder="Enter Your Mobile Number" name="customarMobileNumber" onInput={handelINputField} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Address" name="shippingAddress" onInput={handelINputField} required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Shipping;
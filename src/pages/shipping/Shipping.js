import React, { useContext } from 'react';
import OrderProductDataProvider, { OrderProductContext } from '../../customhook/OrderProductDataProvider';
import NavBar from '../navBar/NavBar';
import './shipping.css';

const Shipping = () => {

    const orderProduct = useContext(OrderProductContext);
    console.log(orderProduct);

    return (
        <>
            <NavBar/>
            <OrderProductDataProvider>
            <div className="shipping-form">
                <div className="shipping-form-container">
                    <div className="shipping-form-title">
                        <h2>Shippin Form</h2>
                    </div>
                    <form>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Name"  required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="email" placeholder="Enter Your Email"  required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="tel" placeholder="Enter Your Mobile Number" required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="text" placeholder="Enter Your Address" required/>
                        </div>
                        <div className="shipping-form-design">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            </OrderProductDataProvider>
        </>
    );
};

export default Shipping;
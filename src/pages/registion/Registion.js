import React, { useState } from 'react';
import {useNavigate,useLocation, NavLink} from 'react-router-dom';
import useFirebaseProvider from '../../customhook/useFirebaseProvider';
import RegistionImage from '../../images/Mobile register.gif';
import './registion.css';

const Registion = () => {

    const [registionData, setRegistionData] = useState({});
    const [passwordError, setPasswordError] = useState({});
    const navigate = useNavigate();
    const location = useLocation();     

    const {register} = useFirebaseProvider();

    const hindleRegistionForm = e => {
        e.preventDefault();
        setPasswordError({});
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(registionData.password)) {
            if(registionData.password !== registionData.confirmPassword) {
                const passwordMatchError = "password and confirm password not match";
                setPasswordError({...passwordError,passwordMatchError});
                return;
            }
            else {
                const {userName,userEmail,userMobileNumber,password} = registionData;
                 register(userName,userEmail,userMobileNumber, password,navigate,location)
            }
        }
        else {
            const passwordStrongError = 'Please include atleast 1 uppercase character, 1 lowercase character, 1 digit and 1 special character';
            setPasswordError({...passwordError,passwordStrongError});
            return;
        }      
        e.target.reset();
    }

 

    const handleRegistionInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistionData = { ...registionData };
        newRegistionData[field] = value;
        setRegistionData(newRegistionData);
    }

    return (
        <>
            <div className="registion-section">
                <div className="container">
                    <div className="registion-container">
                        <div className="registion-image">
                            <img src={RegistionImage} alt="" />
                        </div>
                        <div className="registion-from-container">
                            <div className="registion-form-container-title">
                                <h2>Registion form</h2>
                            </div>
                            <div className="registion-form">
                                <form onSubmit={hindleRegistionForm}>
                                    <div className="form-design">
                                        <input type="text" placeholder="Enter Your Name" name="userName" onInput={handleRegistionInput} required />
                                    </div>
                                    <div className="form-design">
                                        <input type="email" placeholder="Enter Your Email Address" name="userEmail" onInput={handleRegistionInput} required />
                                    </div>
                                    <div className="form-design">
                                        <input type="number" placeholder="Enter Your Mobile Number" name="userMobileNumber" onInput={handleRegistionInput} required />
                                    </div>
                                    <div className="form-design">
                                        <input type="password" placeholder="Creat Password (Min 8 Characters)" title="Please include atleast 1 uppercase character, 1 lowecase charcter, 1 digit and 1 special charcter" name="password" onInput={handleRegistionInput} required />
                                        {
                                            passwordError.passwordStrongError &&
                                            <small>{passwordError?.passwordStrongError}</small>
                                        }
                                    </div>
                                    <div className="form-design">
                                        <input type="password" placeholder="Confirm your password" name="confirmPassword" onInput={handleRegistionInput} required />
                                        {
                                            passwordError.passwordMatchError &&
                                            <small>{passwordError?.passwordMatchError}</small>
                                        }
                                    </div>
                                    <input type="submit" value="Registion" />
                                </form>
                            </div>
                            <div className="all-redy-register">
                                <p>Alredy Register <NavLink to="/login">Login</NavLink></p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
        </>
    );
};

export default Registion;
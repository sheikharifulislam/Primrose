import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './navBar.css';

import UseFirebaseAuth from '../../customhook/UseFirebaseAuth';

const NavBar = () => {

  const {user} = UseFirebaseAuth();

  const [mobileMenuDisplay, setMobileMenuDisplay] = useState('block');

  const handelMobileMenu = () => {
    if(mobileMenuDisplay === 'none') {
        setMobileMenuDisplay('block');
    }
    else {
        setMobileMenuDisplay('none');
    }
} 

const styleMobileMenuDisplay = {
    display: mobileMenuDisplay,
}

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <div className="web-site-logo">
                        <img src={logo} alt="Website Logo"/>
                    </div>
                    <div className="menu" style={styleMobileMenuDisplay}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/all-products">All Product</NavLink>
                                </li>
                                {
                                    !user?.email &&
                                    <>
                                      <li>
                                         <NavLink to="/registion">Registion</NavLink>
                                       </li>
                                       <li>
                                          <NavLink to="/login">Login</NavLink>
                                       </li>   
                                    </>
                                }
                                {
                                    user?.email &&
                                    <li>
                                        <NavLink to="/dashboard" id="dashboard">Dashboard</NavLink>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="response-menu-bar">
                        <li>
                            <span><i className="fas fa-bars" onClick={handelMobileMenu}></i></span>
                        </li>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
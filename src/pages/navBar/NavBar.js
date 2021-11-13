import React from 'react';
import useFirebaseProvider from '../../customhook/useFirebaseProvider';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './navBar.css';

const NavBar = () => {

    const {user} = useFirebaseProvider();    

    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <div className="web-site-logo">
                        <img src={logo} alt="Website Logo"/>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/all-products">All Product</NavLink>
                                </li>
                                {
                                    !user.email &&
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
                                    user.email &&
                                    <li>
                                        <NavLink to="/dashboard" id="dashboard">Dashboard</NavLink>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
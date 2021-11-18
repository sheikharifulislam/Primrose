import React,{useState} from 'react';
import { NavLink,useNavigate,useLocation} from 'react-router-dom';
import UseFirebaseAuth from '../../customhook/UseFirebaseAuth';
import loginImage from '../../images/Mobile login.gif';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import './login.css';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const {login} = UseFirebaseAuth();
    
    const handleLoginForm = e => {
        e.preventDefault();
        const {userEmail,password} = loginData;
        login(userEmail,password,navigate,location);
    }

    const handelLoginInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistionData = { ...loginData };
        newRegistionData[field] = value;
        setLoginData(newRegistionData);
    }


    return (
        <>
            <NavBar/>
            <div className="login-section">
                <div className="container">
                    <div className="login-container">
                        <div className="login-image">
                            <img src={loginImage} alt="LoginImage" />
                        </div>
                        <div className="login-from-container">
                            <div className="login-form-container-title">
                                <h2>Login form</h2>
                            </div>
                            <div className="login-form">
                                <form onSubmit={handleLoginForm}>                           
                                    <div className="form-design">
                                        <input type="email" placeholder="Enter Your Email Address" name="userEmail" onInput={handelLoginInput} required />
                                    </div> 
                                    <div className="form-design">
                                        <input type="password" placeholder="Enter your password" name="password"  onInput={handelLoginInput} required />
                                        
                                    </div>
                                    <input type="submit" value="Log In" />
                                </form>
                            </div>
                            <div className="new-user">
                                <p>New User <NavLink to="/registion">Registion</NavLink></p>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Login;
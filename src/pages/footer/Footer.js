import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className="style-footer">
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="footer-link-container">
                        <div className="all-product-link-section">
                            <h3>PRODUCTS</h3>
                            <a href="/#">
                                Shop all products
                            </a>
                            <a href="/#">
                                Shampoo
                            </a>
                            <a href="/#">
                                Conditioner
                            </a>
                            <a href="/#">
                                2-in-1
                            </a>
                            <a href="/#">
                                Pre-Wash
                            </a>
                            <a href="/#">
                                Co-Wash
                            </a>
                            <a href="/#">
                                Styling
                            </a>
                        </div>
                        <div className="tips-and-advice-section">
                            <h3>TIPS AND ADVICE</h3>
                            <a href="/#">
                                See all articles
                            </a>
                            <a href="/#">
                                About dandruff
                            </a>
                            <a href="/#">
                                Scalp Concerns
                            </a>
                            <a href="/#">
                                Hair Care
                            </a>
                            <a href="/#">
                                Hair & Scalp Advisor
                            </a>
                        </div>
                        <div className="about-section">
                            <h3>ABOUT</h3>
                            <a href="/#">
                                Overview
                            </a>
                            <a href="/#">
                                Philosophy
                            </a>
                            <a href="/#">
                                History
                            </a>
                            <a href="/#">
                                Sustainability
                            </a>
                            <a href="/#">
                                Transparency
                            </a>
                            <a href="/#">
                                Open Science
                            </a>
                            <a href="/#">
                                Safety
                            </a>
                            <a href="/#">
                                News
                            </a>
                        </div>
                        <div className="suport-section">
                            <h3>SUPPORT</h3>
                            <a href="/#">
                                Contact
                            </a>
                            <a href="/#">
                                FAQ
                            </a>
                        </div>
                    </div>
                    <div className="country-change-and-flow-section">
                        <div className="choices-country-section">
                            <select id="select-country" >
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Bangladesh" defaultValue>Bangladesh</option>
                            </select>
                        </div>
                        <div className="flow-section">
                            <a href="/#" title="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/#" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/#" title="You Tube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="/#" title="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="company-extra-info-section">
                        <a href="/#">
                            Privacy
                        </a>
                        <a href="/#">
                            CA Privacy
                        </a>
                        <a href="/#">
                            Site Map
                        </a>
                        <a href="/#">
                            Terms and Conditions
                        </a>
                        <a href="/#">
                            Do Not Sell My Personal Information
                        </a>
                    </div>
                    <div className="copyright-section">
                        <p>&copy; 2021 All rights reserved primrose</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
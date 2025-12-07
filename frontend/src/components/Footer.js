import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="logo">
                            <i className="fas fa-leaf"></i>
                            <span>Vriddhi</span>
                        </div>
                        <p>AI-powered crop disease detection for sustainable and productive agriculture.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Home</a></li>
                            <li><a href="#features"><i className="fas fa-chevron-right"></i> Features</a></li>
                            <li><a href="#how-it-works"><i className="fas fa-chevron-right"></i> How It Works</a></li>
                            <li><a href="#demo"><i className="fas fa-chevron-right"></i> Demo</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul className="footer-links">
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Blog</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Crop Care Guide</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Disease Database</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Research Papers</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li><i className="fas fa-map-marker-alt"></i> Agriculture Research Center, New Delhi</li>
                            <li><i className="fas fa-phone"></i> +91 98765 43210</li>
                            <li><i className="fas fa-envelope"></i> info@vriddhi.agri</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Vriddhi. All rights reserved. Designed for sustainable agriculture.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

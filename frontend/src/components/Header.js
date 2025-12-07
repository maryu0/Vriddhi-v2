import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <div className="logo">
                    <i className="fas fa-leaf"></i>
                    <span>Vriddhi</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#technology">Technology</a></li>
                        <li><a href="#demo">Demo</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#download">Download</a></li>
                    </ul>
                </nav>
                <button className="cta-button">Get Started</button>
            </div>
        </header>
    );
};

export default Header;

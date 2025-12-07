import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleGetStarted = () => {
    window.open("/login", "_blank");
  };

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <i className="fas fa-leaf"></i>
          <span>Vriddhi</span>
        </Link>
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#technology">Technology</a>
            </li>
            <li>
              <a href="#demo">Demo</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Smart Crop Disease Detection for Modern Farmers</h1>
                    <p>Vriddhi uses AI-powered image recognition to instantly identify crop diseases and provide actionable
                        treatment recommendations, helping farmers protect their harvests and increase yields.</p>
                    <div className="hero-buttons">
                        <button className="cta-button">Download App</button>
                        <button className="secondary-button">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="tablet-mockup">
                        <div className="tablet-screen">
                            <i className="fas fa-seedling"></i>
                            <h3>Disease Detected</h3>
                            <p>Late Blight</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

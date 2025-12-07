import React from 'react';

const Download = () => {
    return (
        <section className="download" id="download">
            <div className="container">
                <div className="download-container">
                    <h2>Download Vriddhi Today</h2>
                    <p>Join thousands of farmers using Vriddhi to protect their crops and increase yields</p>

                    <div className="download-options">
                        <a href="#" className="app-store">
                            <i className="fab fa-google-play"></i>
                            <div className="app-store-text">
                                <small>GET IT ON</small>
                                <div>Google Play</div>
                            </div>
                        </a>
                        <a href="#" className="app-store">
                            <i className="fab fa-apple"></i>
                            <div className="app-store-text">
                                <small>Download on the</small>
                                <div>App Store</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;

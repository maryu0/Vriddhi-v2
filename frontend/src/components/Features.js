import React from 'react';

const Features = () => {
    const features = [
        {
            icon: 'fa-camera',
            title: 'AI Disease Detection',
            description: 'Advanced CNN algorithms analyze leaf images to identify diseases with high accuracy in seconds'
        },
        {
            icon: 'fa-book-medical',
            title: 'Personalized Treatment',
            description: 'Receive tailored recommendations for both chemical and organic treatment options'
        },
        {
            icon: 'fa-history',
            title: 'History Tracking',
            description: 'Monitor recurring issues and track crop health over multiple seasons'
        },
        {
            icon: 'fa-mobile-alt',
            title: 'Mobile-First Design',
            description: 'Simple interface accessible even for farmers with limited technical expertise'
        },
        {
            icon: 'fa-wifi',
            title: 'Offline Capability',
            description: 'Works without internet connection for use in remote agricultural areas'
        },
        {
            icon: 'fa-sun',
            title: 'Preventive Insights',
            description: 'Get actionable advice to prevent disease outbreaks and optimize crop health'
        },
        {
            icon: 'fa-chart-line',
            title: 'Yield Optimization',
            description: 'Data-driven insights to maximize crop production and profitability'
        },
        {
            icon: 'fa-globe',
            title: 'Multi-Crop Support',
            description: 'Identifies diseases across 50+ crop varieties including rice, wheat, tomatoes, and more'
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2>Powerful Features</h2>
                    <p>Vriddhi combines cutting-edge AI technology with farmer-friendly design to deliver actionable insights</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card animate interactive-element" key={index}>
                            <div className="feature-icon">
                                <i className={`fas ${feature.icon}`}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

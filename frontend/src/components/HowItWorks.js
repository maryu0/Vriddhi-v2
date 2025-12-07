import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: 'Capture Image',
            description: 'Take a clear photo of the affected crop leaf using the app\'s camera interface'
        },
        {
            number: 2,
            title: 'AI Analysis',
            description: 'Our CNN algorithm analyzes the image and identifies the disease with high precision'
        },
        {
            number: 3,
            title: 'Get Treatment',
            description: 'Receive immediate recommendations for treatment and prevention'
        }
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2>How Vriddhi Works</h2>
                    <p>Simple 3-step process to diagnose and treat crop diseases</p>
                </div>
                <div className="steps">
                    {steps.map((step, index) => (
                        <div className="step animate" key={index}>
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                    <div className="step-line"></div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

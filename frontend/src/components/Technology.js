import React from 'react';

const Technology = () => {
    const techSteps = [
        {
            icon: 'fa-camera',
            title: 'Image Capture',
            description: 'High-resolution photo of crop'
        },
        {
            icon: 'fa-brain',
            title: 'AI Analysis',
            description: 'CNN processes visual data'
        },
        {
            icon: 'fa-search',
            title: 'Disease Identification',
            description: 'Pattern matching in neural network'
        },
        {
            icon: 'fa-clipboard-list',
            title: 'Recommendations',
            description: 'Personalized treatment plan'
        }
    ];

    return (
        <section className="technology" id="technology">
            <div className="container">
                <div className="tech-container">
                    <div className="tech-content">
                        <h2>Advanced AI Technology</h2>
                        <p>Vriddhi utilizes state-of-the-art Convolutional Neural Networks (CNNs) to analyze crop images
                            with precision. Our deep learning model has been trained on over 100,000 images of diseased and
                            healthy plants.</p>
                        <p>The system continuously learns from new data, improving its accuracy and expanding its disease
                            detection capabilities. Our algorithm can identify over 50 different plant diseases with 98%
                            accuracy.</p>
                        <p>By combining computer vision with agricultural expertise, we provide farmers with reliable,
                            actionable insights they can trust.</p>
                    </div>
                    <div className="tech-image">
                        <div className="tech-diagram">
                            {techSteps.map((step, index) => (
                                <div className="tech-step" key={index}>
                                    <div className="step-icon">
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                    <div className="step-text">
                                        <h4>{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;

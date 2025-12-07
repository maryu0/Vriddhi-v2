import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            content: 'Vriddhi helped me save my entire tomato crop from late blight. The app detected the disease early and provided clear treatment steps. My yield increased by 35% compared to last season.',
            name: 'Rajesh Kumar',
            role: 'Tomato Farmer, Punjab'
        },
        {
            content: 'As a smallholder farmer, I couldn\'t afford crop losses. Vriddhi\'s disease detection helped me take preventive measures and reduced my pesticide usage by 40% while maintaining healthy crops.',
            name: 'Priya Sharma',
            role: 'Vegetable Grower, Haryana'
        },
        {
            content: 'The offline capability is a game-changer for us in remote areas. Even without internet, we can diagnose diseases and get treatment recommendations. Vriddhi has become an essential tool for our farm.',
            name: 'Suresh Patel',
            role: 'Organic Farmer, Gujarat'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>Farmer Testimonials</h2>
                    <p>Hear from farmers who have transformed their crops with Vriddhi</p>
                </div>

                <div className="testimonial-container">
                    {testimonials.map((testimonial, index) => (
                        <div
                            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
                            key={index}
                        >
                            <div className="testimonial-content">
                                {testimonial.content}
                            </div>
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="testimonial-nav">
                        {testimonials.map((_, index) => (
                            <div
                                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

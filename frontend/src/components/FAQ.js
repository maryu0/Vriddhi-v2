import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How accurate is Vriddhi\'s disease detection?',
            answer: 'Vriddhi achieves 98% accuracy in disease detection through advanced CNN algorithms trained on over 100,000 images of healthy and diseased plants. Our system continuously learns from new data to improve its precision.'
        },
        {
            question: 'Does Vriddhi work offline?',
            answer: 'Yes, Vriddhi has offline capabilities. The core disease detection functionality works without internet connection, making it accessible even in remote agricultural areas with limited connectivity.'
        },
        {
            question: 'Which crops does Vriddhi support?',
            answer: 'Vriddhi currently supports over 50 crop varieties including rice, wheat, corn, tomatoes, potatoes, cotton, sugarcane, and many others. Our database is continuously expanding to include more crops.'
        },
        {
            question: 'How long does it take to get results?',
            answer: 'Vriddhi provides results in under 10 seconds. The image analysis and disease identification process happens instantly, allowing you to take immediate action.'
        },
        {
            question: 'Is Vriddhi available in multiple languages?',
            answer: 'Currently, Vriddhi is available in English and Hindi. We\'re working on adding more regional languages to serve farmers across India and other agricultural regions.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about Vriddhi</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

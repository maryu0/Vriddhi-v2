import React from 'react';

const Stats = () => {
    const stats = [
        { value: '98%', label: 'Disease Detection Accuracy' },
        { value: '5000+', label: 'Farmers Supported' },
        { value: '30%', label: 'Average Yield Improvement' },
        { value: '24/7', label: 'Instant Access' }
    ];

    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item animate" key={index}>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

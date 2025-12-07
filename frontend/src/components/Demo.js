import React, { useState } from 'react';

const Demo = () => {
    const [selectedDisease, setSelectedDisease] = useState('healthy');
    const [imageScale, setImageScale] = useState(1);

    const diseaseImages = {
        'healthy': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'blight': 'https://images.unsplash.com/photo-1560024843-1cbae8c6c4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'rust': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'mildew': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'leafspot': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    };

    const diseaseInfo = {
        healthy: {
            title: 'Healthy Leaf',
            description: 'This leaf shows no signs of disease. The green coloration is uniform with no spots, lesions, or discoloration.',
            recommendation: 'Continue regular monitoring and maintain good agricultural practices.'
        },
        blight: {
            title: 'Late Blight Detected',
            description: 'Dark, water-soaked lesions on leaves with white fungal growth underneath. Affects tomatoes and potatoes.',
            recommendation: 'Apply copper-based fungicides. Remove and destroy infected plants. Improve air circulation.'
        },
        rust: {
            title: 'Rust Detected',
            description: 'Orange or brown pustules on leaf undersides. Spreads rapidly in humid conditions.',
            recommendation: 'Apply sulfur-based fungicides. Remove infected leaves. Ensure proper spacing between plants.'
        },
        mildew: {
            title: 'Powdery Mildew Detected',
            description: 'White, powdery coating on leaf surfaces. Thrives in warm, dry conditions with high humidity.',
            recommendation: 'Apply neem oil or potassium bicarbonate. Improve air circulation. Avoid overhead watering.'
        },
        leafspot: {
            title: 'Leaf Spot Detected',
            description: 'Circular brown or black spots with yellow halos. Caused by various fungal and bacterial pathogens.',
            recommendation: 'Apply copper fungicides. Remove infected leaves. Practice crop rotation.'
        }
    };

    const handleAnalyze = () => {
        setImageScale(1.05);
        setTimeout(() => setImageScale(1), 300);
    };

    return (
        <section className="demo-section" id="demo">
            <div className="container">
                <div className="section-header">
                    <h2>Experience Vriddhi</h2>
                    <p>See how our AI-powered system detects crop diseases in real-time</p>
                </div>
                <div className="demo-container">
                    <div className="demo-controls">
                        <h3>Try Our Disease Detection</h3>
                        <p>Select a crop disease to see how Vriddhi works:</p>

                        <div className="disease-selector">
                            <label htmlFor="disease-select">Choose a disease:</label>
                            <select
                                id="disease-select"
                                value={selectedDisease}
                                onChange={(e) => setSelectedDisease(e.target.value)}
                            >
                                <option value="healthy">Healthy Leaf</option>
                                <option value="blight">Late Blight</option>
                                <option value="rust">Rust</option>
                                <option value="mildew">Powdery Mildew</option>
                                <option value="leafspot">Leaf Spot</option>
                            </select>
                        </div>

                        <button
                            className="cta-button"
                            style={{ width: '100%', marginTop: '20px' }}
                            onClick={handleAnalyze}
                        >
                            <i className="fas fa-microscope"></i> Analyze Leaf
                        </button>

                        <div className={`disease-info active`}>
                            <h3>{diseaseInfo[selectedDisease].title}</h3>
                            <p>{diseaseInfo[selectedDisease].description}</p>
                            <p><strong>Recommendation:</strong> {diseaseInfo[selectedDisease].recommendation}</p>
                        </div>
                    </div>

                    <div className="demo-preview">
                        <div className="demo-image">
                            <img
                                src={diseaseImages[selectedDisease]}
                                alt="Crop leaf"
                                style={{ transform: `scale(${imageScale})` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Technology from './components/Technology';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
    useEffect(() => {
        // Animation on scroll
        const animateElements = document.querySelectorAll('.animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });

        // Header scroll effect
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.padding = '10px 0';
                    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
                } else {
                    header.style.padding = '20px 0';
                    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div className="App">
            <BackgroundElements />
            <Header />
            <Hero />
            <Demo />
            <Technology />
            <Features />
            <HowItWorks />
            <Stats />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;

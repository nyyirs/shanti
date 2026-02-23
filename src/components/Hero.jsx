import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowDown } from '@phosphor-icons/react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/175737733.jpg?k=b4adf7b7679ef7a72667c7cc9b361123986c4df9749fe34b0b83847f69e3e3e4&o="
                    alt="Shanti Nivas Villa Exterior"
                    className="hero-img"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-card glass">
                    <span className="badge">Poste de Flacq, Mauritius</span>
                    <h1 className="hero-title">Experience Tranquility at <br /><span className="highlight">Shanti Nivas</span></h1>
                    <p className="hero-subtitle">A lush botanical oasis offering a "big hotel" experience with the charm and comfort of a colonial-style guest house.</p>
                    <div className="hero-actions">
                        <a href="#gallery" className="btn btn-primary">Take a Tour</a>
                        <a href="#contact" className="btn btn-secondary glass-btn">Get in Touch</a>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator">
                <span>Scroll to explore</span>
                <ArrowDown />
            </a>
        </section>
    );
};

export default Hero;

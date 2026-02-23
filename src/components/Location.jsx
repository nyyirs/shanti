import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Waves, ShoppingCart, AirplaneTilt, MapTrifold, EnvelopeSimple, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

const Location = () => {
    const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.15, triggerOnce: true });
    const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <section className="location bg-dark text-light section-padding" id="location">
            <div className="container location-container">
                <div
                    ref={contentRef}
                    className={`location-content reveal fade-right ${contentInView ? 'active' : ''}`}
                >
                    <span className="sub-title text-primary-light">The Neighborhood</span>
                    <h2 className="section-title">Perfectly Located</h2>
                    <ul className="location-list">
                        <li>
                            <MapPin />
                            <div>
                                <strong>Address</strong>
                                <span>Avenue Arc en Ciel, Poste de Flacq, Mauritius</span>
                            </div>
                        </li>
                        <li>
                            <Waves />
                            <div>
                                <strong>Beaches</strong>
                                <span>5-6 mins drive to Poste Lafayette & Belle Mare</span>
                            </div>
                        </li>
                        <li>
                            <ShoppingCart />
                            <div>
                                <strong>Shopping</strong>
                                <span>3 mins drive to Centre de Flacq</span>
                            </div>
                        </li>
                        <li>
                            <AirplaneTilt />
                            <div>
                                <strong>Airport</strong>
                                <span>46 km from SSR Airport (Transfers available)</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div
                    ref={mapRef}
                    className={`map-placeholder reveal fade-left shadow-lg ${mapInView ? 'active' : ''}`}
                >
                    <div className="map-illustration">
                        <MapTrifold />
                        <p>Explore Poste de Flacq</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Contact = () => {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

    return (
        <section className="contact section-padding" id="contact">
            <div className="container text-center reveal scale-up" ref={ref} className={`container text-center reveal scale-up ${inView ? 'active' : ''}`}>
                <div className="contact-card glass-dark shadow-xl">
                    <h2>Ready to Experience Shanti Nivas?</h2>
                    <p>Contact Jay Beeponee to inquire about availability and book your stay at our tropical oasis.</p>
                    <a href="mailto:info@shantinivas.mu" className="btn btn-primary btn-large">
                        <EnvelopeSimple /> Email Host
                    </a>
                    <p className="small-text mt-4">We also offer airport transfers and guided excursions upon request.</p>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-text">Shanti <br />Nivas</span>
                        </a>
                        <p>A tranquil colonial-style guest house in Poste de Flacq, Mauritius.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#amenities">Amenities</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#location">Location</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Shanti Nivas Villa. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#"><FacebookLogo /></a>
                        <a href="#"><InstagramLogo /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Location;

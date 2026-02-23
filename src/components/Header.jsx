import React, { useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                if (!isMobileMenuOpen) {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    // Ensure solid background when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsScrolled(true);
        } else if (window.scrollY <= 50) {
            setIsScrolled(false);
        }
    }, [isMobileMenuOpen]);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <span className="logo-text">Shanti <br />Nivas</span>
                </a>

                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#amenities" className="nav-link" onClick={closeMenu}>Amenities</a>
                    <a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a>
                    <a href="#location" className="nav-link" onClick={closeMenu}>Location</a>
                </nav>

                <a href="#contact" className="btn btn-primary nav-btn">Contact Host</a>

                <button
                    className="mobile-toggle"
                    aria-label="Toggle Navigation"
                    onClick={toggleMenu}
                >
                    {isMobileMenuOpen ? <X weight="bold" /> : <List weight="bold" />}
                </button>
            </div>
        </header>
    );
};

export default Header;

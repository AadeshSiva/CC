import React, { useState, useEffect } from 'react';
import './Component.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const scrollContainer = document.querySelector('.app-container');
        if (!scrollContainer) return;

        let lastScrollY = scrollContainer.scrollTop;

        const handleScroll = () => {
            const currentScrollY = scrollContainer.scrollTop;

            if (currentScrollY < 10) {
                setShowNav(true);
            } else if (currentScrollY > lastScrollY) {
                setShowNav(false);
                setIsOpen(false);
            } else {
                setShowNav(true);
            }

            lastScrollY = currentScrollY;
        };

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-nav ${showNav ? 'show' : 'hide'}`}>
            <div className={`navbar-float ${isOpen ? 'open' : ''}`}>
                <div className="navbar-content">
                    <div className="navbar-header">
                        <img src="./namelogo.svg" alt="Clima Circuit" className="navbar-logo" />
                        <button
                            className={`menu-toggle ${isOpen ? 'open' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="toggle-line line-top" />
                            <span className="toggle-line line-bottom" />
                        </button>
                    </div>

                    <ul className={`navbar-options ${isOpen ? 'show' : ''}`}>
                        <a href='#home' className="navbar-option-items">Home</a>
                        <a href='#features' className="navbar-option-items">Features</a>
                        <a href='#news' className="navbar-option-items">News</a>
                        <a href='#contact' className="navbar-option-items">Contact</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

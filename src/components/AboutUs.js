// AboutUs.jsx
import React, { useState, useEffect } from 'react';
import View9 from '../assets/images/bricks1.jpg';


function AboutUs() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="about-us-container">
            <div className={`about-us ${isMobile ? 'mobile' : 'desktop'}`}>
                <div className="about-us-text">
                    <h2 className="about-us-title">ABOUT BRICKSPOINT BOUTIQUE APARTHOTEL ASOKORO</h2>
                    <h3 className="about-us-subtitle">YOUR SMART CHOICE IN ABUJA, NIGERIA</h3>
                    <p className="about-us-description">
                        Indulge in luxury at Brickspoint Boutique ApartHotel, nestled in Asokoro, Abuja. Immerse
                        yourself in chic comfort just moments from the CBD. Enjoy personalized service in a vibrant
                        locale near embassies, ensuring an unforgettable stay.
                    </p>
                    <p className="about-us-footer-text">
                        Enjoy modern amenities, including high-speed WIFI and state-of-the-art systems. The spacious
                        and thoughtfully arranged interiors provide a serene retreat, while our large windows offer
                        natural daylight and a large terrace.
                    </p>
                    <button className="about-us-book-now">BOOK NOW</button>
                </div>
                <div className="about-us-image-container">
                    <img src={View9} alt="Hotel View" className="about-us-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

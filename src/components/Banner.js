import React, { useState, useEffect } from 'react';
import Banners1 from '../assets/images/hotelimage/bricks6.jpg';
import Banners2 from '../assets/images/hotelimage/bricks23.jpg';
import Banners3 from '../assets/images/hotelimage/bricks10.jpg';
import Video from '../assets/video/myvideo1.mp4';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Christmas-LogoWhite.png'; // Add your cap image here

function Banner() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const navigation = useNavigate();

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        };
        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    }, [screenSize]);

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const [isStretching, setIsStretching] = useState(false);
    const [isStretching1, setIsStretching1] = useState(false);
    const [isStretching2, setIsStretching2] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
        setIsStretching(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
        setIsStretching(false);
    };

    const handleMouseOver1 = () => {
        setIsHovered1(true);
        setIsStretching1(true);
    };

    const handleMouseOut1 = () => {
        setIsHovered1(false);
        setIsStretching1(false);
    };

    const handleMouseOver2 = () => {
        setIsHovered2(true);
        setIsStretching2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovered2(false);
        setIsStretching2(false);
    };

    return (
        <div style={{ width: '100%', height: screenSize.width < 500 ? 250 : 900, overflow: 'hidden' }} className='image-container1'>
            {!isHovered && !isHovered1 && !isHovered2 ? (
                <video loop={true} autoPlay='true' muted alt="Background" className="background-image1">
                    <source src={Video} type="video/mp4" />
                </video>
            ) : (
                <></>
            )}

            {isHovered ? (
                <img
                    src={Banners1}
                    alt="Background"
                    className="background-image1"
                />
            ) : (
                <></>
            )}

            {isHovered1 ? (
                <img
                    src={Banners2}
                    alt="Background"
                    className="background-image1"
                />
            ) : (
                <></>
            )}

            {isHovered2 ? (
                <img
                    src={Banners3}
                    alt="Background"
                    className="background-image1"
                />
            ) : (
                <></>
            )}

            <div className="overlay1" style={{ zIndex: 200, width: '100%' }}>
                <NavBar />
                {screenSize.width < 700 ? (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 40 }}>
                        <div style={{ color: '#fff', fontSize: 40, fontFamily: 'BrownSugar' }}>Brickspoint</div>
                        <div style={{ color: '#fff', fontSize: 18, fontFamily: 'GothamLight', marginTop: -10 }}>BOUTIQUE APARTHOTEL</div>
                        <div style={{ color: '#fff', fontSize: 18, fontFamily: 'GothamLight' }}>ASOKORO</div>
                    </div>
                ) : (
                    <div className="banner">
                    <img
                      src={Logo} // Replace with the actual path to your image
                      alt="BricksPoint Banner"
                      className="banner-image"
                    />
                  </div>
                  

                )}
                <div style={{ width: '100%', display: 'flex', height: 150, justifyContent: 'space-around', marginTop: 100 }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}
                    >
                        <div style={{ width: 0.5, height: isStretching1 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching1 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: 50, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20, cursor: 'pointer' }}>DINE</div>
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                        onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseOut2}
                    >
                        <div style={{ width: 0.5, height: isStretching2 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching2 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: 50, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20, cursor: 'pointer' }} onClick={() => navigation('/rooms')}>STAY</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

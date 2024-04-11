import React, { useState, useEffect } from 'react'
import Wuse from '../assets/images/wuse.jpg'
import Asokoro from '../assets/images/asokoro.jpg'
import Yobe from '../assets/images/yobe.jpg'
import Internet from '../assets/images/internet.jpg'
import Wake from '../assets/images/wake.jpg'
import Laundry from '../assets/images/laundry.jpg'
import Donotdisturb from '../assets/images/donotdisturb.jpg'
import Health from '../assets/images/health.jpg'
import Banner from '../assets/images/hotelimage/bricks12.jpg'

function OurHotels() {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const [isStretching, setIsStretching] = useState(false);
    const [isStretching1, setIsStretching1] = useState(false);
    const [isStretching2, setIsStretching2] = useState(false);
    const [isStretching3, setIsStretching3] = useState(false);
    const [isStretching4, setIsStretching4] = useState(false);

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

    const handleMouseOver3 = () => {
        setIsHovered3(true);
        setIsStretching3(true);
    };

    const handleMouseOut3 = () => {
        setIsHovered3(false);
        setIsStretching3(false);
    };

    const handleMouseOver4 = () => {
        setIsHovered4(true);
        setIsStretching4(true);
    };

    const handleMouseOut4 = () => {
        setIsHovered4(false);
        setIsStretching4(false);
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#EEEEEE', marginTop: 100, height: 950, overflow: 'hidden', zIndex: 0 }} className='image-container4' id="section1">
            {!isHovered && !isHovered1 && !isHovered2 && !isHovered3 && !isHovered4 ? (
                <img
                    src={Banner}
                    alt="Background"
                    className={`background-image4`}
                    style={{ zIndex: 0, opacity: isHovered ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out',  }}
                />
            ) : (
                <></>
            )}

            {isHovered ? (
                <img
                    src={Internet}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, opacity: isHovered ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', transform: isHovered ? 'scale(1.5)' : 'scale(1)', animation: isHovered ? 'zoomIn 5s ease-in-out' : '', }}
                />
            ) : (
                <></>
            )}

            {isHovered1 ? (
                <img
                    src={Wake}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, opacity: isHovered1 ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', transform: isHovered1 ? 'scale(1.5)' : 'scale(1)', animation: isHovered1 ? 'zoomIn 5s ease-in-out' : '', }}
                />
            ) : (
                <></>
            )}

            {isHovered2 ? (
                <img
                    src={Laundry}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, opacity: isHovered2 ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', transform: isHovered2 ? 'scale(1.5)' : 'scale(1)', animation: isHovered2 ? 'zoomIn 5s ease-in-out' : '', }}
                />
            ) : (
                <></>
            )}

            {isHovered3 ? (
                <img
                    src={Donotdisturb}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, opacity: isHovered3 ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', transform: isHovered3 ? 'scale(1.5)' : 'scale(1)', animation: isHovered3 ? 'zoomIn 5s ease-in-out' : '', }}
                />
            ) : (
                <></>
            )}

            {isHovered4 ? (
                <img
                    src={Health}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, opacity: isHovered4 ? 1 : 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', transform: isHovered4 ? 'scale(1.5)' : 'scale(1)', animation: isHovered4 ? 'zoomIn 5s ease-in-out' : '', }}
                />
            ) : (
                <></>
            )}
            <div className="overlay4" style={{ zIndex: 200, width: '100%', height: 'auto', overflow: 'hidden' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: screenSize.width < 700 ? 40 : 50, paddingTop: 50, fontFamily: 'FuturaLight', marginTop: 50, color: '#fff' }}>
                    SERVICE / FACILITY
                </div>

                <div style={{ width: '100%', display: screenSize.width < 700 ? '' : 'flex', height: 100, justifyContent: 'space-around', marginTop: 100 }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <div style={{
                            width: 0.5, height: isStretching ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching ? 'scaleY(1)' : 'scaleY(1)',
                            backgroundColor: '#fff',
                        }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>FREE INTERNET</div>
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}
                    >
                        <div style={{ width: 0.5, height: isStretching1 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching1 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>SPA & GYM</div>
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseOut2}
                    >
                        <div style={{ width: 0.5, height: isStretching2 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching2 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>LAUNDRY</div>
                    </div>
                </div>
                <div style={{ width: '100%', display: screenSize.width < 700 ? '' : 'flex', height: 100, justifyContent: 'space-around', marginTop: 100 }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver3}
                        onMouseOut={handleMouseOut3}
                    >
                        <div style={{
                            width: 0.5, height: isStretching3 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching3 ? 'scaleY(1)' : 'scaleY(1)',
                            backgroundColor: '#fff',
                        }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>CONCIERGE</div>
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}
                    >
                        <div style={{ width: 0.5, height: isStretching1 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching1 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>SWIMMING POOL</div>
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver4}
                        onMouseOut={handleMouseOut4}
                    >
                        <div style={{ width: 0.5, height: isStretching4 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching4 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>ROOM SERVICE</div>
                    </div>
                </div>
                <div style={{ width: '100%', display: screenSize.width < 700 ? '' : 'flex', height: 100, justifyContent: 'space-around', marginTop: 100 }}>
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver3}
                        onMouseOut={handleMouseOut3}
                    >
                        <div style={{
                            width: 0.5, height: isStretching3 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching3 ? 'scaleY(1)' : 'scaleY(1)',
                            backgroundColor: '#fff',
                        }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>LOBBY CAFE</div>
                    </div>
                    {/* <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}
                    >
                        <div style={{ width: 0.5, height: isStretching1 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching1 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>ROOM SERVICE</div>
                    </div> */}
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 400 }}
                        onMouseOver={handleMouseOver4}
                        onMouseOut={handleMouseOut4}
                    >
                        <div style={{ width: 0.5, height: isStretching4 ? '100px' : '70px', transition: 'height 0.5s ease-in-out', transform: isStretching4 ? 'scaleY(1)' : 'scaleY(1)', backgroundColor: '#fff' }}></div>
                        <div style={{ fontSize: screenSize.width < 700 ? 30 : 35, color: '#fff', fontFamily: 'FuturaLight', marginLeft: 20 }}>BUSINESS SERVICE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHotels
import React, { useState, useEffect } from 'react'
import Hotel from '../assets/images/hotel1.jpg'
import View9 from '../assets/images/bricks1.jpg'
import Images from '../assets/images/hotelimage/bricks8.jpg'
import Images1 from '../assets/images/hotelimage/bricks11.jpg'

function AboutUs() {

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

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            {screenSize.width < 700 ? (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div style={{ fontSize: 30, width: '100%', textAlign: 'center', fontFamily: 'FuturaLight' }}>ABOUT BRICKSPOINT BOUTIQUE APARTHOTEL ASOKORO</div>
                        <div style={{ fontSize: 20, width: '100%', marginTop: 20, textAlign: 'center' }}>YOUR SMART CHOICE IN ABUJA, NIGERIA</div>
                        <div style={{ fontSize: 15, width: '100%', marginTop: 20, textAlign: 'center' }}>
                            Indulge in luxury at Brickspoint Boutique ApartHotel, nestled in Asokoro, Abuja. Immerse yourself in chic comfort just moments from the CBD. Enjoy personalized service in a vibrant locale near embassies, ensuring an unforgettable stay. </div>
                    </div>
                    <div style={{ width: '100%', height: 350, backgroundColor: '#ccc', marginTop: 20 }}>
                        <img src={View9} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            ) : (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: 100 }}>
                    <div>
                        <div style={{ fontSize: 30, width: 350, fontFamily: 'FuturaLight' }}>ABOUT BRICKSPOINT BOUTIQUE APARTHOTEL ASOKORO</div>
                        <div style={{ fontSize: 20, width: 400, marginTop: 20, fontFamily: 'GrandCru' }}>YOUR SMART CHOICE IN ABUJA, NIGERIA</div>
                        <div style={{ fontSize: 18, width: 400, marginTop: 20, fontFamily: 'FuturaLight' }}>
                            Indulge in luxury at Brickspoint Boutique ApartHotel, nestled in Asokoro, Abuja. Immerse yourself in chic comfort just moments from the CBD. Enjoy personalized service in a vibrant locale near embassies, ensuring an unforgettable stay. </div>
                    </div>
                    <div style={{ width: 800, height: 450, backgroundColor: '#ccc' }}>
                        <img src={View9} style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            )}
            {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: 50 }}>
                <div style={{ width: '60%', height: 600, backgroundColor: 'pink' }}>
                    <img src={Images} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '25%', height: 300, backgroundColor: 'pink' }}>
                    <img src={Images1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div> */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: screenSize.width < 700 ? 50 : 150, alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ fontSize: screenSize.width < 700 ? 12 : 16, fontFamily: 'FuturaLight' }}>A LEGENDARY ADDRESS</div>
                <div style={{ width: screenSize.width < 700 ? '95%' : '35%', fontSize: screenSize.width < 700 ? 25 : 45, textAlign: 'center', fontFamily: 'GrandCru', color: '#5A5D5F' }}>
                    Experience the capital in twenty-two sleek, private apartments.
                </div>
                <div style={{ width: 1, height: 60, transition: 'height 0.5s ease-in-out', backgroundColor: '#5A5D5F', marginTop: 20 }}></div>
                <div style={{ fontSize: 16, fontFamily: 'FuturaLight', color: '#5A5D5F', marginTop: 20 }}>22 PLACES TO SEE IN ABUJA</div>
                <div style={{ width: screenSize.width < 700 ? '95%' : '60%', fontSize: screenSize.width < 700 ? 16 : 20, fontFamily: 'FuturaLight', color: '#000', marginTop: 20, textAlign: 'center' }}>
                    Enjoy modern amenities, including high-speed WIFI and state of-the-art systems. The spacious and thoughtfully arranged interiors provide a serene retreat, while our large windows offer a natural day light and large terrace.
                </div>
                <div style={{ width: 200, height: 40, border: '0.5px solid #fff', marginTop: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#fff', fontFamily: 'FuturaLight', borderRadius: 3, backgroundColor: '#D2AF31' }}>
                    BOOK NOW
                </div>
            </div>
        </div>
    )
}

export default AboutUs
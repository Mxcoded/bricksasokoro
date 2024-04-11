import React, { useState, useEffect } from 'react'
import Mirror from '../assets/images/hotelimage/bricksmirror.jpg'

function HotelsFacilities() {

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
        <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <div style={{ width: screenSize.width < 700 ? '95%' : '70%', height: screenSize.width < 700 ? 'auto' : 400, backgroundColor: '#fff', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', display: screenSize.width < 700 ? '' : 'flex', paddingBottom: 10 }}>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: '100%', border: '8px solid #27394A', borderRightWidth: 0, borderTopWidth: 0, borderBottomWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div style={{ fontSize: 20, fontFamily: 'FuturaLight', fontWeight: 'bold', marginTop: -20 }}>Accomodation</div>
                        <div style={{ textAlign: 'center', fontSize: 18, fontFamily: 'FuturaLight', width: '90%' }}>Spacious, bright and elegant, our richly decorated apartment style rooms combine comfort and functionality. BricksPoint Boutique ApartHotel takes comfort to another level in its attention to details.</div>
                        <div style={{ fontSize: 20, fontFamily: 'FuturaLight', marginTop: 45, fontWeight: 'bold' }}>YOU CAN CALL IT HOME!</div>
                        <div style={{ textAlign: 'center', fontSize: 18, fontFamily: 'FuturaLight', width: '90%' }}>We pride ourselves in our attention to every detail of your stay. </div>
                        <div style={{ textAlign: 'center', fontSize: 18, fontFamily: 'FuturaLight', width: '90%' }}>Experience luxury at BricksPoint ApartHotel: lavish rooms, modern amenities, serene interiors, and ample natural light.
                            Experience the pinnacle of Luxury and convenience in every detail of your stay.
                        </div>
                        <div style={{ width: 150, height: 35, backgroundColor: '#D2AF31', borderRadius: 30, marginTop: 15, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'GothamLight', cursor: 'pointer' }}>
                            BOOK NOW!
                        </div>
                    </div>
                    {screenSize.width < 700 ? (
                        <></>
                    ) : (
                        <div style={{ width: '50%', height: '100%', backgroundColor: '#ccc' }}>
                            <img src={Mirror} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HotelsFacilities
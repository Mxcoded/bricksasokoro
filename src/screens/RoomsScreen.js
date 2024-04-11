import React, { useState, useEffect, useRef } from 'react'
import NavBar from '../components/NavBar'
import { rooms } from '../components/HotelImages';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import BoyIcon from '@mui/icons-material/Boy';

const RoomSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isHovered, setIsHovered] = useState(false);


    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div
            style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer', }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={images[currentImageIndex].url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {isHovered && (
                <>
                    <div onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1, width: 50, height: 50, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 80, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', marginLeft: 10, opacity: '0.7' }}><ArrowBackIosNewIcon style={{ fontSize: 25, color: '#554139' }} /></div>
                    <div onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1, width: 50, height: 50, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 80, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', marginRight: 10, opacity: '0.7' }}><ArrowForwardIosIcon style={{ fontSize: 25, color: '#554139' }} /></div>
                </>
            )}
        </div>
    );
};

function RoomCard({ room, screenSize }) {
    const [hovered, setHovered] = useState(false);

    const navigation = useNavigate()
    return (
        <div
            className="room-card"
            style={{
                width: screenSize.width < 700 ? 380 : 520,
                height: screenSize.width < 700 ? 500 : 600,
                backgroundColor: '#F5F5F5',
                flex: '0 0 auto',
                marginRight: 15,
                marginLeft: 15,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* RoomSlider (Image) */}
            <div style={{ width: '100%', height: '50%' }}>
                <RoomSlider images={room.image} />
            </div>

            {/* Default Information */}
            <div
                className={`default-info ${hovered ? 'slide-up' : ''}`}
                style={{
                    width: '100%',
                    height: '50%', // Adjust height of default information
                    backgroundColor: '#fff', // Adjust background color and opacity
                    transition: 'transform 0.3s ease-in-out',
                    transform: hovered ? 'translateY(-100%)' : 'translateY(0)',
                    display: hovered ? 'none' : 'block', // Hide default information when hovered
                    color: '#fff', // Adjust text color
                    padding: '20px',
                    position: 'absolute',
                    bottom: 0,
                }}
            >

                <div style={{ padding: '20px' }}>
                    <div style={{ fontSize: screenSize.width < 700 ? 20 : 30, fontFamily: 'FuturaLight', color: '#000', textTransform: 'uppercase' }}>
                        {room.roomName}
                    </div>
                    <div style={{ fontSize: screenSize.width < 700 ? 14 : 16, fontFamily: 'FuturaLight', marginTop: 15, color: '#000' }}>
                        {room.description}
                    </div>
                </div>

                <div style={{ width: '100%', border: '0.5px solid #ccc', marginTop: 30 }}></div>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 20 }}>
                    <div></div>
                    {/* <div style={{ display: 'flex' }}>
                        <div style={{ width: 100, height: 45, backgroundColor: '#fff', borderRadius: 30, fontSize: 18, fontFamily: 'Gotham', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', marginRight: 10 }}>Details</div>
                        <div style={{ width: 100, height: 45, backgroundColor: '#000', borderRadius: 30, fontSize: 18, fontFamily: 'Gotham', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', marginRight: 15, cursor: 'pointer' }} onClick={() => navigation('/book')}>Book</div>
                    </div> */}
                </div>
            </div>

            {/* Hover Information */}
            <div
                className={`additional-info ${hovered ? 'slide-up' : ''}`}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '50%',
                    backgroundColor: '#fff', // Adjust background color and opacity
                    transition: 'transform 0.3s ease-in-out',
                    transform: hovered ? 'translateY(0)' : 'translateY(100%)',
                }}
            >
                <div style={{ fontSize: screenSize.width < 700 ? 20 : 30, fontFamily: 'FuturaLight', marginTop: 20, marginLeft: 20, textTransform: 'uppercase' }}>
                    Default Room Name
                </div>
                <div style={{ fontSize: screenSize.width < 700 ? 14 : 16, fontFamily: 'FuturaLight', marginTop: 15, marginLeft: 20, display: 'flex', alignItems: 'center' }}>
                    MAX OCCUPANCY 3<BoyIcon style={{ fontSize: 20, color: '#000' }} />
                </div>
                <div style={{ fontSize: screenSize.width < 700 ? 14 : 16, fontFamily: 'FuturaLight', marginTop: 15, marginLeft: 20 }}>
                    Decorated according to feng shui principles and featuring a contemporary Italian style.
                </div>
                {/* <div style={{ fontSize: screenSize.width < 700 ? 14 : 20, fontFamily: 'FuturaLight', fontWeight: 'bold', marginTop: 15, marginLeft: 20, display: 'flex', alignItems: 'center' }}>
                    #400,000 <div style={{ fontSize: 14, fontFamily: 'FuturaLight', marginLeft: 10 }}> / night</div>
                </div> */}
                <div style={{ width: '90%', height: 40, backgroundColor: '#D2AF31', marginTop: 55, marginLeft: 20, fontSize: 18, color: '#fff', fontFamily: 'FuturaLight', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    BOOK NOW
                </div>
            </div>
        </div>
    );
}

function RoomsScreen() {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [hovered, setHovered] = useState(false);
    const navigation = useNavigate()

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
        <div style={{ width: '100%', height: 'auto', backgroundColor: '#fff' }}>
            <div style={{ width: '100%', height: 100, backgroundColor: '#ccc' }}>
                <NavBar />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 50, fontFamily: 'FuturaLight', marginTop: 50 }}>
                APARTMENTS
            </div>
            <div className="room-card-container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: 20, flexWrap: 'wrap', gap: 10, marginBottom: 50 }}>

                {rooms.map((room, index) => (
                    <RoomCard key={index} room={room} screenSize={screenSize} />
                ))}

            </div>
            <Footer />
        </div>
    )
}

export default RoomsScreen
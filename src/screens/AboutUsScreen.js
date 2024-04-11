import React, { useState, useEffect } from 'react'
import Banners from '../assets/images/hotelimage/bricks6.jpg'
import Banners1 from '../assets/images/hotelimage/bricks11.jpg'
import Banners2 from '../assets/images/hotelimage/bricks9.jpg'
import Video from '../assets/video/myvideo1.mp4'
import NavBar from '../components/NavBar';
import MiniBooking from '../components/MiniBooking';
import Footer from '../components/Footer';

function AboutUsScreen() {

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
            <div style={{ width: '100%', height: screenSize.width < 500 ? 300 : 800 }} className='image-container2'>
                {/* <img src={Banners} alt="Background" className="background-image2" style={{ zIndex: 0, }} /> */}
                <video loop={true} autoPlay='true' muted alt="Background" className="background-image2" style={{ zIndex: 0, opacity: 0.8, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out' }}>
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="overlay2" style={{ zIndex: 200 }}>
                    <NavBar />
                    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                        <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5.5vw', color: '#fff', marginTop: screenSize.width < 700 ? 80 : 200, fontFamily: 'FuturaLight', textAlign: 'center' }}>
                            ABOUT US
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#fff', fontFamily: 'GothamLight' }}>

                    </div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, color: '#000', marginTop: 20, fontFamily: 'BrownSugar' }}>
                
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ width: screenSize.width < 700 ? '95%' : '60%', fontSize: 16, color: '#000', textAlign: 'center', fontFamily: 'FuturaLight' }}>
                In the heart of highbrow Asokoro, Abuja, lies Brickspoint Boutique ApartHotel, an intimate, stylishly crafted ApartHotel with attention to boutique style comfort and personalised attentive services to our guests. Our hotel is just 5 minutes drive away from the central business district and we are Nestled between Governors lodges and embassies. 
                </div>
            </div>

            <div style={{ width: '100%', marginTop: 40 }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 600 }}>
                        <img src={Banners} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 'auto', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 40 }}>
                        <div style={{ fontSize: 30, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>MISSION STATEMENT</div>
                        <div style={{ width: '90%', fontSize: 16, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>
                        Crafting an unforgettable experience that surpasses guest expectations, each stay becomes a narrative of its own.
                        </div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 'auto', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 40 }}>
                        <div style={{ fontSize: 30, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>VISION STATEMENT</div>
                        <div style={{ width: '90%', fontSize: 16, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>
                        To be recognised as the preferred destination, where guests immerse themselves in luxury, comfort and personalised care, where each stay tells a story.
                        </div>
                    </div>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 600 }}>
                        <img src={Banners1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                {/* <div style={{ width: '100%', display: 'flex', flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 600 }}>
                        <img src={Banners2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ width: screenSize.width < 700 ? '100%' : '50%', height: 'auto', backgroundColor: '#ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 40 }}>
                        <div style={{ fontSize: 30, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>Our Vision</div>
                        <div style={{ width: '90%', fontSize: 16, marginLeft: screenSize.width < 700 ? 20 : 50, fontFamily: 'FuturaLight' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsScreen
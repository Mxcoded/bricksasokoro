import React, { useState, useEffect } from 'react'
import '../index.css'
import Black from '../assets/images/grey.jpg'
import NavBar from '../components/NavBar'
import TasteNavBar from '../components/TasteNavBar'
import Footer from '../components/Footer'
import Food from '../assets/images/hotelimage/bricks28.jpg'
import Food1 from '../assets/images/hotelimage/bricks12.jpg'
import Logo from '../assets/images/logo2.png'
import { useNavigate } from 'react-router-dom'
import Menu from '../assets/images/menu1.png'
import LeftArrow from '../assets/images/leftarrow.png'
import RightArrow from '../assets/images/rightarrow.png'
import { taste } from '../components/HotelImages'

function MenuScreen() {

    const navigation = useNavigate()

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + taste.length) % taste.length;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % taste.length;
        setCurrentIndex(newIndex);
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const [isHovered1, setIsHovered1] = useState(false);

    const handleHover1 = () => {
        setIsHovered1(!isHovered1);
    };

    return (
        <div style={{ width: '100%', }}>
            <div style={{ width: '100%', height: screenSize.width < 700 ? 400 : 900, overflow: 'hidden' }} className='image-container1'>
                <img
                    src={Food1}
                    alt="Background"
                    className={`background-image1`}
                    style={{ zIndex: 0, transition: 'opacity 0.5s ease-in-out, background-image 0.5s ease-in-out transform 0.5s ease-in-out', }}
                />
                <div className="overlay1" style={{ zIndex: 200, width: '100%' }}>
                    <div style={{ width: '100%', height: 100, backgroundColor: 'transparent' }}>
                        <TasteNavBar />
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: screenSize.width < 700 ? 0 : 80, }}>
                        <img src={Logo} style={{ width: screenSize.width < 700 ? 300 : 400, height: screenSize.width < 700 ? 150 : 300, objectFit: 'contain' }} />
                    </div>
                    <div style={{ marginTop: -20, display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ color: '#fff', fontSize: screenSize.width < 700 ? 17 : 33, fontFamily: 'FuturaLight' }}>TASTE RESTAURANT</div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: screenSize.width < 700 ? 20 : 200, }}>
                        <div style={{ width: 0.5, height: screenSize.width < 700 ? 40 : 80, transition: 'height 0.5s ease-in-out', backgroundColor: '#fff' }}></div>
                    </div>
                    <div style={{ marginTop: 0, display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 30, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 11 : 14, color: '#fff', fontFamily: 'FuturaLight', cursor: 'pointer', borderRadius: 5, marginTop: 20 }}
                        >
                            RESERVE A TABLE!
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: screenSize.width < 700 ? 'auto' : 800, display: 'flex', flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                <div style={{ width: '33%', height: '100%', border: '0.5px solid #000', borderLeftWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <div style={{ marginLeft: 120, marginTop: 100 }}>
                        <div style={{ fontSize: 16, color: '#000', fontFamily: 'FuturaLight' }}>DETAILS</div>
                        <div style={{ fontSize: 22, color: '#AE907D', fontFamily: 'GrandCru' }}>+2348099999627</div>
                        <div style={{ fontSize: 28, color: '#AE907D', fontFamily: 'FuturaLight' }}>rsv@brickspoint.com</div>
                        <div style={{ fontSize: 20, color: '#000', fontFamily: 'FuturaLight' }}>No 24 Jose Martins Street, Asokoro Abuja.</div>
                        <div style={{ width: 0.5, height: 70, backgroundColor: '#000', marginTop: 30 }}></div>
                    </div>
                    <div style={{ marginLeft: 120, marginTop: 30 }}>
                        <div style={{ fontSize: 22, color: '#AE907D', fontFamily: 'GrandCru' }}>Opening Hours</div>
                        <div style={{ fontSize: 20, color: '#000', fontFamily: 'FuturaLight' }}>from Monday to Saturday</div>
                        <div style={{ width: 0.5, height: 70, backgroundColor: '#000', marginTop: 30 }}></div>
                    </div>
                    <div style={{ marginLeft: 120, marginTop: 30 }}>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: 22, color: '#AE907D', fontFamily: 'GrandCru' }}>Lunch</div>
                            <div style={{ fontSize: 20, fontFamily: 'FuturaLight' }}>12:30pm to 1:30pm</div>
                        </div>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: 22, color: '#AE907D', fontFamily: 'GrandCru' }}>Dinner</div>
                            <div style={{ fontSize: 20, fontFamily: 'FuturaLight' }}>12:30pm to 1:30pm</div>
                        </div>
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between' }}>
                            <div style={{ fontSize: 22, color: '#AE907D', fontFamily: 'GrandCru' }}>Sundays</div>
                            <div style={{ fontSize: 20, fontFamily: 'FuturaLight' }}>Closed</div>
                        </div>
                        <div style={{width: 250, height: 70, border: '0.5px solid #000', marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontFamily: 'FuturaLight', color: '#000', cursor: 'pointer'}}>
                            RESERVE A TABLE
                        </div>
                    </div>
                </div>
                <div style={{ width: '67%', height: '100%' }}>
                    <div style={{ marginLeft: 120, marginTop: 100 }}>
                        <div style={{ fontSize: 16, color: '#000', fontFamily: 'FuturaLight' }}>RESTAURANT</div>
                        <div style={{ fontSize: 42, color: '#000', fontFamily: 'GrandCru' }}>TASTE RESTAURANT</div>
                        <div style={{ width: 0.5, height: 70, backgroundColor: '#000', marginTop: 30 }}></div>
                        <div style={{ fontSize: 28, color: '#000', fontFamily: 'FuturaLight', marginTop: 30 }}>Tease your pallets to an array of national and international cuisine from our Taste Kitchen by Chef Nti.
                            Our Café offers an array of delectable pastries, sandwiches, salads, cold beverages, coffee and an amazing Tea experience from an indigenous Tea Connoisseur.</div>
                        <div style={{ display: 'flex', marginTop: 50 }}>
                            <div>
                                <img src={Menu} style={{ width: 50, height: 50 }} />
                                <div style={{ fontSize: 16, fontFamily: 'FuturaLight', color: '#000' }}>Taste Restaurant</div>
                            </div>
                            <div style={{ marginLeft: 60 }}>
                                <img src={Menu} style={{ width: 50, height: 50 }} />
                                <div style={{ fontSize: 16, fontFamily: 'FuturaLight', color: '#000' }}> Café</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: 900, position: 'relative' }}>
                <img src={taste[currentIndex].img} style={{ width: '100%', height: '100%', objectFit: 'cover', }} alt={`Slide ${currentIndex}`} />
                {/* <div onClick={goToPrevSlide} style={{ position: 'absolute', width: 80, height: 80, border: '2px solid #fff', borderRadius: 100, top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={LeftArrow} style={{ width: 50, height: 'auto', marginRight: -70 }} />
                </div> */}
                <div
                    onClick={goToPrevSlide}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    style={{
                        position: 'absolute',
                        width: 80,
                        height: 80,
                        border: '2px solid #fff',
                        borderRadius: 100,
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={LeftArrow}
                        style={{
                            width: 50,
                            height: 'auto',
                            marginRight: -70,
                            transition: 'margin-left 0.3s ease', // Add transition property for smooth animation
                            marginLeft: isHovered ? '-10px' : '0', // Apply margin-left when hovered
                        }}

                    />
                </div>
                <div
                    onClick={goToNextSlide}
                    onMouseEnter={handleHover1}
                    onMouseLeave={handleHover1}
                    style={{
                        position: 'absolute',
                        width: 80,
                        height: 80,
                        border: '2px solid #fff',
                        borderRadius: 100,
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={RightArrow}
                        style={{
                            width: 50,
                            height: 'auto',
                            marginLeft: -70,
                            transition: 'margin-right 0.3s ease', // Add transition property for smooth animation
                            marginRight: isHovered1 ? '-10px' : '0', // Apply marginRight when hovered
                        }}

                    />
                </div>
                <div style={{ zIndex: 0, width: '100%', position: 'absolute', height: 900, top: 0, bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ fontSize: 18, fontFamily: 'FuturaLight', color: '#fff' }}>GALLERY</div>
                    <div style={{ fontSize: 48, fontFamily: 'FuturaLight', color: '#fff' }}>TASTE RESTAURANT</div>
                    <div style={{ width: 1, height: 70, backgroundColor: '#FFF', marginTop: 30 }}></div>
                    <div style={{marginTop: 5}}>
                        <div style={{fontSize: 22, fontFamily: 'GrandCru', color: '#fff', fontWeight: 'bold'}}>{currentIndex + 1}/{taste.length}</div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: 50, marginBottom: 50, flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                <div style={{ height: 900, backgroundColor: '#ccc', borderRadius: 20, overflow: 'hidden' }} className='image-container3'>
                    <img src={Food} alt="Background" className="background-image3" style={{ zIndex: 0, }} />
                    <div className="overlay3" style={{ zIndex: 20, width: '100%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: screenSize.width < 700 ? '100%' : '80%', height: 780, backgroundColor: '#fff', borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', opacity: 0.9 }}>
                            <div style={{ color: '#BF8711', fontSize: 80, fontFamily: 'BrownSugar' }}>TASTE</div>
                            <div style={{ color: '#BF8711', fontSize: 30, fontFamily: 'GothamLight' }}>MENU</div>
                        </div>
                    </div>
                </div>
                <div style={{ height: 900, backgroundColor: '#ccc', borderRadius: 20, overflow: 'hidden', marginTop: screenSize.width < 700 ? 40 : 0 }} className='image-container3'>
                    <img src={Food1} alt="Background" className="background-image3" style={{ zIndex: 0, }} />
                    <div className="overlay3" style={{ zIndex: 20, width: '100%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: screenSize.width < 700 ? '100%' : '80%', height: 780, backgroundColor: '#fff', borderRadius: 20, display: 'flex', justifyContent: 'center', opacity: 0.9 }}>
                            <div style={{ width: '90%', marginTop: 30 }}>
                                <div style={{ fontSize: 20, fontFamily: 'BrownSugar', color: '#BF8711', }}>BREAKFAST</div>
                                <div style={{ width: '100%', height: 250, marginTop: 10 }}>
                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Pancake and Omelette</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Juicy Triple Pancake stacks with butter, Syrup or Honey 1 Sausage and Egg of your choice</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦8,300</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Egg Sauce</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Egg Sauce: or Sunny Side Up Eggs, with Plantain /Yam/ Boiled Potatoes</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦6,100</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Corned Beef Sauce</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>With Plantain/Yam/Boiled Potatoes</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦5,500</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Scrambled Eggs Or Omelette with French Toast</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>French Toast: Scrambled Eggs, Onions, Green Pepper or Sunny Side Up Eggs</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦7,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Oats with Apple</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Spicy Oatmeal: made with Oatmeal, Cinnamon and Nutmeg, Ginger and Honey.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦5,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>English Breakfast</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Toasted Bread, Sausage Roll, Eggs Baked Bean & Grilled Tomatoes</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦6,500</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Americana Breakfast</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Home made Fries, Spicy Sausage, Eggs & Stewing Bell Pepper</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦6,500</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Extra Portions</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Yam, Plantain, Chips, White Rice</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦2,000</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: 50, marginBottom: 50, flexDirection: screenSize.width < 700 ? 'column' : 'row' }}>
                <div style={{ height: 800, backgroundColor: '#ccc', borderRadius: 20, overflow: 'hidden' }} className='image-container3'>
                    <img src={Black} alt="Background" className="background-image3" style={{ zIndex: 0, }} />
                    <div className="overlay3" style={{ zIndex: 20, width: '100%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '80%', height: 700, backgroundColor: '#fff', borderRadius: 20, display: 'flex', justifyContent: 'center', }}>
                            <div style={{ width: '90%', marginTop: 30 }}>
                                <div style={{ fontSize: 20, fontFamily: 'BrownSugar', color: '#BF8711', }}>NIGERIA CUISINE</div>
                                <div style={{ width: '100%', height: 250, marginTop: 10 }}>
                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Extra Portions</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Yam, Plantain, Chips, White Rice</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦2,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Seafood Okra</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Seafood Okra: Our delightful Seafood Okra is served with Fresh Fish, Crab, Shrimps, and Smoked Fish.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦12,600</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Vegetable Soup</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Vegetable Soup: Our leafy greens served with Stockfish, Kpomo, Dry Fish within the Soup based. Chicken, Goat Meat or Beef protein of your choice.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦12,700</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}></div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Fish will attract an additional cost.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦2,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Egusi Soup</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Egusi Soup: Our Melon is served with Stock Fish, Kpomo, Dry Fish within the Soup based.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦8,800</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}></div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Chicken, Goat Meat, Fish will attract an additional cost.
                                                All to be served with any Swallow of your choice Eba/Semo/Poundo</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦2,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}> Extra Portions</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Swallow</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦1,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Chicken/Beef Curry</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Swallow</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦9,300</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Fish Curry</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Fish Curry: is made with fresh produce Ginger, Onions, Ground Marsala, Coconut Milk, Carrot, Bell Pepper Basmati Rice</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦13,500</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: 800, backgroundColor: '#ccc', borderRadius: 20, overflow: 'hidden' }} className='image-container3'>
                    <img src={Black} alt="Background" className="background-image3" style={{ zIndex: 0, }} />
                    <div className="overlay3" style={{ zIndex: 20, width: '100%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '80%', height: 700, backgroundColor: '#fff', borderRadius: 20, display: 'flex', justifyContent: 'center', }}>
                            <div style={{ width: '90%', marginTop: 30 }}>
                                <div style={{ fontSize: 20, fontFamily: 'BrownSugar', color: '#BF8711', }}>NIGERIA CUISINE</div>
                                <div style={{ width: '100%', height: 250, marginTop: 10 }}>
                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Brickspoint Special Rice</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Hot and Spicy Basmati Rice: served with Sweet Corn, Coleslaw, Plantain with Beef or Chicken</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦11,300</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>BGrilled Chicken Chip</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Our Oven Grilled Chicken with Crispy Spicy Chips is served with a small portion of Green Salad.</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦6,500</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Stir Fried Rice</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Basmati Rice: made with Eggs, Onions, Springs Onions, Pepper shredded Carrot with Oyster Sauce</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦8,500</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Goat/Chicken/Beef Stew</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Nigerian Tomatoes based stew served with Rice</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦8,800</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Pasta Bolognese</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Mince Meat in a Tomatoes based with Veggie</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦9,000</div>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', height: 'auto', border: '1px solid #BF8711', padding: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0 }}>
                                        <div style={{ width: '70%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#BF8711', }}>Creamy Pasta</div>
                                            <div style={{ fontSize: 12, fontFamily: 'GothamLight', color: '#BF8711', }}>Creamy Sauce with Mushroom and Shredded Chicken or Shrimps</div>
                                        </div>
                                        <div style={{ width: '15%' }}>
                                            <div style={{ fontSize: 14, fontFamily: 'Gotham', color: '#000', }}>₦16,100</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MenuScreen
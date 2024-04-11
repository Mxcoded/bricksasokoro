import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../assets/images/logo.png'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import Bed from '../assets/images/hotelimage/bed.png'
import Dinner from '../assets/images/hotelimage/dinner.png'
import { HashLink as Link } from 'react-router-hash-link';

function TasteNavBar() {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [selectColor, setSelectColor] = useState('')
    const [selectColor1, setSelectColor1] = useState('')
    const [selectColor2, setSelectColor2] = useState('')

    const navigation = useNavigate()
    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsSticky(scrollTop > 0);

        if (scrollTop > (document.documentElement.clientHeight * 0.5)) {
            setIsScrolledDown(true);
        } else {
            setIsScrolledDown(false);
        }
    };

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

    const menu = () => {
        setShow(!show)
    }

    const onHoverIn = () => {
        setSelectColor('#5A5D5F')
    }

    const onHoverOut = () => {
        setSelectColor('')
    }

    const onHoverIn1 = () => {
        setSelectColor1('#5A5D5F')
    }

    const onHoverOut1 = () => {
        setSelectColor1('')
    }

    const onHoverIn2 = () => {
        setSelectColor2('#5A5D5F')
    }

    const onHoverOut2 = () => {
        setSelectColor2('')
    }

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',  }} className={`navigation-bar ${isSticky ? 'sticky' : ''}`}>
            <div className={`sticky-header ${isScrolledDown ? 'show' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <>
                    {screenSize.width < 700 ? (
                        <div style={{ width: '100%', position: 'relative', marginTop: screenSize.width < 700 ? 15 : 40 }}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <div onClick={menu}>
                                    <MenuIcon style={{ fontSize: 30, color: '#000', cursor: 'pointer' }} />
                                </div>

                                {show == false ? (
                                    <></>
                                ) : (
                                    <div onClick={() => setShow(false)}>
                                        <CloseIcon style={{ fontSize: 50, color: '#000' }} />
                                    </div>
                                )}
                            </div>

                            {show == false ? (
                                <></>
                            ) : (
                                <div style={{ width: '100%', height: '100vh', backgroundColor: '#fff', position: 'absolute' }}>
                                    <div style={{ color: '#000', width: '100%', height: 55, border: '1px solid #ccc', fontSize: 25, fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingLeft: 10, cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/')}>Home</div>
                                    <div style={{ color: '#000', width: '100%', height: 55, border: '1px solid #ccc', fontSize: 25, fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingLeft: 10, cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/rooms')}>Stay</div>
                                    <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/menu')}>Dine</div>
                                    <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }}>Events</div>
                                    <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/gallery')}>Gallery</div>
                                    <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }}>About Us</div></Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around', marginTop: 0, alignItems: 'center' }}>
                            <div>
                                <img src={Logo} style={{ width: 300, height: 100, objectFit: 'contain' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', marginRight: 300 }}>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/')}>Home</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/rooms')}>Stay</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/menu')}>Dine</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }}>Events</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/gallery')}>Gallery</div>
                                <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight' }}>About Us</div></Link>
                            </div>
                        </div>
                    )}
                    <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                        <div
                            style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 80, border: '0.5px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:screenSize.width < 700 ? 12 : 16, color: '#000', fontFamily: 'FuturaLight', cursor: 'pointer', backgroundColor: selectColor, borderBottomWidth: 0, borderTopWidth: 0, borderRightWidth: 0 }}
                            onMouseEnter={onHoverIn}
                            onMouseLeave={onHoverOut}
                            onClick={() => navigation('/book')}
                        >
                            RESERVE A TABLE!
                        </div>
                    </div>
                </>
            </div>
            <>
                {screenSize.width < 700 ? (
                    <div style={{ width: '100%', position: 'relative' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <div onClick={menu}>
                                <MenuIcon style={{ fontSize: 30, color: '#fff', cursor: 'pointer' }} />
                            </div>

                            {show == false ? (
                                <></>
                            ) : (
                                <div onClick={() => setShow(false)}>
                                    <CloseIcon style={{ fontSize: 50, color: '#fff' }} />
                                </div>
                            )}
                        </div>

                        {show == false ? (
                            <></>
                        ) : (
                            <div style={{ width: '100%', height: '100vh', backgroundColor: '#fff', position: 'absolute' }}>
                                <div style={{ color: '#000', width: '100%', height: 55, border: '1px solid #ccc', fontSize: 25, fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingLeft: 10, cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/')}>Home</div>
                                <div style={{ color: '#000', width: '100%', height: 55, border: '1px solid #ccc', fontSize: 25, fontWeight: 'bold', display: 'flex', alignItems: 'center', paddingLeft: 10, cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/rooms')}>Stay</div>
                                <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/menu')}>Dine</div>
                                <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }}>Events</div>
                                <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/gallery')}>Gallery</div>
                                <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }}>About Us</div></Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around', marginTop: 0, alignItems: 'center' }}>
                        {/* <div>
                        <img src={Logo} style={{ width: 300, height: 100, objectFit: 'contain' }} />
                    </div> */}
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/')}>Home</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/rooms')}>Stay</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/menu')}>Dine</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }}>Events</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }} onClick={() => navigation('/gallery')}>Gallery</div>
                            <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight' }}>About Us</div></Link>
                        </div>
                    </div>
                )}
                <div style={{ display: 'flex' }}>
                    <div
                        style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 80, border: '0.5px solid #FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 12 : 16, color: '#FFF', fontFamily: 'FuturaLight', cursor: 'pointer', backgroundColor: selectColor,}}
                        onMouseEnter={onHoverIn}
                        onMouseLeave={onHoverOut}
                        onClick={() => navigation('/book')}
                    >
                        RESERVE A TABLE!
                    </div>
                    {/* <div
                    style={{ width: 80, height: 100, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 0, cursor: 'pointer', backgroundColor: selectColor1 }}
                    onMouseEnter={onHoverIn1}
                    onMouseLeave={onHoverOut1}
                    onClick={() => navigation('/rooms')}
                >
                    <img src={Bed} style={{ width: 30, height: 30, objectFit: 'cover' }} />
                </div>
                <div
                    style={{ width: 80, height: 100, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 0, cursor: 'pointer', backgroundColor: selectColor2 }}
                    onMouseEnter={onHoverIn2}
                    onMouseLeave={onHoverOut2}
                >
                    <img src={Dinner} style={{ width: 40, height: 40, objectFit: 'cover' }} />
                </div> */}
                </div>
            </>
        </div>
    )
}

export default TasteNavBar
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/images/logo.png';


function Navbar() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        const handleScroll = () => setIsSticky(window.scrollY > 0);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setShowMenu(!showMenu);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Stay', path: '/rooms' },
        { name: 'Dine', path: '/menu' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About Us', path: '/aboutus', isHashLink: true },
    ];

    const renderMenuItems = () => (
        menuItems.map((item, index) => (
            item.isHashLink ? (
                <Link
                    key={index}
                    to={item.path}
                    smooth
                    className="menu-item"
                    onClick={() => setShowMenu(false)}
                >
                    {item.name}
                </Link>
            ) : (
                <div
                    key={index}
                    className="menu-item"
                    onClick={() => {
                        navigate(item.path);
                        setShowMenu(false);
                    }}
                >
                    {item.name}
                </div>
            )
        ))
    );
    const [selectColor, setSelectColor] = useState('')

    const navigation = useNavigate()
    const [show, setShow] = useState(false)

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

    const [selectedItem, setSelectedItem] = useState(null);



    const menu = () => {
        setShow(!show)
    }

    const onHoverIn = () => {
        setSelectColor('#5A5D5F')
    }

    const onHoverOut = () => {
        setSelectColor('')
    }

    
    return (
       <>
            {
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: screenSize.width < 700 ? 5 : 0 }} className={`navigation-bar ${isSticky ? 'sticky' : ''}`}>
            <div className={`sticky-header ${isScrolledDown ? 'show' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <>
                    {screenSize < 700 ? (
                         <div className={isSticky ? 'sticky-navbar navbar' : 'navbar'}>

                <div className="mobile-container">
                    
                    <MenuIcon
                        className="menu-icon"
                        onClick={toggleMenu}
                    />
                    {showMenu && (
                        <div className="mobile-menu">
                            <CloseIcon
                                className="close-icon"
                                onClick={toggleMenu}
                            />
                            {renderMenuItems()}
                        </div>
                    )}
                    <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                        <div
                            style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 40, border: '0.5px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 12 : 16, color: '#000', fontFamily: 'Gotham', cursor: 'pointer', backgroundColor: selectColor, marginRight: 20, borderRadius: 5, marginTop: screenSize.width < 700 ? 15 : 0 }}
                            onMouseEnter={onHoverIn}
                            onMouseLeave={onHoverOut}
                        onClick={() => window.location.href='https://guest.reservations.ng/BRICKSPOINTBOUTIQUEAPARTHOTELAS0/step1'}
                        >
                            BOOK NOW!
                        </div>
                       
                    </div>
                </div>
                        </div>
                    ) : (
                        <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around', marginTop: 0, alignItems: 'center' }}>
                            <div>
                                <img src={Logo} style={{ width: 300, height: 100, objectFit: 'contain' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', marginRight: 300 }}>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/')}>Home</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/rooms')}>Stay</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/menu')}>Dine</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }}>Events</div>
                                <div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/gallery')}>Gallery</div>
                                <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#000', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }}>About Us</div></Link>
                            </div>
                        </div>
                    )}
                    <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                        <div
                            style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 40, border: '0.5px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 12 : 16, color: '#000', fontFamily: 'Gotham', cursor: 'pointer', backgroundColor: selectColor, marginRight: 20, borderRadius: 5, marginTop: screenSize.width < 700 ? 15 : 0 }}
                            onMouseEnter={onHoverIn}
                            onMouseLeave={onHoverOut}
                        onClick={() => window.location.href='https://guest.reservations.ng/BRICKSPOINTBOUTIQUEAPARTHOTELAS0/step1'}
                        >
                            BOOK NOW!
                        </div>
                       
                    </div>
                </>
            </div>
            <>
            {screenSize < 700 ? (
                         <div className={'navbar'} style={{ backgroundColor: 'transparent' }}>

                <div className="mobile-container" style={{ backgroundColor: 'transparent' }}>
                   
                    <MenuIcon
                        className="MenuIcon"
                        color="#fff"
                        onClick={toggleMenu}
                    />
                    {showMenu && (
                        <div className="mobile-menu">
                            <CloseIcon
                                className="close-icon"
                                onClick={toggleMenu}
                            />
                            {renderMenuItems()}
                        </div>
                    )}
                    <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                        <div
                            style={{ width: screenSize.width < 700 ? 100 : 120, height: screenSize.width < 700 ? 20 : 25, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 9 : 10, color: '#fff', fontFamily: 'Gotham', cursor: 'pointer', backgroundColor: selectColor, marginRight: 10, borderRadius: 5, marginTop: screenSize.width < 700 ? 10 : 0 }}
                            onMouseEnter={onHoverIn}
                            onMouseLeave={onHoverOut}
                        onClick={() => window.location.href='https://guest.reservations.ng/BRICKSPOINTBOUTIQUEAPARTHOTELAS0/step1'}
                        >
                            BOOK NOW!
                        </div>
                       
                    </div>
                </div>
                        </div>
                    ):(
                        <><div style={{ width: '90%', display: 'flex', justifyContent: 'space-around', marginTop: 0, alignItems: 'center' }}>
                       
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/')}>Home</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/rooms')}>Stay</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/menu')}>Dine</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }}>Events</div>
                            <div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }} onClick={() => navigation('/gallery')}>Gallery</div>
                            <Link style={{textDecoration: 'none'}} smooth to="/aboutus"><div style={{ color: '#fff', cursor: 'pointer', fontFamily: 'FuturaLight', fontSize: 18 }}>About Us</div></Link>
                        </div>
                    </div>
                     <div style={{ display: 'flex' }}>
                    <div
                        style={{ width: screenSize.width < 700 ? 100 : 200, height: screenSize.width < 700 ? 20 : 80, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: screenSize.width < 700 ? 12 : 16, color: '#fff', fontFamily: 'FuturaLight', cursor: 'pointer', backgroundColor: selectColor, marginRight: screenSize.width < 700 ? 20 : 0, borderRadius: screenSize.width < 700 ? 5 : 0 }}
                        onMouseEnter={onHoverIn}
                        onMouseLeave={onHoverOut}
                        onClick={() => window.location.href='https://guest.reservations.ng/BRICKSPOINTBOUTIQUEAPARTHOTELAS0/step1'}
                    >
                        BOOK NOW!
                    </div>
                </div>
                    </>
                    )}
               
                
               
            </>
        </div>
                        

            }
        
        
        </>
    );
}
//https://guest.reservations.ng/BRICKSPOINTBOUTIQUEAPARTHOTELAS0/step1


export default Navbar;


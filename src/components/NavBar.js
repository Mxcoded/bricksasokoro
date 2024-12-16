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

    return (
        <div className={isSticky ? 'sticky-navbar navbar' : 'navbar'}>
            {screenSize < 700 ? (
                <div className="mobile-container">
                    <div>
                        <img src={Logo} alt="Logo" className="logo" />
                    </div>
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
                </div>
            ) : (
                <div className="desktop-container">
                    <img src={Logo} alt="Logo" className="logo" />
                    <div className="desktop-menu">
                        {renderMenuItems()}
                    </div>
                    <div
                        className="book-now"
                        onClick={() => navigate('/book')}
                    >
                        BOOK NOW!
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

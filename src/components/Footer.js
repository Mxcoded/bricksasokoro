import React, { useState, useEffect } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/images/logo2.png'

function Footer() {

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
    <div style={{ width: '100%', height: 800, backgroundColor: '#1C1C1A', display: 'flex', justifyContent: 'center' }}>
      {screenSize.width < 700 ? (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
              <img src={Logo} style={{ width: 400, height: 400, objectFit: 'contain' }} />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, color: '#fff' }}>ABOUT BRICKSPOINT</div>
              <div style={{ fontSize: 10, color: '#fff' }}>OUR DESTINATIONS</div>
              <div style={{ fontSize: 10, color: '#fff' }}>OFFERS</div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, color: '#fff' }}>GALLERY</div>
              <div style={{ fontSize: 10, color: '#fff' }}>MEETINGS & EVENTS</div>
              <div style={{ fontSize: 10, color: '#fff' }}>CONTACT</div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex' }}>
              <div><FacebookIcon style={{ fontSize: 40, color: '#fff' }} /></div>
              <div style={{ marginLeft: 10 }}><XIcon style={{ fontSize: 40, color: '#fff' }} /></div>
              <div style={{ marginLeft: 10 }}><InstagramIcon style={{ fontSize: 40, color: '#fff' }} /></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div>
            <img src={Logo} style={{ width: 400, height: 400, objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontSize: 17, color: '#fff', fontFamily: 'GothamLight' }}>08099999627</div>
            <div style={{ height: 30, width: 0.5, backgroundColor: '#fff', marginLeft: 20 }}></div>
            <div style={{ fontSize: 17, color: '#fff', fontFamily: 'GothamLight', marginLeft: 20 }}>No 24 Jose Martins Street, Asokoro Abuja.</div>
            <div style={{ height: 30, width: 0.5, backgroundColor: '#fff', marginLeft: 20 }}></div>
            <div style={{ fontSize: 17, color: '#fff', fontFamily: 'GothamLight', marginLeft: 20 }}>rsv@brickspoint.com</div>
          </div>
          <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: 30 }}>
            <div style={{ fontSize: 17, color: '#fff', fontFamily: 'GothamLight' }}>PRIVACY POLICY</div>
            <div style={{ fontSize: 17, color: '#fff', fontFamily: 'GothamLight' }}>TERMS & CONDITIONS</div>
          </div>
          <div style={{ width: '100%', height: 0.5, backgroundColor: '#fff', marginTop: 150 }}></div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <div style={{ width: 80, height: 80, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FacebookIcon style={{ fontSize: 30, color: '#fff' }} />
            </div>
            <div style={{ width: 80, height: 80, border: '0.5px solid #fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <InstagramIcon style={{ fontSize: 30, color: '#fff' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer
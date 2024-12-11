import React from 'react'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import OurHotels from '../components/OurHotels'
import HotelsFacilities from '../components/HotelsFacilities'
import Rooms from '../components/Rooms'
import Footer from '../components/Footer'

function MainScreen() {
    return (
        <div style={{ width: '100%' }}>
            <Banner />
            <AboutUs />
            <OurHotels />
            <HotelsFacilities />
            <Rooms />
            <Footer />
        </div>
    )
}

export default MainScreen
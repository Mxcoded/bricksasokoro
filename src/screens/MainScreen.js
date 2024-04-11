import React from 'react'
import Banner from '../components/Banner'
import MiniBooking from '../components/MiniBooking'
import AboutUs from '../components/AboutUs'
import OurHotels from '../components/OurHotels'
import HotelsFacilities from '../components/HotelsFacilities'
import HotelView from '../components/HotelView'
import Amenities from '../components/Amenities'
import Rooms from '../components/Rooms'
import Footer from '../components/Footer'

function MainScreen() {
    return (
        <div style={{ width: '100%' }}>
            <Banner />
            {/* <MiniBooking /> */}
            <AboutUs />
            <OurHotels />
            <HotelsFacilities />
            <Rooms />
            {/* <HotelView /> */}
            {/* <Amenities /> */}
            <Footer />
        </div>
    )
}

export default MainScreen
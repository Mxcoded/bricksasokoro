import React, { useState, useEffect } from 'react'
import Spa from '../assets/images/spa.png'
import Gym from '../assets/images/gym.png'
import Fitness from '../assets/images/fitness.png'
import Beauty from '../assets/images/beautysalon.png'
import Wifi from '../assets/images/wifi.png'
import Restaurant from '../assets/images/restaurant.png'
import RoomService from '../assets/images/roomservice.png'
import Pool from '../assets/images/pool.png'
import Key from '../assets/images/key.png'
import Calender from '../assets/images/calender.png'
import Business from '../assets/images/business.png'
import Laundry from '../assets/images/laundry.png'
import Concierge from '../assets/images/conciergy.png'
import Meeting from '../assets/images/office.png'

function Amenities() {

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

    const renderFacility = (text, icon) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35%', height: 200, margin: '10px', justifyContent: 'center' }}>
            <div>
                <img src={icon} alt={text} style={{ width: 80, height: 80, objectFit: 'contain' }} />
            </div>
            <div style={{ fontSize: 16, textAlign: 'center', marginTop: 10 }}>{text}</div>
        </div>
    );

    return (
        <div style={{ width: '100%', height: 'auto', backgroundColor: '#eee' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, paddingTop: 30 }}>
                Facilities
            </div>

            {screenSize.width < 700 ? (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '5%', marginBottom: '5%', flexWrap: 'wrap' }}>
                    {renderFacility("Free Internet Access", Wifi)}
                    {renderFacility("Restaurant On-Site", Restaurant)}
                    {renderFacility("Room Service", RoomService)}
                    {renderFacility("Fitness", Fitness)}
                    {renderFacility("Pool", Pool)}
                    {renderFacility("Spa", Spa)}
                    {renderFacility("Digital Key", Key)}
                    {renderFacility("Digital Check-In", Calender)}
                    {renderFacility("Business Services", Business)}
                    {renderFacility("Laundry", Laundry)}
                    {renderFacility("Concierge", Concierge)}
                    {renderFacility("Meeting Facilities", Meeting)}
                </div>
            ) : (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '5%', marginBottom: '5%', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Wifi} style={{ width: 80, height: 80, objectFit: 'contain' }} alt="Free Internet Access" />
                        </div>
                        <div style={{ fontSize: 20 }}>Free Internet Access</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Restaurant} style={{ width: 80, height: 80, objectFit: 'contain' }} alt="Restaurant On-Site" />
                        </div>
                        <div style={{ fontSize: 20 }}>Restaurant On-Site</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={RoomService} style={{ width: 80, height: 80, objectFit: 'contain' }} alt="Room Service" />
                        </div>
                        <div style={{ fontSize: 20 }}>Room Service</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Fitness} style={{ width: 80, height: 80, objectFit: 'contain' }} alt="Fitness" />
                        </div>
                        <div style={{ fontSize: 20 }}>Fitness</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Pool} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Pool</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Spa} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Spa</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Key} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Digital Key</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Calender} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Digital Check-In</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Business} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Business Services</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Laundry} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Laundry</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Concierge} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20, }}>Concierge</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', height: 200 }}>
                        <div>
                            <img src={Meeting} style={{ width: 80, height: 80, objectFit: 'contain' }} />
                        </div>
                        <div style={{ fontSize: 20 }}>Meeting Facilities</div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Amenities
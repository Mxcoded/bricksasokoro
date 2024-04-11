import React from 'react'
import Wuse from '../assets/images/wuse.jpg'
import Asokoro from '../assets/images/asokoro.jpg'
import Yobe from '../assets/images/yobe.jpg'
import View1 from '../assets/images/view1.png'
import View2 from '../assets/images/view2.png'
import View3 from '../assets/images/view3.jpg'
import View4 from '../assets/images/view4.jpg'
import View5 from '../assets/images/view5.jpg'
import View6 from '../assets/images/view6.jpg'
import View7 from '../assets/images/view7.jpg'
import View8 from '../assets/images/view8.jpg'
import { data } from './HotelImages'

function HotelView() {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, marginTop: 50 }}>
                Hotels View
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                Discover our hotels at a quick glance.
            </div>

            {/* <div className="mosaic-container" style={{marginTop: 50}}>
                {data.map((image, index) => (
                    <div key={index} className="mosaic-item">
                        <img src={image.image} alt={`Image ${index + 1}`} className="mosaic-image" />
                    </div>
                ))}
            </div> */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {data.map((image, index) => (
                    <div key={index} style={{ width: '30%', margin: '10px', overflow: 'hidden', cursor: 'pointer' }}>
                        <img
                            src={image.image}
                            //alt={image.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                ))}
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginTop: 50, marginBottom: 50, cursor: 'pointer' }}>
                View more
            </div>
        </div>
    )
}

export default HotelView
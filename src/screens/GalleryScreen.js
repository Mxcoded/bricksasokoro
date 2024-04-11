import React from 'react'
import NavBar from '../components/NavBar'
import { data } from '../components/HotelImages'

function GalleryScreen() {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '100%', height: 100, backgroundColor: '#585465' }}>
                <NavBar />
            </div>
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
        </div>
    )
}

export default GalleryScreen
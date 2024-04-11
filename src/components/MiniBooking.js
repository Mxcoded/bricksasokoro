import React, { useState, useEffect } from 'react'

function MiniBooking() {

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
        <div style={{ width: '100%', height: screenSize.width < 700 ? 50 : 100, backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {screenSize.width < 700 ? (
                <></>
            ) : (
                <div style={{ width: '70%', display: 'flex', justifyContent: 'space-around' }}>

                    <div>
                        <input type='date' style={{ width: 150, height: 40, backgroundColor: '#ccc', borderRadius: 10, border: '1px solid #ccc', color: '#545454', fontSize: 14, paddingLeft: 5 }} />
                    </div>

                    <div>
                        <input type='date' style={{ width: 150, height: 40, backgroundColor: '#ccc', borderRadius: 10, border: '1px solid #ccc', color: '#545454', fontSize: 14, paddingLeft: 5 }} />
                    </div>

                    <div style={{ width: 150, height: 40, backgroundColor: '#ccc', borderRadius: 10, border: '1px solid #ccc', color: '#545454', fontSize: 14, paddingLeft: 5 }}>

                    </div>

                    <div>
                        <input type='text' placeholder='Promocode' style={{ width: 200, height: 40, backgroundColor: '#ccc', borderRadius: 10, border: '1px solid #ccc', color: '#545454', fontSize: 14, paddingLeft: 5 }} />
                    </div>

                    <div style={{ width: 200, height: 40, backgroundColor: '#ccc', borderRadius: 10, border: '1px solid #5A6EA9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Book Now
                    </div>
                </div>
            )}
        </div>
    )
}

export default MiniBooking
import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Calendar({ month }) {
    const weekdays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const renderCalendar = () => {
        const currentMonth = new Date(month);
        const year = currentMonth.getFullYear();
        const monthIndex = currentMonth.getMonth();
        const totalDays = daysInMonth(year, monthIndex);
        const firstDay = new Date(year, monthIndex, 1).getDay();
        const calendar = [];

        // Fill in the days before the current month
        for (let i = 0; i < firstDay; i++) {
            calendar.push(<div key={`empty-${i}`} className="empty"></div>);
        }

        // Fill in the days of the current month
        for (let day = 1; day <= totalDays; day++) {
            calendar.push(
                <div key={day} className="day" style={{ fontSize: 12, fontFamily: 'GothamLight' }}>
                    {day}
                </div>
            );
        }

        return calendar;
    };

    return (
        <div className="calendar">
            <div className="header">
                <div className="title">
                    {months[month.getMonth()]} {month.getFullYear()}
                </div>
            </div>
            <div className="weekdays" style={{ display: 'flex', flexWrap: 'wrap', marginTop: 15 }}>
                {weekdays.map((day, index) => (
                    <div key={index} className="weekday" style={{ fontSize: 14, fontFamily: 'Gotham' }}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="days" style={{ marginTop: 20 }}>
                {renderCalendar()}
            </div>
        </div>
    );
}

function BookRoomsScreen() {

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        const prevMonth = new Date(currentMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setCurrentMonth(prevMonth);
    };

    const nextMonth = () => {
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setCurrentMonth(nextMonth);
    };

    function Room() {
        return (
            <div style={{ width: '430px', height: '80px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                <div style={{ marginLeft: '10px' }}>
                    <div style={{ fontSize: '14px', fontFamily: 'Gotham' }}>Guests</div>
                    <div style={{ fontSize: '16px', fontFamily: 'GothamLight' }}>2 Adults</div>
                </div>
                <div style={{ marginRight: '10px' }}>
                    <KeyboardArrowDownIcon style={{ fontSize: 20, color: '#5A5D5F' }} />
                </div>
            </div>
        );
    }

    const [rooms, setRooms] = useState([<Room key={0} />]);

    const addRoom = () => {
        const newRooms = [...rooms, <Room key={rooms.length} />];
        setRooms(newRooms);
    };

    const removeRoom = (index) => {
        const newRooms = rooms.filter((room, i) => i !== index);
        setRooms(newRooms);
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#ccc' }}>
            <div style={{ width: '#ccc', minHeight: 1000, marginBottom: 50 }}>
                <NavBar />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ marginBottom: 5, fontSize: 16, fontFamily: 'Gotham', color: '#5A5D5F' }}>1. Plan your stay</div>
                        <div style={{ width: 250, height: 3, backgroundColor: '#5A5D5F' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 15 }}>
                        <div style={{ marginBottom: 5, fontSize: 16, fontFamily: 'Gotham', color: '#fff' }}>2. Room Selection</div>
                        <div style={{ width: 250, height: 3, backgroundColor: '#fff' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 15 }}>
                        <div style={{ marginBottom: 5, fontSize: 16, fontFamily: 'Gotham', color: '#fff' }}>3. Billing Information</div>
                        <div style={{ width: 250, height: 3, backgroundColor: '#fff' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 15 }}>
                        <div style={{ marginBottom: 5, fontSize: 16, fontFamily: 'Gotham', color: '#fff' }}>4. Confirm</div>
                        <div style={{ width: 250, height: 3, backgroundColor: '#fff' }}></div>
                    </div>
                </div>

                <div style={{ width: '100%', display: 'flex', marginTop: 80, justifyContent: 'center' }}>
                    <div>
                        <div>
                            <div style={{ fontSize: 16, fontFamily: 'BrownSugar' }}>Select Dates</div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                                <div style={{ display: 'flex' }}>
                                    <label style={{ width: 200, height: 80, backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                                        <div>
                                            <div style={{ fontSize: 12, fontFamily: 'Gotham' }}>ARRIVAL DATE</div>
                                            <div style={{ fontSize: 16, fontFamily: 'BrownSugar' }}>20 March 2024</div>
                                        </div>
                                        <div>
                                            <CalendarMonthIcon style={{ fontSize: 25, color: '#5A5D5F' }} />
                                        </div>
                                    </label>
                                    <label style={{ width: 200, height: 80, backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginLeft: 20, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                                        <div>
                                            <div style={{ fontSize: 12, fontFamily: 'Gotham' }}>DEPARTURE DATE</div>
                                            <div style={{ fontSize: 16, fontFamily: 'BrownSugar' }}>22 March 2024</div>
                                        </div>
                                        <div>
                                            <CalendarMonthIcon style={{ fontSize: 25, color: '#5A5D5F' }} />
                                        </div>
                                    </label>
                                </div>
                                <div style={{ width: 450, height: 1, backgroundColor: '#5A5D5F', marginTop: 20 }}></div>
                            </div>
                            <div></div>
                        </div>
                        {/* <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', width: 400, justifyContent: 'space-between' }}>
                                <div style={{ fontSize: 16, fontFamily: 'BrownSugar' }}>Select Room 1</div>
                                <div style={{ fontSize: 16, fontFamily: 'Gotham' }}>Remove</div>
                            </div>
                            <div style={{ width: 430, height: 80, backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                                <div style={{ marginLeft: 10 }}>
                                    <div style={{ fontSize: 14, fontFamily: 'Gotham' }}>Guests</div>
                                    <div style={{ fontSize: 16, fontFamily: 'GothamLight' }}>2 Adults</div>
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <KeyboardArrowDownIcon style={{ fontSize: 20, color: '#5A5D5F' }} />
                                </div>
                            </div>
                            <div style={{ fontSize: 14, fontFamily: 'Gotham', marginTop: 30 }}>+ ADD ROOMS</div>
                        </div> */}
                        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            {rooms.map((room, index) => (
                                <div key={index} style={{marginTop: 20}}>
                                    <div style={{ display: 'flex', alignItems: 'center', width: '400px', justifyContent: 'space-between' }}>
                                        <div style={{ fontSize: '16px', fontFamily: 'BrownSugar' }}>Select Room {index + 1}</div>
                                        <div style={{ fontSize: '16px', fontFamily: 'Gotham', cursor: 'pointer' }} onClick={() => removeRoom(index)}>Remove</div>
                                    </div>
                                    {room}
                                </div>
                            ))}
                            <div style={{ fontSize: '14px', fontFamily: 'Gotham', marginTop: '30px', cursor: 'pointer' }} onClick={addRoom}>+ ADD ROOMS</div>
                        </div>
                        <div style={{ marginTop: 50, marginLeft: 10, width: 430, height: 80, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                            <div style={{ fontSize: 16, fontFamily: 'Gotham', marginLeft: 10 }}>Travel Agency</div>
                            <input style={{ width: '100%' }} className='custom-date-input' />
                        </div>
                        <div style={{ marginTop: 20, marginLeft: 10, width: 430, height: 80, backgroundColor: '#fff', display: 'flex', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)' }}>
                            <div style={{ fontSize: 16, fontFamily: 'Gotham', marginLeft: 10 }}>Enter Promo Code Here</div>
                            <input style={{ width: '100%' }} className='custom-date-input' />
                        </div>
                    </div>
                    <div style={{ marginLeft: 70 }}>
                        <div style={{ width: 700, height: 350, backgroundColor: '#fff', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)' }}>
                            <div className="container" style={{ display: 'flex', width: '100%', height: '100%' }}>
                                <div className="left" style={{ display: 'flex', width: '50%', height: '100%' }}>
                                    <div onClick={prevMonth} style={{ width: 25, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <KeyboardArrowLeftIcon style={{ fontSize: 16, color: '#000' }} />
                                    </div>
                                    <div>
                                        <Calendar month={new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)} />
                                    </div>
                                </div>
                                <div className="right" style={{ display: 'flex', width: '50%', height: '100%', border: '1px solid #ccc', borderRightWidth: 0, borderTopWidth: 0, borderBottomWidth: 0 }}>
                                    <div>
                                        <Calendar month={currentMonth} />
                                    </div>
                                    <div onClick={nextMonth} style={{ width: 25, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <KeyboardArrowRightIcon style={{ fontSize: 16, color: '#000' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookRoomsScreen
import React, { useRef, useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Down from '../assets/images/hotelimage/down.png'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function BookScreen() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDate1, setSelectedDate1] = useState(new Date());

    const optionRef = useRef(null)
    const navigation = useNavigate()

    const handleRef = () => {
        if (optionRef.current) {
            optionRef.current.click()
        }
    }

    const handleChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange1 = (date) => {
        setSelectedDate1(date);
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const formatDate1 = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: '#ccc', position: 'relative' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 50, fontFamily: 'BrownSugar', paddingTop: 40 }}>
                Select Date
            </div>
            <div style={{width: 60, height: 60, border: '0.5px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 40, right: 40, cursor: 'pointer'}} onClick={() => navigation('/')}>
               <CloseIcon style={{fontSize: 18, color: '#000'}} />
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ width: 0.5, height: 105, backgroundColor: '#000' }}></div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 90 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontSize: 14, fontFamily: 'GothamLight' }}>ARRIVAL DATE</div>
                        <label htmlFor='theid' style={{ fontSize: 25, fontFamily: 'BrownSugar', cursor: 'pointer' }}>{formatDate(selectedDate)}</label>
                        <div className="date-input-wrapper" style={{ cursor: 'pointer' }}>
                            <DatePicker selected={selectedDate}
                                onChange={handleChange}
                                className='custom-date-input off-screen'
                                id='theid'
                            />
                        </div>
                    </div>
                    <label htmlFor='theid' style={{ marginLeft: 45 }}>
                        <img src={Down} style={{ width: 30, height: 30 }} />
                    </label>
                </div>

                <div style={{ width: 0.5, height: 105, backgroundColor: '#000', marginLeft: 45 }}></div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 90, cursor: 'pointer' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontSize: 14, fontFamily: 'GothamLight' }}>DEPARTURE DATE</div>
                        <label htmlFor='theid1' style={{ fontSize: 25, fontFamily: 'BrownSugar', cursor: 'pointer' }}>{formatDate1(selectedDate1)}</label>
                        <div className="date-input-wrapper" style={{ cursor: 'pointer' }}>
                            <DatePicker selected={selectedDate1}
                                onChange={handleChange1}
                                className='custom-date-input off-screen'
                                id='theid1'
                            />
                        </div>
                    </div>
                    <label htmlFor='theid1' style={{ marginLeft: 45 }}>
                        <img src={Down} style={{ width: 30, height: 30 }} />
                    </label>
                </div>

                <div style={{ width: 0.5, height: 105, backgroundColor: '#000', marginLeft: 45 }}></div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>ADULTS</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <select ref={optionRef} id='option' style={{ fontSize: 25, fontFamily: 'BrownSugar', }} className='custom-date-input'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <label style={{ marginLeft: 150 }}>
                            <img src={Down} style={{ width: 30, height: 30 }} />
                        </label>
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>CHILDREN (12-17 years)</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <select ref={optionRef} id='option' style={{ fontSize: 25, fontFamily: 'BrownSugar', }} className='custom-date-input'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <label style={{ marginLeft: 150 }}>
                            <img src={Down} style={{ width: 30, height: 30 }} />
                        </label>
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>CHILDREN (4-11 years)</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <select ref={optionRef} id='option' style={{ fontSize: 25, fontFamily: 'BrownSugar', }} className='custom-date-input'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <label style={{ marginLeft: 150 }}>
                            <img src={Down} style={{ width: 30, height: 30 }} />
                        </label>
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>INFANTS (0-3 years)</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <select ref={optionRef} id='option' style={{ fontSize: 25, fontFamily: 'BrownSugar', }} className='custom-date-input'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <label style={{ marginLeft: 150 }}>
                            <img src={Down} style={{ width: 30, height: 30 }} />
                        </label>
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>PROMO CODE</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <input ref={optionRef} id='option' style={{ fontSize: 20, width: 380 }} className='custom-date-input' />
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
                <div style={{ position: 'relative', width: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <div style={{ fontSize: 13, fontFamily: 'GothamLight', marginBottom: 80 }}>TRAVEL AGENCY – IATA</div>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: 0 }}>
                        <input ref={optionRef} id='option' style={{ fontSize: 20, width: 380 }} className='custom-date-input' />
                    </div>
                    <div style={{ width: 380, height: 0.5, backgroundColor: '#000', marginTop: -20 }}></div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20, cursor: 'pointer' }} onClick={() => navigation('/bookrooms')}>
                <div style={{ fontSize: 16, fontFamily: 'GothamLight', marginRight: 500 }}>BOOK MULTIPLE ROOMS +</div>
            </div>

            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <div style={{ width: 180, height: 80, border: '0.5px solid #000', borderTopWidth: 0, borderLeftWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 14, fontFamily: 'Gotham', color: '#000', cursor: 'pointer' }}>
                    CHECK RATES
                </div>
            </div>
        </div>
    )
}

export default BookScreen
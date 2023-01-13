import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content lg:w-auto w-[100vw] flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div className='lg:mr-6 lg:w-full '>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='mx-auto'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
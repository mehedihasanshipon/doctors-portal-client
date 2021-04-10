import React, { useState } from 'react';
import NavBar from '../../Home/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    // console.log(selectedDate);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar />
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment selectedDate={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appointment;
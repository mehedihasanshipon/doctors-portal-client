import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService.js/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div className="">
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonial />
            <Blogs />
            <Doctors />
        </div>
    );
};

export default Home;
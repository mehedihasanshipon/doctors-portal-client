import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarkerAlt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const InfoData = [
    {
        title:'Opening Hours',
        description: 'Lorem, ipsum dolor sit amet consectetur. ',
        icon: faClock,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description: 'Brooklyn,NY 100678',
        icon: faMapMarkerAlt,
        background:'dark'
    },
    {
        title:'Contact Us now',
        description: '+88009568287',
        icon: faPhoneAlt,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center ">
            <div className="row w-75">
                {
                InfoData.map(info => <InfoCard info={info} /> ) 
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
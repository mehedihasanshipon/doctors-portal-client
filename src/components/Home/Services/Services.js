import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import './Services.css';
import Flouride from '../../../images/Fluoride.png';
import Cravity from '../../../images/Cravity.png';
import Teath from '../../../images/Teath.png';

const serviceData = [
    {
        name:'Fluoride Treatment',
        img: Flouride
    },
    {
        name:'Cavity Feeling',
        img:Cravity
    },
    {
        name:'Teath Whitening',
        img:Teath
    }
]

const Services = () => {
  return (
    <section className="mt-5 service-container">
      <div className="text-center pt-5">
        <h5>OUR SERVICES</h5>
        <h2>SERVICES WE PROVIDE</h2>
      </div>

      <div className="d-flex justify-content-center ">
            <div className="row w-75">
                {
                serviceData.map(service => <ServiceDetail service={service} /> ) 
                }
            </div>
        </div>
    </section>
  );
};

export default Services;

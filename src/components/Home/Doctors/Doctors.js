import React from "react";
import Doctor from "../Doctor/Doctor";
import doctorImg from '../../../images/doctor.png'
import './Doctors.css'

const doctorData =[
    {
        doctorImg:doctorImg,
        doctorName: 'Dr. Caudi',
        phone: '+880765567'
    },
    {
        doctorImg:doctorImg,
        doctorName: 'Dr. Caudi',
        phone: '+880765567'
    },
    {
        doctorImg:doctorImg,
        doctorName: 'Dr. Caudi',
        phone: '+880765567'
    }
]

const Doctors = () => {
  return (
    <section className="container  mt-5">
      <div className="text-center">
        <h3 style={{color:'#11D0DD'}}>Our Doctors</h3>
      </div>
      <div className="row">
          {
              doctorData.map(doctor => <Doctor doctor={doctor} />)
          }
      </div>
    </section>
  );
};

export default Doctors;

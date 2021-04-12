import React, { useEffect, useState } from "react";
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
  const [doctors,setDoctors] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3002/doctors')
    .then(res=>res.json())
    .then(data=>{
      setDoctors(data);
    })
  },[])
  return (
    <section className="container  mt-5">
      <div className="text-center">
        <h3 style={{color:'#11D0DD'}}>Our Doctors</h3>
      </div>
      <div className="row">
          {
              doctors.map(doctor => <Doctor doctor={doctor} />)
          }
      </div>
    </section>
  );
};

export default Doctors;

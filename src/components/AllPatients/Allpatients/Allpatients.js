import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SideBar from '../../Appointment/SideBar/SideBar';
import AppointmntList from '../../Dashboard/AppointmentList/AppointmntList';

const Allpatients = () => {
    const [patients,setPatients] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3002/allAppointments')
        .then(res=> res.json())
        .then(data=> setPatients(data))
    },[])
    return (
        <div className="row">
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className="col-md-10">
                <h5>Patients</h5>
                <div className="m-5 p-5 shadow rounded">
                    <h6>Patients</h6>
                    <AppointmntList appointments={patients} />
                </div>
            </div>
        </div>
    );
};

export default Allpatients;
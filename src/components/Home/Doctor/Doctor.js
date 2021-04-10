import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 g-0 text-center">
            <img className="img-fluid" src={doctor.doctorImg} alt=""/>
            <h5> {doctor.doctorName} </h5>
            <p>  <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.phone} </p>
        </div>
    );
};

export default Doctor;
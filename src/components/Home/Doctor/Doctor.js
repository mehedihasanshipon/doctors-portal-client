import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    console.log(doctor);
    return (
        <div className="col-md-4 g-0 text-center">
            {/* <img className="img-fluid" src={doctor.img} alt=""/> */}
            <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} />
            <h5> {doctor.name} </h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> {doctor.email} </p>
        </div>
    );
};

export default Doctor;
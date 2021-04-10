import React from 'react';


const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5 pt-5">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h6 className="my-3">{service.name}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, quisquam.</p>
        </div>
    );
};

export default ServiceDetail;
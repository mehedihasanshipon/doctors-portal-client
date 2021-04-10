import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({testimonial}) => {
    console.log(testimonial);
    return (
        <div className="col-md-4">
            <div className="testi-card my-5 py-5">
                <p className="text-center">{testimonial.quote}</p>
                <div className="d-flex align-items-center justify-content-center py-5">
                    <div className="mx-4">
                        <img  src={testimonial.img} alt=""/>
                    </div>
                    <div>
                        <h6>{testimonial.name}</h6>
                        <p>{testimonial.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
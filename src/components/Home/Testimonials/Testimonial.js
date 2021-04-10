import React from "react";
import './Testimonial.css';
import wilson from '../../../images/Harry.png'
import ema from '../../../images/Ema.png'
import aliza from '../../../images/Aliza.png'
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonial = () => {
  return (
    <section className="testimonials my-5  py-5">
      <div className="container">
        <div className="section-header ">
          <h5 className="text-primary text-uppercase">Testimonials</h5>
          <h1>
            What Our Patients <br /> Says{" "}
          </h1>
        </div>
        <div className="row mt-4">
            {
                testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} />)
            }
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

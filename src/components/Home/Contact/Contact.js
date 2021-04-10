import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact my-5">
      <div className="container">
        <div className="text-center py-5">
          <h4 style={{ color: "#10CFE7" }}>Contact Us</h4>
          <h2 className="text-white">Always connect with us</h2>
        </div>
        <div className="row ">
          <div className="col-md-9 my-5 mx-auto">
            <form action="">
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Email address"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <textarea className="form-control mb-3" rows="4" cols="50" name="comment" form="usrform" placeholder="Comment">
               
              </textarea>
              <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

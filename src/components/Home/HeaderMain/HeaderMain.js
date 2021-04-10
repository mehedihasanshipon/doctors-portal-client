import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{height:'600px'}} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
          <h1 style={{color:'#203047'}}>Your new smile <br/> start here</h1>
          <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla animi dolorum sunt, eius unde aperiam.</p>
          <button className="btn ">GET APPOINMENT  </button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;

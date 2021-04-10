import React from "react";
import feautured from "../../../images/Featured.png";

const FeaturedService = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-5 mb-4 m-md-0 g-0">
          <img style={{height:"500px"}} className="img-fluid" src={feautured} alt="" />
        </div>
        <div className="col-md-7 g-0 align-self-center">
          <h1>Exceptional Dental Care, on your Term</h1>
          <p className="text-secondary my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa
            distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos
            repellendus expedita. Obcaecati minima, reiciendis optio aspernatur
            autem pariatur soluta illum velit, eligendi dolorem consequuntur
            sapiente rerum accusamus aut nulla praesentium! Neque autem animi,
            voluptatem magnam nesciunt officia nemo nam, delectus minima velit
            beatae iste praesentium ad repudiandae, similique excepturi
            sapiente.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;

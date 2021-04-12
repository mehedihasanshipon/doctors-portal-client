import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, subject,selectedDate }) => {
  console.log(selectedDate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
      data.service = subject;
      data.date = selectedDate;
      data.createdAt = new Date();

      fetch('http://localhost:3002/addAppointment',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(result => {
        if(result){
          closeModal();
          alert("Appointment added successfully")
        }
      })

    
  };

  return (
    <div >
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-center mb-3 header-form">
          <h2 style={{ color: "#10CFE8" }} className="text-center w-100">
            {subject}
          </h2>
          <button className="flex-shrink-1 close" onClick={closeModal}>
           
          </button>
         
        </div>
        <p className="text-center"><small>{selectedDate.toDateString()}</small></p>
        
        <form className="p-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              className="form-control"
              name="name"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>

            <div className="col-md-4">
            <input
                className="form-control"
                name="weight" placeholder="Weight" type="number"
                {...register("weight", { required: true })}
              />
              {errors.weight && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <input className="btn btn-info text-white align-self-end" type="submit" />
          </div>
         
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;

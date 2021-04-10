import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = (props) => {
  const { subject, visitingHour, totalSpace } = props.booking;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 text-center g-3">
      <div className="bookCard p-4">
        <h4 style={{ color: "#10CFE8" }}>{subject}</h4>
        <h6>{visitingHour}</h6>
        <p className="text-secondary"> {totalSpace} space available </p>
        <button onClick={openModal} className="book-btn">
          Book appointment
        </button>
        <AppointmentForm subject={subject} modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default BookingCard;

import React from "react";
import AppointmntList from "../AppointmentList/AppointmntList";
import "./AppointmentByDate.css";

const AppointmentByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div className="mt-5 me-5 shadow p-4">
      <h4>Appointments({appointments.length}) </h4>
      {
        appointments.length?
        <AppointmntList appointments={appointments} />
        :<h4 className="text-center">"No patient available"</h4>
      }
    </div>
  );
};

export default AppointmentByDate;

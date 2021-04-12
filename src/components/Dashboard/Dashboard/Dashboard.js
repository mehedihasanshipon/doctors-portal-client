import React, { useEffect, useState } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SideBar from "../../Appointment/SideBar/SideBar";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Dashboard = () => {

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  // console.log(selectedDate);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:3002/appointments", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ date: selectedDate,email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);

  return (
    <div style={containerStyle} className=" row">
      <div className="col-md-2">
        <SideBar />
      </div>
      <div className="col-md-5 d-flex flex-column">
          <h2>Appointments</h2>
        <div className="align-self-start shadow mt-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>
      <div className="col-md-5">
        <AppointmentByDate appointments={appointments} />
      </div>
    </div>
  );
};

export default Dashboard;

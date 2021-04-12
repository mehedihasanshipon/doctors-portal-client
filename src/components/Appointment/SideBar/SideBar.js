import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useEffect } from "react";
import { useState } from "react";
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const SideBar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const [doctor,setIsDoctor] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:3002/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
  })
      .then(res => res.json())
      .then(data => setIsDoctor(data));
}, [])
  
  return (
    <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white link">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/appointment" className="text-white link">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="text-white link">
            <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
          </Link>
        </li>
        <li>
          <Link className="text-white link">
            {/* <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span> */}
          </Link>
        </li>
        {
          doctor && <li>
          <Link className="text-white link">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
          </Link>
        </li>
        }
        <li>
          <Link className="text-white link">
            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white link">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

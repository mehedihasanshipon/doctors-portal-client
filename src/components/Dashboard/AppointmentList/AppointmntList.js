import React from "react";

const AppointmntList = ({ appointments }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Service</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((app, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{app.name}</td>
            <td>{app.phone}</td>
            <td>{app.service}</td>
            <td>{app.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmntList;

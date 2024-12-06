import React, { useState, useEffect } from 'react';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const URL = 'https://barbershop-backend-rust.vercel.app';

    fetch(`${URL}/appointments`)
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div className="appointment-list-container">
      <h1 className="appointments-header">Appointments</h1>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;

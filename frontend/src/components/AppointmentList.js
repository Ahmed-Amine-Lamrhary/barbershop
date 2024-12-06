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
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.name} - {appointment.date} at {appointment.time} - {appointment.service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;

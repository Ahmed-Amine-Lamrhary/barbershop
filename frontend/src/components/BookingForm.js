import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState('');
    const [service, setService] = useState('Haircut');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !date || !time || !service) {
            setError('Please fill out all fields.');
            return;
        }

        const d = new Date(date);

        const appointmentData = {
            name,
            date: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(),
            time,
            service,
        };

        try {
            const URL = 'https://barbershop-backend-rust.vercel.app';

            const response = await fetch(`${URL}/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
            });

            const { success, message, data } = await response.json();

            if (!success) {
                throw new Error(message);
            }

            alert(`Appointment booked successfully!`);

            setName('');
            setDate(null);
            setTime('');
            setService('Haircut');
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="booking-form">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label>Date:</label>
                    <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        placeholderText="Select a date"
                        required
                    />
                </div>

                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Service:</label>
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="Haircut">Haircut</option>
                        <option value="Shave">Shave</option>
                        <option value="Haircut & Shave">Haircut & Shave</option>
                    </select>
                </div>

                <button className='btn' type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookingForm;

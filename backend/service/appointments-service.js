const moment = require('moment');
const isWithinWorkingHours = require('../helpers/isWithinWorkingHours');
const { getAppointments, addAppointment } = require('../db');
const { where } = require('firebase/firestore');

async function bookAppointment(name, date, time, service) {
    const appointmentDateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");

    if (!name || !date || !time || !service) {
        return {
            success: false,
            message: 'Missing required fields: name, date, time, or service.'
        }
    }

    if (!appointmentDateTime.isValid() || appointmentDateTime.isBefore(moment())) {
        return {
            success: false,
            message: 'Invalid or past date/time.'
        }
    }

    if (!isWithinWorkingHours(time)) {
        return {
            success: false,
            message: 'Appointment time must be within working hours (9:00 AM - 7:00 PM).'
        }
    }

    const snapshot = await getAppointments(where('date', '==', date), where('time', '==', time));

    if (!snapshot.empty) return {
        success: false,
        message: 'The selected time slot is already booked.'
    }

    const appointment = { name, date, time, service, createdAt: new Date() };
    const docRef = await addAppointment(appointment);

    return {
        success: true,
        message: 'Appointment was booked successfully',
        data: { id: docRef.id, ...appointment }
    }
}

module.exports = {
    bookAppointment
}
const moment = require('moment');

const isWithinWorkingHours = (time) => {
    const start = moment("09:00", "HH:mm");
    const end = moment("19:00", "HH:mm");
    const appointmentTime = moment(time, "HH:mm");
    return appointmentTime.isBetween(start, end, null, "[)");
};

module.exports = isWithinWorkingHours;

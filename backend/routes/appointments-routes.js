const router = require('express').Router();
const { bookAppointment, getAllAppointments } = require('../service/appointments-service');

router.post('/', async (req, res) => {
    const { name, date, time, service } = req.body;

    try {
        const { success, message, data } = await bookAppointment(name, date, time, service);

        const status = success ? 201 : 400;

        return res.status(status).send({
            success,
            message: message,
            data
        });
    } catch (error) {
        res.status(500).send('Error creating appointment: ' + error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const snapshot = await getAllAppointments();

        const appointments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).send('Error fetching appointments: ' + error.message);
    }
});

module.exports = router;

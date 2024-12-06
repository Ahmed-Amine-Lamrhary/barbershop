const router = require('express').Router();
const { bookAppointment } = require('../service/appointments-service');

router.post('/', async (req, res) => {
    const { name, date, time, service } = req.body;

    try {
        const { success, message } = await bookAppointment(name, date, time, service);

        const status = success ? 201 : 400;

        return res.status(status).send({
            success,
            message: message
        });
    } catch (error) {
        res.status(500).send('Error creating appointment: ' + error.message);
    }
});

module.exports = router;

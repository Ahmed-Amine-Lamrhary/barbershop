const express = require('express');
const app = express();
const cors = require('cors');
const appointmentsRouter = require('./routes/appointments-routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Firebase with Express is working!');
});

app.use('/appointments', appointmentsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

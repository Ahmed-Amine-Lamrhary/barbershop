const express = require('express');
const admin = require('firebase-admin');
const app = express();
const cors = require('cors');

const serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://barbershop-app-9a950.firebaseio.com"
});

app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Firebase with Express is working!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBMx89V1n2a1vwE6nNgCa77rRasK9XjZNk",
    authDomain: "barbershop-912da.firebaseapp.com",
    projectId: "barbershop-912da",
    storageBucket: "barbershop-912da.firebasestorage.app",
    messagingSenderId: "870358486657",
    appId: "1:870358486657:web:b3319f304e7fc702fc8780"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getAppointments(...wheres) {
    const appointmentsRef = collection(db, 'appointments');
    const q = query(appointmentsRef, ...wheres);
    const snapshot = await getDocs(q);

    return snapshot;
}

async function addAppointment(appointment) {
    const appointmentsRef = collection(db, 'appointments');
    const docRef = await addDoc(appointmentsRef, appointment);

    return docRef;
}

module.exports = {
    addAppointment,
    getAppointments
};

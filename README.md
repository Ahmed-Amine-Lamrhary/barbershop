
# Barbershop Appointment Booking System

This project provides an appointment booking system for a barbershop. It allows customers to book appointments online while ensuring that appointments are spaced at least 1 hour apart. The system includes backend logic to handle appointment creation, validation, and interaction with Firebase Firestore as a database.

## Features

- **Book Appointment**: Users can book appointments specifying their name, date, time, and service (e.g., haircut).
- **Validation**: Ensures the requested appointment time is valid, within working hours, and at least 1 hour apart from other appointments.
- **Working Hours**: Appointments can only be scheduled between 9:00 AM and 7:00 PM.
- **Database**: Firebase Firestore is used to store appointment data.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: Firebase Firestore
- **Styling**: CSS
- **Date/Time handling**: Moment.js for date manipulation
- **API**: REST API using `fetch` to communicate between the frontend and backend

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/barbershop-appointment.git
cd barbershop-appointment
```

### 2. Install Backend Dependencies

Navigate to the backend folder, then install dependencies using npm or yarn:

```bash
cd backend
npm install
```

### 3. Set Up Firebase

1. Create a Firebase project and enable Firestore Database.
2. Create a Firebase configuration file with your credentials (you can find them in the Firebase console).
3. Update the backend code to include your Firebase credentials in the `firebaseConfig` object.

### 4. Start the Backend Server

Start the server in the backend directory:

```bash
npm start
```

The backend will now be available at `http://localhost:4000`.

### 5. Install Frontend Dependencies

Navigate to the frontend folder, then install dependencies:

```bash
cd frontend
npm install
```

### 6. Start the Frontend Server

Start the React development server:

```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

## Usage

### 1. Booking an Appointment

To book an appointment, fill out the form on the landing page with the following details:

- **Name**: Your full name.
- **Date**: The date of your appointment.
- **Time**: The time you want the appointment.
- **Service**: Choose the service (e.g., Haircut).

The form will send a POST request to the backend API, which will validate the appointment and store it in the Firestore database.

### 2. Appointments Validation

The system will check the following conditions before confirming an appointment:

- The requested time is within the allowed working hours (9:00 AM - 7:00 PM).
- The requested time is not in the past.
- There must be at least 1 hour between appointments.

### 3. View Appointments

The backend stores all appointments in Firestore. You can query the appointments data from the Firestore database for administrative purposes (not implemented in this demo, but can be added in the future).

## API Endpoints

### `POST /appointments`

Books an appointment for a customer.

#### Request Body

```json
{
    "name": "John Doe",
    "date": "2024-12-09",
    "time": "14:30",
    "service": "Haircut"
}
```

#### Response

```json
{
    "success": true,
    "message": "Appointment was booked successfully",
    "data": {
        "id": "appointment_id",
        "name": "John Doe",
        "date": "2024-12-09",
        "time": "14:30",
        "service": "Haircut",
        "createdAt": "2024-12-01T10:00:00Z"
    }
}
```

### Error Responses

- If the requested time is already taken:
  
  ```json
  {
      "success": false,
      "message": "The selected time slot is already booked."
  }
  ```

- If required fields are missing or invalid:

  ```json
  {
      "success": false,
      "message": "Missing required fields: name, date, time, or service."
  }
  ```

- If the requested time is not within working hours or is in the past:

  ```json
  {
      "success": false,
      "message": "Invalid or past date/time."
  }
  ```

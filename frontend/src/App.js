import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for appointments list */}
        <Route path="/appointments" element={<AppointmentList />} />
      </Routes>
    </Router>
  );
}

export default App;

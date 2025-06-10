import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginSelection from './pages/LoginSelection';
import DoctorDashboard from './pages/DoctorDashboard';
import StaffDashboard from './pages/StaffDashboard';
import PatientDashboard from './pages/PatientDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/select-role" element={<LoginSelection />} />
      <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
      <Route path="/dashboard/staff" element={<StaffDashboard />} />
      <Route path="/dashboard/patient" element={<PatientDashboard />} />
    </Routes>
  );
}

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VenueManagement from './pages/VenueManagement';
import BookingManagement from './pages/BookingManagement';
import PaymentManagement from './pages/PaymentManagement';
import Analytics from './pages/Analytics';
import UserManagement from './pages/UserManagement';
import SupportFeedback from './pages/SupportFeedback';
import Login from './pages/Login'; // Import the Login component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Set Login as the default route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/venues" element={<VenueManagement />} />
          <Route path="/bookings" element={<BookingManagement />} />
          <Route path="/payments" element={<PaymentManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/support" element={<SupportFeedback />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
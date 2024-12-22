import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VenueManagement from './pages/VenueManagement';
import BookingManagement from './pages/BookingManagement';
import PaymentManagement from './pages/PaymentManagement';
import Analytics from './pages/Analytics';
import UserManagement from './pages/UserManagement';
import SupportFeedback from './pages/SupportFeedback';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
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
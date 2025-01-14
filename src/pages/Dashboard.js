// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Tabs, Tab } from '@mui/material';
import Analytics from './Analytics'; // Import your Analytics component
import UserManagement from './UserManagement'; // Import your User Management component
import PaymentManagement from './PaymentManagement'; // Import your Payment Management component

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const logout = () => {
    localStorage.removeItem('user'); // Example, adjust as necessary
    // Redirect to login page
    window.location.href = '/'; // Adjust path as necessary
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="dashboard tabs">
        <Tab label="Analytics" />
        <Tab label="User Management" />
        <Tab label="Payment Management" />
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        {tabValue === 0 && <Analytics />}
        {tabValue === 1 && <UserManagement />}
        {tabValue === 2 && <PaymentManagement />}
      </div>
      <Button onClick={logout}>Logout</Button>

    </div>
  );
};

export default Dashboard;
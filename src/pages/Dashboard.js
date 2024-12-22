// src/pages/Dashboard.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Sample data for metrics
  const totalEarnings = 12000; // Example value
  const bookingsToday = 5; // Example value
  const occupancyRate = 75; // Example value
  const totalUsers = 50; // Example value

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Earnings
              </Typography>
              <Typography variant="h6" color="text.secondary">
                ${totalEarnings}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Bookings Today
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {bookingsToday}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Venue Occupancy Rate
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {occupancyRate}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Users
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <h2>Quick Links</h2>
        <Link to="/venues">
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Manage Venues
          </Button>
        </Link>
        <Link to="/bookings">
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            View Bookings
          </Button>
        </Link>
        <Link to="/payments">
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Manage Payments
          </Button>
        </Link>
        <Link to="/analytics">
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            View Analytics
          </Button>
        </Link>
        <Link to="/users">
          <Button variant="contained" color="primary">
            User Management
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
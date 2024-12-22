// src/pages/Analytics.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, LineChart, Line } from 'recharts';
import { Paper } from '@mui/material';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const Analytics = () => {
  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 3000 },
    { month: 'Feb', revenue: 2000 },
    { month: 'Mar', revenue: 4000 },
    { month: 'Apr', revenue: 5000 },
    { month: 'May', revenue: 6000 },
  ];

  const utilizationData = [
    { name: 'Venue A', value: 60 },
    { name: 'Venue B', value: 30 },
    { name: 'Venue C', value: 10 },
  ];

  const peakBookingData = [
    { time: 'Morning', bookings: 5 },
    { time: 'Afternoon', bookings: 15 },
    { time: 'Evening', bookings: 10 },
  ];

  return (
    <div className="container">
      <h1>Analytics</h1>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <h2>Revenue Trends</h2>
        <BarChart width={600} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </Paper>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <h2>Venue Utilization Rates</h2>
        <PieChart width={400} height={400}>
          <Pie data={utilizationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
          <Tooltip />
        </PieChart>
      </Paper>
      <Paper style={{ padding: '20px' }}>
        <h2>Peak Booking Times</h2>
        <LineChart width={600} height={300} data={peakBookingData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
        </LineChart>
      </Paper>
    </div>
  );
};

export default Analytics;
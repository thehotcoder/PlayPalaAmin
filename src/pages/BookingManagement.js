// src/pages/BookingManagement.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    { id: 1, venue: 'Stadium A', customer: 'John Doe', date: '2024-12-23', time: '14:00', status: 'Confirmed' },
    { id: 2, venue: 'Arena B', customer: 'Jane Smith', date: '2024-12-24', time: '16:00', status: 'Pending' },
  ]);

  const handleApproveBooking = (id) => {
    setBookings(bookings.map(booking => (booking.id === id ? { ...booking, status: 'Confirmed' } : booking)));
  };

  const handleRejectBooking = (id) => {
    setBookings(bookings.map(booking => (booking.id === id ? { ...booking, status: 'Rejected' } : booking)));
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <div className="container">
      <h1>Booking Management</h1>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.venue}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" style={{ marginRight: '10px' }} onClick={() => handleApproveBooking(booking.id)}>
                    Approve
                  </Button>
                  <Button variant="outlined" color="secondary" style={{ marginRight: '10px' }} onClick={() => handleRejectBooking(booking.id)}>
                    Reject
                  </Button>
                  <Button variant="outlined" color="error" onClick={() => handleCancelBooking(booking.id)}>
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookingManagement;
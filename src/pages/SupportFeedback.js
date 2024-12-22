// src/pages/SupportFeedback.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, TextField } from '@mui/material';

const SupportFeedback = () => {
  const [tickets, setTickets] = useState([
    { id: 1, user: 'Alice', issue: 'Cannot log in', status: 'Open' },
    { id: 2, user: 'Bob', issue: 'Payment not processed', status: 'Resolved' },
    // Add more sample tickets as needed
  ]);

  const [newTicket, setNewTicket] = useState({ user: '', issue: '' });

  const handleResolveTicket = (id) => {
    setTickets(tickets.map(ticket => (ticket.id === id ? { ...ticket, status: 'Resolved' } : ticket)));
  };

  const handleSubmitTicket = () => {
    const ticketToAdd = {
      id: tickets.length + 1,
      user: newTicket.user,
      issue: newTicket.issue,
      status: 'Open',
    };
    setTickets([...tickets, ticketToAdd]);
    setNewTicket({ user: '', issue: '' }); // Reset form
  };

  return (
    <div className="container">
      <h1>Support and Feedback</h1>
      
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <h2>Submit New Ticket</h2>
        <TextField
          label="User Name"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '10px' }}
          value={newTicket.user}
          onChange={(e) => setNewTicket({ ...newTicket, user: e.target.value })}
        />
        <TextField
          label="Issue Summary"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '10px' }}
          value={newTicket.issue}
          onChange={(e) => setNewTicket({ ...newTicket, issue: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleSubmitTicket}>
          Submit Ticket
        </Button>
      </Paper>

      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Issue Summary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.user}</TableCell>
                <TableCell>{ticket.issue}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>
                  {ticket.status === 'Open' && (
                    <Button variant="outlined" color="primary" onClick={() => handleResolveTicket(ticket.id)}>
                      Mark as Resolved
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SupportFeedback;
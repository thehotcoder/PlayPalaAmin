// src/pages/PaymentManagement.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';

const PaymentManagement = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, amount: 100, date: '2024-12-20', status: 'Completed', method: 'Credit Card' },
    { id: 2, amount: 150, date: '2024-12-21', status: 'Pending', method: 'PayPal' },
    // Add more sample transactions as needed
  ]);

  const handleRefund = (id) => {
    setTransactions(transactions.map(transaction => (transaction.id === id ? { ...transaction, status: 'Refunded' } : transaction)));
  };

  return (
    <div className="container">
      <h1>Payment Management</h1>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.method}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleRefund(transaction.id)}>
                    Refund
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

export default PaymentManagement;
// src/pages/UserManagement.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, TextField, Modal, Box } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Player', status: 'Banned' },
    // Add more sample users as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Player' });

  const handleBanUser = (id) => {
    setUsers(users.map(user => (user.id === id ? { ...user, status: 'Banned' } : user)));
  };

  const handleUnbanUser = (id) => {
    setUsers(users.map(user => (user.id === id ? { ...user, status: 'Active' } : user)));
  };

  const handleSubmitUser = () => {
    const userToAdd = {
      id: users.length + 1,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      status: 'Active',
    };
    setUsers([...users, userToAdd]);
    setNewUser({ name: '', email: '', role: 'Player' }); // Reset form
    setModalOpen(false);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>User Management</h1>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} onClick={() => setModalOpen(true)}>
        Add New User
      </Button>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  {user.status === 'Active' ? (
                    <Button variant="outlined" color="secondary" onClick={() => handleBanUser(user.id)}>
                      Ban
                    </Button>
                  ) : (
                    <Button variant="outlined" color="primary" onClick={() => handleUnbanUser(user.id)}>
                      Unban
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, width: 400, margin: 'auto', marginTop: '10%' }}>
          <h2>Add New User</h2>
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '10px' }}
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={handleSubmitUser}>
            Add User
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default UserManagement;
// src/pages/VenueManagement.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import AddEditVenueModal from '../components/AddEditVenueModal';

const VenueManagement = () => {
  const [venues, setVenues] = useState([
    { id: 1, name: 'Stadium A', location: 'City Center', status: 'Available', price: 100 },
    { id: 2, name: 'Arena B', location: 'North District', status: 'Unavailable', price: 150 },
  ]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVenue, setCurrentVenue] = useState(null);

  const handleAddVenue = (newVenue) => {
    setVenues([...venues, { ...newVenue, id: venues.length + 1 }]);
  };

  const handleEditVenue = (venue) => {
    setCurrentVenue(venue);
    setModalOpen(true);
  };

  const handleSaveVenue = (updatedVenue) => {
    setVenues(venues.map(venue => (venue.id === currentVenue.id ? { ...venue, ...updatedVenue } : venue)));
    setCurrentVenue(null);
  };

  const handleDeleteVenue = (id) => {
    setVenues(venues.filter(venue => venue.id !== id));
  };

  return (
    <div className="container">
      <h1>Venue Management</h1>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} onClick={() => setModalOpen(true)}>
        Add New Venue
      </Button>
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venue Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Price per Hour</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {venues.map((venue) => (
              <TableRow key={venue.id}>
                <TableCell>{venue.name}</TableCell>
                <TableCell>{venue.location}</TableCell>
                <TableCell>{venue.status}</TableCell>
                <TableCell>${venue.price}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" style={{ marginRight: '10px' }} onClick={() => handleEditVenue(venue)}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteVenue(venue.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddEditVenueModal open={modalOpen} handleClose={() => { setModalOpen(false); setCurrentVenue(null); }} handleSave={currentVenue ? handleSaveVenue : handleAddVenue} venue={currentVenue} />
    </div>
  );
};

export default VenueManagement;
// src/components/AddEditVenueModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, TextField, Box } from '@mui/material';

const AddEditVenueModal = ({ open, handleClose, handleSave, venue }) => {
  const [venueName, setVenueName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Available');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (venue) {
      setVenueName(venue.name);
      setLocation(venue.location);
      setStatus(venue.status);
      setPrice(venue.price);
    } else {
      setVenueName('');
      setLocation('');
      setStatus('Available');
      setPrice('');
    }
  }, [venue]);

  const handleSubmit = () => {
    const newVenue = {
      name: venueName,
      location,
      status,
      price: parseFloat(price),
    };
    handleSave(newVenue);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, width: 400, margin: 'auto', marginTop: '10%' }}>
        <h2>{venue ? 'Edit Venue' : 'Add New Venue'}</h2>
        <TextField
          label="Venue Name"
          fullWidth
          margin="normal"
          value={venueName}
          onChange={(e) => setVenueName(e.target.value)}
        />
        <TextField
          label="Location"
          fullWidth
          margin="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="Price per Hour"
          type="number"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {venue ? 'Save Changes' : 'Add Venue'}
        </Button>
      </Box>
    </Modal>
  );
};

export default AddEditVenueModal;
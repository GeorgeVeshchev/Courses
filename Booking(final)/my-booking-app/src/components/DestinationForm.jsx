import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';

const DestinationForm = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ destination, checkIn, checkOut });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={4}>
      <Typography variant="h5" gutterBottom>
        Find Your Perfect Hotel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Destination"
            fullWidth
            variant="outlined"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Check-In Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Check-Out Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button variant="small" color="primary" type="submit">
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default DestinationForm;

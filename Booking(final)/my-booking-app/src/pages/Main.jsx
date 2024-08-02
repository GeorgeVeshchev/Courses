import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsRequest, searchHotels } from '../redux/actions.js';
import { TextField, Button, Grid, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { hotels, searchParams } = useSelector(state => state.hotels);
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchHotels({ destination, checkIn, checkOut }));
  };

  const handleClearFilters = () => {
    setDestination('');
    setCheckIn('');
    setCheckOut('');
    dispatch(searchHotels({ destination: '', checkIn: '', checkOut: '' }));
  };

  const handleGoToAbout = () => {
    navigate('/about'); 
  };

  const filteredHotels = hotels.filter(hotel => 
    (searchParams.destination ? hotel.destination.toLowerCase().includes(searchParams.destination.toLowerCase()) : true) &&
    (searchParams.checkIn ? new Date(hotel.availableFrom) <= new Date(searchParams.checkIn) : true) &&
    (searchParams.checkOut ? new Date(hotel.availableTo) >= new Date(searchParams.checkOut) : true)
  );

  return (
    <div>
      <Box component="form" onSubmit={handleSearch} mt={4}>
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
          <Button variant="contained" color="primary" type="submit" style={{ marginRight: '8px' }}>
            Search
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </Box>
      </Box>
      
      <Typography variant="h6" gutterBottom mt={4}>
        Available Hotels
      </Typography>
      <Grid container spacing={2}>
        {filteredHotels.map(hotel => (
          <Grid item xs={12} md={4} key={hotel.id}>
            <Card>
              <CardMedia
                component="img"
                alt={hotel.name}
                height="140"
                image={hotel.image}
                title={hotel.name}
              />
              <CardContent>
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography color="textSecondary">{hotel.destination}</Typography>
                <Typography color="textSecondary">Price: ${hotel.price}</Typography>
                <Typography color="textSecondary">Rating: {hotel.rating}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={() => navigate('/hotels')}>
          Back to Home
        </Button>
      </Box>
    </div>
  );
};

export default MainPage;
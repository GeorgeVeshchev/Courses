import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Button, Box, AppBar , Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HotelList from '../components/HotelList.jsx';
import Loader from '../components/Loader.jsx';
import { fetchHotels, searchHotels } from '../redux/hotelsSlice.js';

const Hotels = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hotels, loading, error } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <div>
      <AppBar position="static" sx={{ mb: 4, backgroundColor: 'transparent', borderBottom: '1px solid orange' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'orange' }}>
            Hotel Finder
          </Typography>
          <Box>
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ mr: 2, border: '1px solid orange', color: 'orange' }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/about')}
              sx={{ border: '1px solid orange', color: 'orange' }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h2" gutterBottom>
          Hotels
        </Typography>
        {loading ? (
          <Loader />
        ) : error ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          <HotelList hotels={hotels} />
        )}
      </Container>
    </div>
  );
};

export default Hotels;

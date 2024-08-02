import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import HotelList from '../components/HotelList.jsx';
import Loader from '../components/Loader.jsx';
import { Container, Typography } from '@mui/material';
import { fetchHotelsRequest } from '../redux/actions.js';

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box } from '@mui/material';
import HotelList from '../components/HotelList.jsx';
import Loader from '../components/Loader.jsx';
import DestinationForm from '../components/DestinationForm.jsx';
import { fetchHotelsRequest } from '../redux/actions.js';
import Navbar from '../components/Navbar.jsx';

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels, loading, error } = useSelector((state) => state.hotels);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkIn: '',
    checkOut: ''
  });

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  useEffect(() => {
    filterHotels();
  }, [searchParams, hotels]);

  const filterHotels = () => {
    const { destination, checkIn, checkOut } = searchParams;
    const results = hotels.filter(hotel => {
      const matchesDestination = destination ? hotel.destination.toLowerCase().includes(destination.toLowerCase()) : true;
      const matchesCheckIn = checkIn ? new Date(hotel.availableFrom) <= new Date(checkIn) : true;
      const matchesCheckOut = checkOut ? new Date(hotel.availableTo) >= new Date(checkOut) : true;
      return matchesDestination && matchesCheckIn && matchesCheckOut;
    });
    setFilteredHotels(results);
  };

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h2" gutterBottom>
          Hotels
        </Typography>
        <DestinationForm onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <Typography color="error">Error: {error}</Typography>}
        {!loading && !error && filteredHotels.length === 0 && <Typography>No hotels available.</Typography>}
        {!loading && !error && filteredHotels.length > 0 && <HotelList hotels={filteredHotels} />}
      </Container>
    </div>
  );
};

export default Hotels;

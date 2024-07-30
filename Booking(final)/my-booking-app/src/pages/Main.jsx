import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Main = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Booking App
      </Typography>
      <Button component={Link} to="/about" variant="contained" color="primary">
        About
      </Button>
      <Button component={Link} to="/hotels" variant="contained" color="secondary">
        Hotels
      </Button>
    </Container>
  );
};

export default Main;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Booking App
      </Typography>
      <nav>
        <Button variant="contained" color="primary" component={Link} to="/" style={{ marginRight: 8 }}>
          Home
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/about" style={{ marginRight: 8 }}>
          About
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/hotels">
          Hotels
        </Button>
      </nav>
    </Container>
  );
};

export default Navbar;

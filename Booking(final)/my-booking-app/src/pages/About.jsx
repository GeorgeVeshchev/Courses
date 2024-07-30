import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is a booking app built with React, Redux, and MUI.
      </Typography>
    </Container>
  );
};

export default About;

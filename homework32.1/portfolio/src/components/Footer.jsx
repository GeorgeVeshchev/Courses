import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 4, p: 2, backgroundColor: 'background.paper', textAlign: 'center' }}>
      <Container>
        <Typography variant="body1">Contact me at: kkceeer@gmail.com</Typography>
        <Typography variant="body2" color="text.secondary">© 2024 My Portfolio</Typography>
      </Container>
    </Box>
  );
};

export default Footer;

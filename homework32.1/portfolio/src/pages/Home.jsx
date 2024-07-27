import React from 'react';
import { Container, Typography, Paper, Grid, Box, Divider } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About Me</Typography>

      
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>Introduction</Typography>
        <Typography variant="body1">
          Hello! My name is Georgiy . I'm 16 years old and I come from Odessa, Ukraine. 
          I am a front-end developer with a strong interest in exploring new technologies.
        </Typography>
      </Paper>

     
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>Skills</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: 'background.default' }}>
              <Typography variant="h6">Technical Skills</Typography>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Jest</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: 'background.default' }}>
              <Typography variant="h6">Language Skills</Typography>
              <Typography variant="body1">English: B2-B1 (Intermediate)</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>Best Qualities</Typography>
        <Typography variant="body1">
          - Communication<br />
          - Responsibility<br />
          - Passion for exploring new things<br />
          - Persistence
        </Typography>
      </Paper>

     
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>Projects</Typography>
        <Typography variant="body1">
          I have worked on a pet project called <strong>Booking</strong>, which is a hotel booking application.
        </Typography>
      </Paper>

     
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>Contact</Typography>
        <Typography variant="body1">
          <strong>Instagram:</strong> <a href="https://www.instagram.com/georgiiveshchev" target="_blank" rel="noopener noreferrer">georgiiveshchev</a><br />
          <strong>Phone:</strong> +380 98 835 78 35<br />
          <strong>Email:</strong> <a href="mailto:kkceeer@gmail.com">kkceeer@gmail.com</a>
        </Typography>
      </Paper>
      
      <Divider sx={{ my: 4 }} />
    </Container>
  );
};

export default Home;

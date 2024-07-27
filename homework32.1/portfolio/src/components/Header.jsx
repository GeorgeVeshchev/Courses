import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/todo">Todo</Button>
          <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

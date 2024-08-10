import React from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, CardMedia, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useHotels from '../hooks/useHotels.js';


const MainPage = () => {
  const navigate = useNavigate();
  const {
    destination,
    updateDestination,
    checkIn,
    updateCheckIn,
    checkOut,
    updateCheckOut,
    filteredHotels,
    showHotels,
    handleSearch,
    handleClearFilters
  } = useHotels();

  const handleGoToAbout = () => {
    navigate('/about');
  };

  const handleGoToHotels = () => {
    navigate('/hotels');
  };

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
              onClick={handleGoToHotels}
              sx={{ mr: 2, border: '1px solid orange', color: 'orange' }}
            >
              Hotels
            </Button>
            <Button
              color="inherit"
              onClick={handleGoToAbout}
              sx={{ border: '1px solid orange', color: 'orange' }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          maxWidth: 600,
          mx: 'auto',
          padding: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)' 
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          Find Your Perfect Hotel
        </Typography>

        <Box
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2,  
            mb: 2 
          }}
        >
          <TextField
            label="Destination"
            variant="outlined"
            size="small"
            value={destination}
            onChange={(e) => updateDestination(e.target.value)}
            sx={{ width: 150, ml: 2 }}
          />

          <TextField
            label="Check-In Date"
            type="date"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={checkIn}
            onChange={(e) => updateCheckIn(e.target.value)}
            sx={{ width: 150, ml: 2 }} 
          />

          <TextField
            label="Check-Out Date"
            type="date"
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={checkOut}
            onChange={(e) => updateCheckOut(e.target.value)}
            sx={{ width: 150, ml: 2 }} 
          />
        </Box>

        <Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mr: 1 }}
          >
            Search
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
        </Box>
      </Box>

      {showHotels && filteredHotels.length > 0 && (
        <div>
          <Typography variant="h6" gutterBottom mt={4} align="center"> 
            Available Hotels
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 2 
            }}
          >
            {filteredHotels.map(hotel => (
              <Card key={hotel.id} sx={{ maxWidth: 345, m: 1 }}> 
                <CardMedia
                  component="img"
                  alt={hotel.name}
                  height="140"
                  image={hotel.image}
                  title={hotel.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      )}
    </div>
  );
};

export default MainPage;
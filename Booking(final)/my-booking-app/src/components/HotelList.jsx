import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { fetchHotels } from '../api/axios.js';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        setError('Error fetching hotels');
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Grid container spacing={3}>
      {hotels.map(hotel => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <Card>
            <CardMedia
              component="img"
              alt={hotel.name}
              height="140"
              image={hotel.image}
              title={hotel.name}
            />
            <CardContent>
              <Typography variant="h6">{hotel.name}</Typography>
              <Typography color="textSecondary">{hotel.destination}</Typography>
              <Typography variant="body2">Price: ${hotel.price} per night</Typography>
              <Typography variant="body2">Rating: {hotel.rating} ★</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Book Now</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HotelList;

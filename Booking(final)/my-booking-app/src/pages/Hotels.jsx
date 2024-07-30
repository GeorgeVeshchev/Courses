import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsRequest } from '../redux/hotelsActions.js';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';

const Hotels = () => {
  const dispatch = useDispatch();
  const { hotels, loading } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hotels
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={hotel.image}
                  alt={hotel.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Hotels;

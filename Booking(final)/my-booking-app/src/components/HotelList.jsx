import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const HotelList = ({ hotels }) => {
  return (
    <Grid container spacing={2}>
      {hotels.length ? (
        hotels.map(hotel => (
          <Grid item xs={12} md={4} key={hotel.id}>
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
                <Typography color="textSecondary">Price: ${hotel.price}</Typography>
                <Typography color="textSecondary">Rating: {hotel.rating}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography>No hotels available</Typography>
      )}
    </Grid>
  );
};

export default HotelList;

import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchFields = ({ destination, updateDestination, checkIn, updateCheckIn, checkOut, updateCheckOut }) => {
  const textFieldProps = {
    variant: 'outlined',
    size: 'small',
    sx: { width: 150, ml: 2 }
  };

  return (
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
        value={destination}
        onChange={(e) => updateDestination(e.target.value)}
        {...textFieldProps}
      />

      <TextField
        label="Check-In Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={checkIn}
        onChange={(e) => updateCheckIn(e.target.value)}
        {...textFieldProps}
      />

      <TextField
        label="Check-Out Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={checkOut}
        onChange={(e) => updateCheckOut(e.target.value)}
        {...textFieldProps}
      />
    </Box>
  );
};

export default SearchFields;

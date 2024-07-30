import React from 'react';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const Search = () => {
    const navigate = useNavigate();  
  
    const onSubmit = async (values) => {
      try {
       
        await axios.post('http://localhost:3333/hotels', values);
     
        navigate('/hotels');  
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
      }
    };
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Search Hotels
        </Typography>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="destination">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Destination"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                  />
                )}
              </Field>
              <Button type="submit" variant="contained" color="primary">
                Search
              </Button>
            </form>
          )}
        />
      </Container>
    );
  };
  
  export default Search;

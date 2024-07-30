import React from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await axios.post('http://localhost:3333/hotels', values);
      navigate('/hotels');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="destination">
            {({ input, meta }) => (
              <div>
                <label>Destination</label>
                <input {...input} type="text" placeholder="Destination" />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit">Send</button>
        </form>
      )}
    />
  );
};

export default BookingForm;

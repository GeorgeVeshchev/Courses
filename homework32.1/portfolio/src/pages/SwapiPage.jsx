import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const SwapiPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>SWAPI Characters</Typography>
      <List>
        {data.map((character, index) => (
          <ListItem key={index}>
            <ListItemText primary={character.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SwapiPage;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Todo List</Typography>
      <TextField
        label="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>Add</Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoPage;

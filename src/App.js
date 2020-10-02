import { Container, Paper } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="App">
      <Container className="appContainer">
          <TodoForm />
      </Container>
    </div>
  );
}

export default App;

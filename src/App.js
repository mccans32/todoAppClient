import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

class App extends React.Component {

  constructor() {
    super();
    this.base_api_url = process.env.REACT_APP_API_URL;
    this.api_port = process.env.REACT_APP_API_PORT;
    this.api_url = `${this.base_api_url}:${this.api_port}/`;
    this.Todos = this.getTodos.bind(this);
    this.state = {
      todos: []
    }
  }

  getTodos(url) {
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log('Successfully retrieved todos');
        // Set the state with out new todos
        this.setState({
          todos: data
        })
      })
      .catch((error) => {
        console.error('Failed to retrieve todos', error);
      });
  }

  componentDidMount() {
    console.log("Loaded")

    // Attempt to retrieve todos form the database
    const api_route = "todos";
    const full_api_url = `${this.api_url}${api_route}/`;

    this.getTodos(full_api_url);

  }

  render() {
    const reloadTodos = this.getTodos.bind(this);
    return (
      <div className="App">
        <Container className="appContainer" maxWidth="sm">
          <TodoForm api={this.api_url} reloadTodos={reloadTodos} />
          <TodoList todos={this.state.todos} api={this.api_url} reloadTodos={reloadTodos} />
        </Container>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './TodoForm.css';
import { Box, TextField, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.base_api_url = process.env.REACT_APP_API_URL;
        this.api_port = process.env.REACT_APP_API_PORT;
        this.api_url = `${this.base_api_url}:${this.api_port}/`
        this.handleChange = this.handleChange.bind(this)
        this.uploadTodo = this.uploadTodo.bind(this)
        this.state = {
            formData: ""
        };
    }

    handleChange(event) {
        this.setState({
            formData: event.target.value,
        })
    }

    postTodo(url, data) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        console.log("Loaded")

        // Attempt to retrieve todos form the database
        const api_route = "todos";
        const full_api_url = `${this.api_url}${api_route}/`;

        this.getTodos(full_api_url);

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

    uploadTodo() {
        // convert text to JSON
        let data = {
            "message": this.state.formData
        };

        const api_route = "todos";
        const full_api_url = `${this.api_url}${api_route}/`;

        this.postTodo(full_api_url, data);
    }

    render() {
        const CARD_PADDING = 10;
        return (
            <Box className="todoForm">
                <Card className="todoFormCard">
                    <CardContent className="todoFormContent" style={{ padding: CARD_PADDING }}>
                        <Typography
                            component="p">
                            What do you need to do?
                            </Typography>
                        <TextField
                            className="todoTextField"
                            variant="outlined"
                            multiline={true}
                            inputProps={{
                                maxLength: 100
                            }}
                            rows={5}
                            placeholder="Empty"
                            value={this.state.formData}
                            onChange={this.handleChange}
                        >
                        </TextField>
                    </CardContent>
                    <CardActions className="todoFormActions" style={{ padding: CARD_PADDING }}>
                        <Button
                            color="primary"
                            size="small"
                            variant="contained"
                            onClick={this.uploadTodo}>
                            Submit
                            </Button>
                    </CardActions>
                </Card>
            </Box>
        )
    }
}

export default TodoForm;
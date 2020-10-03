import React from 'react';
import './TodoForm.css';
import { Box, TextField, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';

class TodoForm extends React.Component {

    constructor() {
        super();
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

    uploadTodo() {
        // convert text to JSON
        let data = {
            "message": this.state.formData
        };

        const base_api_url = process.env.REACT_APP_API_URL;
        const api_port = process.env.REACT_APP_API_PORT;
        const api_route = "todos";
        const full_api_url = `${base_api_url}:${api_port}/${api_route}/`;

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
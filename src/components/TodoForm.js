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

    uploadTodo() {
        // convert text to JSON
        let obj = {
            "todoMessage": this.state.formData
        }

        let json = JSON.stringify(obj);
        console.log(json);
    }

    render() {
        const CARD_PADDING = 10;
        return (
            <Box className="todoForm">
                <Card className="todoFormCard">
                    <CardContent className="todoFormContent" style={{ padding: CARD_PADDING }}>
                        <Typography
                            variant="p"
                            component="p">
                            What do you need to do?
                            </Typography>
                        <TextField
                            className="todoTextField"
                            variant="outlined"
                            multiline={true}
                            inputProps={{
                                maxlength: 100
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
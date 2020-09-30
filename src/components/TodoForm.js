import React from 'react';
import './TodoForm.css';
import { TextField } from '@material-ui/core';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            formData: ""
        };
    }

    handleChange(event) {
        this.setState({
            formData: event.target.value,
        })
    }

    render() {
        return (
            <div className="todoForm">
                <p className="todoHeader">Enter a new todo</p>
                <TextField
                    className="todoTextField"
                    multiline="true"
                    placeholder="Empty"
                    value={this.state.formData}
                    onChange={this.handleChange}
                    >
                </TextField>
            </div>
        )
    }
}

export default TodoForm;
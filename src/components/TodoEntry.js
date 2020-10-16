import { Card, Box, CardContent, IconButton, CardActions } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import React from "react";
import './TodoEntry.css';

class TodoEntry extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const base = `${this.props.url}todos/`;
        const full = `${base}${this.props.id}/`;
        this.deleteTodo(base, full)
    }

    deleteTodo(base, full) {
        fetch(full, {
            method: 'DELETE',
            mode: 'cors',
        })
            .then(data => {
                console.log('Success:', data);
                // Reload the entries
                this.props.reloadTodos(base);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <Box className="todoEntryBox" >
                <Card>
                    <CardContent>
                        <p>{this.props.message}</p>
                    </CardContent>
                    <CardActions className="entryActions">
                        <IconButton
                            children={<DeleteIcon />}
                            onClick={this.handleClick}
                        ></IconButton>
                    </CardActions>
                </Card>
            </Box>)
    }
}

export default TodoEntry;
import React from 'react';
import './TodoForm';

class TodoForm extends React.Component {

    constructor(props) {
        super();
        this.state = {};

    }

    render() {
        return (
            <div className="todoForm">
                <form>This is the Todo Form</form>
            </div>
        )
    }
}

export default TodoForm;
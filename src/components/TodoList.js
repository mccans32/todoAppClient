import React from "react";
import TodoEntry from "./TodoEntry";
import './TodoList.css';

class TodoList extends React.Component {

    constructor() {
        super();
        this.createTodoEntry = this.createTodoEntry.bind(this);
    }

    createTodoEntry(todo) {
        return <li key={todo.id} className="todoEntryListItem">
            <TodoEntry url={this.props.api} message={todo.message} id={todo.id} reloadTodos={this.props.reloadTodos}/>
        </li>
    }

    render() {
        const items = this.props.todos.map(this.createTodoEntry);
        return <ul>{items}</ul>
    }
}

export default TodoList;
import React, { useContext } from 'react';
import {TodoContext} from '../contexts/TodoContext';
import TodoIten from './TodoIten';

const TodoList = () => {
    const context = useContext(TodoContext);

    const data = context.todos.map(todo => (
        <TodoIten key={todo.id} todo={todo}></TodoIten>
    ))

    return(
        <div>
            {data}
        </div>
    );
}

export default TodoList;
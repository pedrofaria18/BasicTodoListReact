import React, { useContext, useState } from 'react';
import {TodoContext} from '../contexts/TodoContext';

const AddTodo = () => {
    const {saveTodo} = useContext(TodoContext);

    const [todo, setTodo] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();
        saveTodo(todo);
    }

    const handleInputChance = e => {
        setTodo({
            ...todo,
            title: e.target.value
        })
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="title" id="title" placeholder="Nova Tarefa" onChange={handleInputChance}/>
            <button>ADICIONAR</button>
        </form>
    );
}

export default AddTodo;
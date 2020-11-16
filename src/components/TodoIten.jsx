import React from 'react';

const TodoIten = ({todo}) => {
    return(
        <div>
            {todo.id} - {todo.title} - {todo.done ? "true" : "false"}
        </div>
    );
}

export default TodoIten;
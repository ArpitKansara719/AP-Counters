import './ToDoItem.css';
import React from 'react';

const ToDoItem = ({ task, removeTask, toggleTaskCompletion }) => {
    return (
        <li style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
    );
};

export default ToDoItem;

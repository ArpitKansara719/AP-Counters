
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, addTask, removeTask, toggleTaskCompletion }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                        toggleTaskCompletion={toggleTaskCompletion}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;

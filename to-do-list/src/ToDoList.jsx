import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function handleAddTask() {
        if (newTask !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function handleTaskDown(index) {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    } // This is the best feature i wanted to set for the VS Code

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>
            <div>
                <input type="text" onChange={handleInputChange} value={newTask} placeholder='add new task...' />
                <button className='add-button' onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => handleDeleteTask(index)}>✖️</button>
                        <button className='up-button' onClick={() => handleTaskUp(index)}>⬆️</button>
                        <button className='down-button' onClick={() => handleTaskDown(index)}>⬇️</button>
                    </li>
                )}

            </ol>
        </div>
    )
}

export default ToDoList
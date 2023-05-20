import React from "react";
import { useState } from "react";

export const Tasklist = (props) => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Name1", completed: true},
        {id: 2, name: "Name2", completed: false},
        {id: 3, name: "Name3", completed: true},
        {id: 4, name: "Name4", completed: true},
        {id: 5, name: "Name5", completed: true}
      ]);
    
      const [show, setShow] = useState(false);
      
      function handleDelete(id) {
        setTasks(tasks.filter(task => id !== task.id));
      }
    
    return (
        <>
            <h1>Task list {props.title}</h1>
            <ul>
                <button className={show ? "hide" : "show"} onClick={() => setShow(!show)}>Show</button>
                <button className={show ? "show" : "hide"} onClick={() => setShow(!show)}>Hide</button>
                {show && tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : "incomplete"} >
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

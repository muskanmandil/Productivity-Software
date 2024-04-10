import React, { useState } from "react";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: "Task 1" }]);
  const [inputValue, setInputValue] = useState("");
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = { id: tasks.length + 1, text: inputValue };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Tasks</h2>
        <div className="task-input-div">
          <input
            type="text"
            className="task-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <button onClick={addTask}>New Task</button>
        </div>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <button className="task-btn">Check</button>
            <div className="task-text">{task.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

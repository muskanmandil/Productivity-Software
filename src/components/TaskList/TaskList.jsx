import React from "react";
import "./TaskList.css"

const TaskList = () => {
  return (
    <div className="list-container">
      <h3>Tasks</h3>
      <div className="task-list">
        <div className="task">TASK 1</div>
        <div className="task">TASK 2</div>
        <div className="task">TASK 3</div>
      </div>
    </div>
  );
};

export default TaskList;

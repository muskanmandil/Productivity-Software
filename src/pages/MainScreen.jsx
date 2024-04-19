import React from "react";
import TaskList from "../components/TaskList/TaskList";
import Calendar from "../components/Calendar/Calendar";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <TaskList />
      <Calendar />
    </div>
  );
};

export default MainScreen;

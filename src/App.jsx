import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import Calendar from "./components/Calendar/Calendar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-screen">
        <TaskList />
        <Calendar />
      </div>
    </div>
  );
};

export default App;

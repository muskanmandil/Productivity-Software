import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainScreen from "./pages/MainScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (!isLoggedIn ? (
    <LoginPage setLogin={()=>{setIsLoggedIn(true)}}/>
  ) : (
    <div className="app">
      <Sidebar />
      <MainScreen />
    </div>
  ));
};

export default App;

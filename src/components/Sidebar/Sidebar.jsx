import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo">Productivity</div>
        <div className="main-menu">
            <div className="menu-item">Inbox</div>
            <div className="menu-item">Dashboard</div>
            <div className="menu-item">Notes</div>
            <div className="menu-item">Habit Tracker</div>
            <div className="menu-item">Focus Timer</div>
        </div>
        <div className="user-menu">
            <div className="menu-item">Settings</div>
            <div className="menu-item">User Profile</div>
        </div>
    </div>
  )
}

export default Sidebar;
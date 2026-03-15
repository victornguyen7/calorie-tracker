import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Calorie Tracker</h1>

      <ul>
        <li>Dashboard</li>
        <li>Meal Log</li>
        <li>History</li>
      </ul>

      <div className = 'search-box'>
        <input type="text" placeholder="Search..." />
      </div>

    </div>
    
  )
}

export default Navbar

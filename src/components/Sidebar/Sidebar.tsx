import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#dashboard" className="nav-link">Dashboard</a></li>
          <li><a href="#meal-log" className="nav-link">Meal Log</a></li>
          <li><a href="#history" className="nav-link">History</a></li>
          <li><a href="#settings" className="nav-link">Settings</a></li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 Calorie Tracker</p>
      </div>
    </aside>
  )
}

export default Sidebar

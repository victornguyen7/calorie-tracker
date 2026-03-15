import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const location = useLocation()

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/log-meal', label: 'Log Meal', icon: '🍽️' },
    { path: '/history', label: 'History', icon: '📅' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>🍽️ Menu</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 Calorie Tracker</p>
      </div>
    </aside>
  )
}

export default Sidebar

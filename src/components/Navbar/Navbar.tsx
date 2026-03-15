import './Navbar.css'

const Navbar = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search query:', e.target.value)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="brand-title">🍽️ Calorie Tracker</h1>
        </div>

        <div className="navbar-search">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input 
              type="text" 
              placeholder="Search meals..." 
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="navbar-actions">
          <button className="action-btn" title="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge">0</span>
          </button>
          <button className="action-btn" title="User Profile">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

/**
 * DashboardPage Component
 * 
 * WHAT: Main dashboard view that displays daily calorie intake and nutritional information
 * 
 * HOW: 
 * - Uses React functional component pattern
 * - Renders the PageWrapper component for consistent page layout
 * - Displays 4 stat cards with progress bars (Calories, Protein, Carbs, Fat)
 * - Shows recent meals in a list format below the stats
 * - Uses inline styles for dynamic progress bar widths
 * 
 * TECH STACK:
 * - React 19.2.4 - JavaScript library for building UI
 * - TypeScript - Type-safe JavaScript
 * - CSS3 - Styling with responsive grid layout
 * - React Functional Components - Modern React approach
 */

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import './DashboardPage.css'

const DashboardPage = () => {
  // Component return - renders the page content wrapped with PageWrapper
  // PageWrapper provides consistent header styling and page wrapper functionality
  return (
    <PageWrapper
      title="Dashboard"
      description="Monitor your daily calorie intake and nutrition goals"
      icon="📊"
    >
      {/* 
        Dashboard Grid Section - Displays 4 nutritional stat cards
        Uses CSS Grid for responsive layout (auto-fit columns with min-width 280px)
        Each card shows current intake, goal target, and visual progress bar
      */}
      <div className="dashboard-grid">
        {/* Calorie Intake Card - Primary nutrition metric */}
        <div className="stat-card">
          <div className="stat-header">
            <h3>Today's Intake</h3>
            <span className="stat-badge">Goal: 2000 kcal</span>
          </div>
          {/* stat-value: Displays current calorie count in large font */}
          <p className="stat-value">1,250 kcal</p>
          {/* Progress bar: Visual representation of progress towards goal
              - Uses inline style with width property for dynamic percentage (62.5%)
              - CSS provides colors and styling for bar appearance */}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '62.5%' }}></div>
          </div>
          {/* Remaining calories calculation for user awareness */}
          <p className="stat-remaining">750 kcal remaining</p>
        </div>

        {/* Protein Card - Macronutrient tracking (blue themed) */}
        <div className="stat-card">
          <div className="stat-header">
            <h3>Protein</h3>
            <span className="stat-badge">Target: 150g</span>
          </div>
          <p className="stat-value">78g</p>
          {/* Progress bar with 'protein' class modifier for blue color scheme */}
          <div className="progress-bar protein">
            <div className="progress-fill" style={{ width: '52%' }}></div>
          </div>
          <p className="stat-remaining">72g remaining</p>
        </div>

        {/* Carbohydrates Card - Macronutrient tracking (orange themed) */}
        <div className="stat-card">
          <div className="stat-header">
            <h3>Carbs</h3>
            <span className="stat-badge">Target: 250g</span>
          </div>
          <p className="stat-value">145g</p>
          {/* Progress bar with 'carbs' class modifier for orange color scheme */}
          <div className="progress-bar carbs">
            <div className="progress-fill" style={{ width: '58%' }}></div>
          </div>
          <p className="stat-remaining">105g remaining</p>
        </div>

        {/* Fat Card - Macronutrient tracking (red themed) */}
        <div className="stat-card">
          <div className="stat-header">
            <h3>Fat</h3>
            <span className="stat-badge">Target: 65g</span>
          </div>
          <p className="stat-value">32g</p>
          {/* Progress bar with 'fat' class modifier for red color scheme */}
          <div className="progress-bar fat">
            <div className="progress-fill" style={{ width: '49%' }}></div>
          </div>
          <p className="stat-remaining">33g remaining</p>
        </div>
      </div>

      {/* 
        Recent Meals Section - Shows user's meal history for the current day
        Displays meal name, time, and calorie count in a vertical list
        Used for quick reference of logged meals
      */}
      <div className="recent-meals">
        <h2>Recent Meals</h2>
        <div className="meals-list">
          {/* Meal Entry 1: Chicken Salad - Lunch example */}
          <div className="meal-item">
            <div className="meal-info">
              <p className="meal-name">Chicken Salad</p>
              <p className="meal-time">Lunch · 12:30 PM</p>
            </div>
            <p className="meal-calories">450 kcal</p>
          </div>

          {/* Meal Entry 2: Oatmeal with Berries - Breakfast example */}
          <div className="meal-item">
            <div className="meal-info">
              <p className="meal-name">Oatmeal with Berries</p>
              <p className="meal-time">Breakfast · 8:00 AM</p>
            </div>
            <p className="meal-calories">320 kcal</p>
          </div>

          {/* Meal Entry 3: Apple & Almonds - Snack example */}
          <div className="meal-item">
            <div className="meal-info">
              <p className="meal-name">Apple & Almonds</p>
              <p className="meal-time">Snack · 3:00 PM</p>
            </div>
            <p className="meal-calories">180 kcal</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default DashboardPage

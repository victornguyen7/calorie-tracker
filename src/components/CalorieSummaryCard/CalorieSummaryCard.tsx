/**
 * CalorieSummaryCard Component
 * 
 * WHAT: Displays a summary of daily calorie intake showing eaten, goal, and remaining calories
 * 
 * HOW:
 * - Accepts props for eaten calories, daily goal, and calculated remaining
 * - Renders a progress bar showing percentage of goal consumed
 * - Shows large stat value with remaining calories as secondary info
 * - Uses color-coded visual feedback
 * 
 * PROPS:
 * - eaten: number - Current calorie intake
 * - goal: number - Daily calorie goal
 * - remaining: number - Remaining calories (calculated: goal - eaten)
 * 
 * TECH STACK:
 * - React 19.2.4 - UI component library
 * - TypeScript - Type safety
 * - CSS - Styling with progress bars and gradients
 */

import './CalorieSummaryCard.css'

interface CalorieSummaryCardProps {
  eaten: number
  goal: number
  remaining: number
}

const CalorieSummaryCard = ({ eaten, goal, remaining }: CalorieSummaryCardProps) => {
  // Calculate percentage of goal consumed
  const percentage = Math.min((eaten / goal) * 100, 100)

  return (
    <div className="calorie-summary-card">
      <div className="stat-header">
        <h3>Today's Intake</h3>
        <span className="stat-badge">Goal: {goal.toLocaleString()} kcal</span>
      </div>

      {/* Display current calorie intake */}
      <p className="stat-value">{eaten.toLocaleString()} kcal</p>

      {/* Progress bar showing percentage of daily goal */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>

      {/* Show remaining calories */}
      <p className="stat-remaining">{remaining.toLocaleString()} kcal remaining</p>
    </div>
  )
}

export default CalorieSummaryCard

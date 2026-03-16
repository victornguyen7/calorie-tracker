/**
 * MacroProgressBar Component
 * 
 * WHAT: Displays progress bars for macronutrients (protein, carbs, fats)
 * 
 * HOW:
 * - Accepts a macronutrient name and current/goal values
 * - Calculates percentage towards goal
 * - Renders a color-coded progress bar based on macro type
 * - Shows current amount and target goal
 * 
 * PROPS:
 * - name: string - Macronutrient name (Protein, Carbs, Fat)
 * - current: number - Current intake amount
 * - goal: number - Daily goal amount
 * - unit: string - Unit of measurement (g for grams)
 * - color: 'protein' | 'carbs' | 'fat' - Color theme for the bar
 * 
 * TECH STACK:
 * - React 19.2.4 - UI component library
 * - TypeScript - Type safety
 * - CSS - Styling with color-coded bars
 */

import './MacroProgressBar.css'

interface MacroProgressBarProps {
  name: string
  current: number
  goal: number
  unit: string
  color: 'protein' | 'carbs' | 'fat'
}

const MacroProgressBar = ({ name, current, goal, unit, color }: MacroProgressBarProps) => {
  // Calculate percentage of goal consumed
  const percentage = Math.min((current / goal) * 100, 100)
  const remaining = goal - current

  return (
    <div className="macro-progress-card">
      <div className="macro-header">
        <h3>{name}</h3>
        <span className="macro-badge">Target: {goal}{unit}</span>
      </div>

      {/* Display current macro amount */}
      <p className="macro-value">{current}{unit}</p>

      {/* Color-coded progress bar based on macro type */}
      <div className={`progress-bar ${color}`}>
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>

      {/* Show remaining amount for this macro */}
      <p className="macro-remaining">{remaining}{unit} remaining</p>
    </div>
  )
}

export default MacroProgressBar

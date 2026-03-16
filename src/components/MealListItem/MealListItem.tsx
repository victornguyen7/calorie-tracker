/**
 * MealListItem Component
 * 
 * WHAT: Displays a single logged meal item with food name, time, and calorie information
 * 
 * HOW:
 * - Accepts meal data as props
 * - Renders meal name, meal type (Breakfast, Lunch, etc), time, and calories
 * - Provides optional delete/edit functionality via callbacks
 * - Shows hover effects for better interactivity
 * - Responsive layout that works on mobile and desktop
 * 
 * PROPS:
 * - id: string - Unique identifier for the meal
 * - foodName: string - Name of the food item
 * - mealType: string - Type of meal (Breakfast, Lunch, Snack, Dinner)
 * - time: string - Time the meal was logged (e.g., "12:30 PM")
 * - calories: number - Calorie amount for this meal
 * - onDelete: (id: string) => void - Optional callback to delete meal
 * 
 * TECH STACK:
 * - React 19.2.4 - Functional component
 * - TypeScript - Type safety
 * - CSS - Styling with hover effects
 */

import './MealListItem.css'

interface MealListItemProps {
  id: string
  foodName: string
  mealType: string
  time: string
  calories: number
  onDelete?: (id: string) => void
}

const MealListItem = ({
  id,
  foodName,
  mealType,
  time,
  calories,
  onDelete,
}: MealListItemProps) => {
  return (
    <div className="meal-item">
      <div className="meal-info">
        <p className="meal-name">{foodName}</p>
        <p className="meal-time">
          {mealType} · {time}
        </p>
      </div>

      <div className="meal-actions">
        <p className="meal-calories">{calories.toLocaleString()} kcal</p>
        {onDelete && (
          <button
            className="meal-delete-btn"
            onClick={() => onDelete(id)}
            aria-label={`Delete ${foodName}`}
            title="Delete meal"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

export default MealListItem

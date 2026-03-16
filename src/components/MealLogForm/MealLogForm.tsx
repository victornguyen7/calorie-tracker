/**
 * MealLogForm Component
 * 
 * WHAT: Form for logging new meals with food name, quantity, and calorie information
 * 
 * HOW:
 * - Manages form state for food name, quantity, and calories
 * - Validates input before submission
 * - Accepts onSubmit callback to handle meal logging
 * - Clears form after successful submission
 * - Provides user-friendly input fields with proper labeling
 * 
 * PROPS:
 * - onSubmit: (meal: MealLog) => void - Callback when form is submitted
 * 
 * STATE:
 * - foodName: string - Name of the food item
 * - quantity: number - Quantity of food consumed
 * - calories: number - Calorie amount for the food
 * 
 * TECH STACK:
 * - React 19.2.4 - useState hook for form state
 * - TypeScript - Type safety
 * - CSS - Form styling with inputs and buttons
 */

import { useState } from 'react'
import './MealLogForm.css'

interface MealLogFormProps {
  onSubmit: (meal: MealLog) => void
}

export interface MealLog {
  foodName: string
  quantity: number
  calories: number
}

const MealLogForm = ({ onSubmit }: MealLogFormProps) => {
  const [foodName, setFoodName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [calories, setCalories] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setError('')

    // Validate inputs
    if (!foodName.trim()) {
      setError('Please enter a food name')
      return
    }
    
    if (!quantity || parseFloat(quantity) <= 0) {
      setError('Please enter a valid quantity')
      return
    }

    if (!calories || parseFloat(calories) < 0) {
      setError('Please enter valid calories')
      return
    }

    // Submit the meal
    onSubmit({
      foodName: foodName.trim(),
      quantity: parseFloat(quantity),
      calories: parseFloat(calories),
    })

    // Clear form
    setFoodName('')
    setQuantity('')
    setCalories('')
  }

  return (
    <form className="meal-log-form" onSubmit={handleSubmit}>
      <h3>Log a Meal</h3>
      
      {error && <div className="form-error">{error}</div>}

      <div className="form-group">
        <label htmlFor="foodName">Food Name</label>
        <input
          id="foodName"
          type="text"
          placeholder="e.g., Chicken Salad"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            placeholder="e.g., 250"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-input"
            step="0.1"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="calories">Calories</label>
          <input
            id="calories"
            type="number"
            placeholder="e.g., 450"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="form-input"
            step="1"
            min="0"
          />
        </div>
      </div>

      <button type="submit" className="form-button">
        Add Meal
      </button>
    </form>
  )
}

export default MealLogForm

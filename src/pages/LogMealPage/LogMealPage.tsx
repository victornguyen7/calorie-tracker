/**
 * LogMealPage Component
 * 
 * WHAT: Form page for users to log/add new meals with their nutritional information
 * 
 * HOW:
 * - React functional component with form handling
 * - Uses HTML form element with onSubmit handler
 * - Implements preventDefault() to prevent page reload on form submission
 * - Two-column responsive layout: Form (2fr) + Suggestions (1fr)
 * - Form validation using HTML5 required attributes
 * - Displays quick suggestion cards for common meals
 * 
 * TECH STACK:
 * - React 19.2.4 - Component framework
 * - TypeScript - Type-safe form event handling (React.FormEvent)
 * - HTML5 Form API - Form validation (required, min, step attributes)
 * - CSS Grid - Two-column responsive layout
 * - CSS - Modern styling with hover effects
 */

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import './LogMealPage.css'

const LogMealPage = () => {
  /**
   * handleSubmit Function
   * WHAT: Handles form submission for logging a new meal
   * HOW: 
   * - Accepts React.FormEvent<HTMLFormElement> as parameter
   * - Calls preventDefault() to prevent default form submission behavior
   * - Logs meal data to console (ready for API integration)
   * TECH: React event handling, TypeScript typing
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send form data to backend API
    console.log('Meal logged')
  }

  return (
    <PageWrapper
      title="Log Meal"
      description="Add a new meal to track your daily intake"
      icon="🍽️"
    >
      {/* 
        Main container with two-column layout:
        - Left (2fr): Meal form
        - Right (1fr): Quick suggestions
        Uses CSS Grid for responsive design
      */}
      <div className="log-meal-container">
        {/* 
          Meal Form Section
          WHAT: HTML form for collecting meal information
          HOW: Uses semantic form elements with labels and inputs
          TECH: HTML5 form, CSS styling, TypeScript event handling
        */}
        <form onSubmit={handleSubmit} className="meal-form">
          {/* 
            Meal Details Section
            Collects basic meal information: name, category, time
          */}
          <div className="form-section">
            <h3>Meal Details</h3>

            {/* Meal Name Input */}
            <div className="form-group">
              <label htmlFor="mealName">Meal Name *</label>
              <input
                id="mealName"
                type="text"
                placeholder="e.g., Grilled Chicken Salad"
                className="form-input"
                required
              />
            </div>

            {/* Category & Time Inputs - Side by side layout */}
            <div className="form-row">
              {/* Category Dropdown */}
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select id="category" className="form-input" required>
                  <option value="">Select Category</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>

              {/* Time Input - HTML5 time picker */}
              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input
                  id="time"
                  type="time"
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* 
            Nutritional Information Section
            Collects calorie and macronutrient data
            All fields optional except calories (required)
          */}
          <div className="form-section">
            <h3>Nutritional Information</h3>

            {/* Calories & Protein Row */}
            <div className="form-row">
              {/* Calories Input - Primary nutritional metric (required) */}
              <div className="form-group">
                <label htmlFor="calories">Calories (kcal) *</label>
                <input
                  id="calories"
                  type="number"
                  placeholder="0"
                  className="form-input"
                  required
                  min="0"
                />
              </div>

              {/* Protein Input - Optional macronutrient with decimal support */}
              <div className="form-group">
                <label htmlFor="protein">Protein (g)</label>
                <input
                  id="protein"
                  type="number"
                  placeholder="0"
                  className="form-input"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>

            {/* Carbohydrates & Fat Row */}
            <div className="form-row">
              {/* Carbohydrates Input - Optional macronutrient with decimal support */}
              <div className="form-group">
                <label htmlFor="carbs">Carbohydrates (g)</label>
                <input
                  id="carbs"
                  type="number"
                  placeholder="0"
                  className="form-input"
                  min="0"
                  step="0.1"
                />
              </div>

              {/* Fat Input - Optional macronutrient with decimal support */}
              <div className="form-group">
                <label htmlFor="fat">Fat (g)</label>
                <input
                  id="fat"
                  type="number"
                  placeholder="0"
                  className="form-input"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>

          {/* 
            Additional Notes Section
            Allows user to add optional notes about the meal
            Useful for recording preparation method, ingredients, etc.
          */}
          <div className="form-section">
            <h3>Additional Notes</h3>

            {/* Notes Textarea - Multi-line input for additional information */}
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                placeholder="Add any additional notes about this meal..."
                className="form-input textarea"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* 
            Form Actions
            Submit and Cancel buttons for form control
          */}
          <div className="form-actions">
            {/* Cancel Button - Type button to prevent form submission */}
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
            {/* Submit Button - Type submit to trigger handleSubmit */}
            <button type="submit" className="btn btn-primary">
              Log Meal
            </button>
          </div>
        </form>

        {/* 
          Quick Suggestions Sidebar
          WHAT: Pre-filled meal suggestions for quick logging
          HOW: Displays 4 common meals with icons and calorie counts
          TECH: CSS Grid (2 columns), hover effects, semantic structure
        */}
        <div className="quick-suggestions">
          <h3>Quick Suggestions</h3>
          {/* Suggestions Grid - 2 column responsive layout */}
          <div className="suggestions-grid">
            {/* Suggestion Card 1: Chicken Salad */}
            <div className="suggestion-card">
              <span className="suggestion-emoji">🥗</span>
              <p className="suggestion-name">Chicken Salad</p>
              <p className="suggestion-cal">450 kcal</p>
            </div>

            {/* Suggestion Card 2: Apple */}
            <div className="suggestion-card">
              <span className="suggestion-emoji">🍎</span>
              <p className="suggestion-name">Apple</p>
              <p className="suggestion-cal">95 kcal</p>
            </div>

            {/* Suggestion Card 3: Eggs & Toast */}
            <div className="suggestion-card">
              <span className="suggestion-emoji">🥚</span>
              <p className="suggestion-name">Eggs & Toast</p>
              <p className="suggestion-cal">380 kcal</p>
            </div>

            {/* Suggestion Card 4: Salmon */}
            <div className="suggestion-card">
              <span className="suggestion-emoji">🐟</span>
              <p className="suggestion-name">Salmon</p>
              <p className="suggestion-cal">280 kcal</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default LogMealPage

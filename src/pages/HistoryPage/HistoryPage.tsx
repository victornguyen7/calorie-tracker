/**
 * HistoryPage Component
 * 
 * WHAT: Displays user's meal history with timeline view, filtering, and management options
 * 
 * HOW:
 * - React functional component displaying meal entries in chronological order
 * - Groups meals by date for better organization
 * - Implements filter controls (date picker, category dropdown)
 * - Provides Edit and Delete buttons for meal management
 * - Uses semantic HTML for accessible structure
 * - Shows detailed nutrition info for each meal entry
 * 
 * TECH STACK:
 * - React 19.2.4 - Component framework
 * - TypeScript - Type-safe component
 * - CSS3 - Flexbox, Grid, Responsive design
 * - HTML5 - Form inputs (date, select), semantic elements
 * - JavaScript Date API - toISOString() for date formatting
 */

import PageWrapper from '../../components/PageWrapper/PageWrapper'
import './HistoryPage.css'

const HistoryPage = () => {
  return (
    <PageWrapper
      title="History"
      description="View your meal history and calorie tracking data"
      icon="📅"
    >
      {/* 
        Main History Container
        WHAT: Wrapper for all history content
        HOW: Flexbox column layout with gap between sections
        TECH: CSS Flexbox
      */}
      <div className="history-container">
        {/* 
          Filter Controls Section
          WHAT: Allows users to filter meal history by date and category
          HOW: Uses HTML5 date input and select dropdown
          TECH: HTML5 form controls, CSS Flexbox layout
        */}
        <div className="history-filters">
          {/* 
            Date Filter Input
            WHAT: Allows user to select a specific date
            HOW: HTML5 date input with default value set to today's date
            TECH: JavaScript Date API - toISOString().split('T')[0] formats today's date as YYYY-MM-DD
          */}
          <input
            type="date"
            className="filter-input"
            defaultValue={new Date().toISOString().split('T')[0]}
          />

          {/* 
            Category Filter Dropdown
            WHAT: Filters meals by type (All, Breakfast, Lunch, Dinner, Snack)
            HOW: HTML select element with predefined options
            TECH: HTML5 form control
          */}
          <select className="filter-input">
            <option value="">All Meals</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>

          {/* Search/Filter Button */}
          <button className="btn-filter">Search</button>
        </div>

        {/* 
          History Content Section
          WHAT: Contains date groups with meal entries
          HOW: Organized as date groups → meals timeline → individual meal entries
          TECH: Semantic HTML structure with CSS Flexbox
        */}
        <div className="history-content">
          {/* 
            Date Group 1: March 15, 2026
            WHAT: Container for all meals on a specific date
            HOW: Groups multiple meal entries with daily summary
            TECH: CSS styling for date header and summary info
          */}
          <div className="date-group">
            <h3 className="date-header">March 15, 2026</h3>
            {/* 
              Daily Summary
              WHAT: Shows total calories and macros for the day
              HOW: Displays aggregated nutritional data
              TECH: CSS background styling for visual distinction
            */}
            <p className="date-summary">Total: 2,150 kcal | Protein: 145g | Carbs: 280g | Fat: 72g</p>

            {/* 
              Meals Timeline
              WHAT: Vertical timeline of meals for the date
              HOW: Flexbox column layout with meal entries
              TECH: CSS Flexbox, gap spacing between items
            */}
            <div className="meals-timeline">
              {/* 
                Meal Entry 1: Breakfast
                WHAT: Single meal record with time, details, and actions
                HOW: Flexbox row layout with three sections: time, details, actions
                TECH: CSS Flexbox, semantic meal structure
              */}
              <div className="meal-entry">
                <div className="meal-time">08:00 AM</div>
                <div className="meal-details">
                  <h4>Breakfast - Oatmeal with Berries & Honey</h4>
                  <p>360 kcal • Protein: 12g • Carbs: 65g • Fat: 8g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 2: Lunch */}
              <div className="meal-entry">
                <div className="meal-time">12:30 PM</div>
                <div className="meal-details">
                  <h4>Lunch - Grilled Chicken Salad</h4>
                  <p>480 kcal • Protein: 45g • Carbs: 35g • Fat: 18g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 3: Snack */}
              <div className="meal-entry">
                <div className="meal-time">03:30 PM</div>
                <div className="meal-details">
                  <h4>Snack - Apple & Almond Butter</h4>
                  <p>210 kcal • Protein: 8g • Carbs: 28g • Fat: 10g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 4: Dinner */}
              <div className="meal-entry">
                <div className="meal-time">07:00 PM</div>
                <div className="meal-details">
                  <h4>Dinner - Salmon with Vegetables</h4>
                  <p>620 kcal • Protein: 52g • Carbs: 48g • Fat: 28g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 5: Evening Snack */}
              <div className="meal-entry">
                <div className="meal-time">09:30 PM</div>
                <div className="meal-details">
                  <h4>Snack - Greek Yogurt</h4>
                  <p>150 kcal • Protein: 20g • Carbs: 12g • Fat: 3g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>
            </div>
          </div>

          {/* 
            Date Group 2: March 14, 2026
            WHAT: Container for all meals on previous date
            HOW: Same structure as Date Group 1, shows historical data
            TECH: Reusable date group structure
          */}
          <div className="date-group">
            <h3 className="date-header">March 14, 2026</h3>
            <p className="date-summary">Total: 1,950 kcal | Protein: 135g | Carbs: 265g | Fat: 68g</p>

            <div className="meals-timeline">
              {/* Meal Entry 1: Breakfast from March 14 */}
              <div className="meal-entry">
                <div className="meal-time">07:30 AM</div>
                <div className="meal-details">
                  <h4>Breakfast - Eggs & Toast</h4>
                  <p>420 kcal • Protein: 18g • Carbs: 45g • Fat: 15g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 2: Lunch from March 14 */}
              <div className="meal-entry">
                <div className="meal-time">01:00 PM</div>
                <div className="meal-details">
                  <h4>Lunch - Turkey Sandwich</h4>
                  <p>520 kcal • Protein: 38g • Carbs: 52g • Fat: 18g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>

              {/* Meal Entry 3: Dinner from March 14 */}
              <div className="meal-entry">
                <div className="meal-time">08:30 PM</div>
                <div className="meal-details">
                  <h4>Dinner - Pasta Primavera</h4>
                  <p>680 kcal • Protein: 24g • Carbs: 92g • Fat: 22g</p>
                </div>
                <div className="meal-actions">
                  <button className="action-btn">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default HistoryPage

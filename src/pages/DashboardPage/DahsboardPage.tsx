/**
 * DashboardPage Component
 * 
 * WHAT: Main dashboard view that displays daily calorie intake and nutritional information
 * 
 * HOW: 
 * - Uses React functional component pattern
 * - Renders the PageWrapper component for consistent page layout
 * - Displays CalorieSummaryCard and MacroProgressBar components for nutrition tracking
 * - Shows MealLogForm for adding new meals
 * - Displays recent meals using MealListItem components
 * - Uses inline styles for dynamic progress bar widths
 * 
 * TECH STACK:
 * - React 19.2.4 - JavaScript library for building UI
 * - TypeScript - Type-safe JavaScript
 * - CSS3 - Styling with responsive grid layout
 * - React Functional Components - Modern React approach
 */

import { useState } from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import CalorieSummaryCard from '../../components/CalorieSummaryCard/CalorieSummaryCard'
import MacroProgressBar from '../../components/MacroProgressBar/MacroProgressBar'
import MealLogForm from '../../components/MealLogForm/MealLogForm'
import MealListItem from '../../components/MealListItem/MealListItem'
import type { MealLog } from '../../components/MealLogForm/MealLogForm'
import './DashboardPage.css'

interface Meal extends MealLog {
  id: string
  mealType: string
  time: string
}

const DashboardPage = () => {
  // Sample initial data - could be replaced with API calls
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: '1',
      foodName: 'Chicken Salad',
      quantity: 300,
      calories: 450,
      mealType: 'Lunch',
      time: '12:30 PM',
    },
    {
      id: '2',
      foodName: 'Oatmeal with Berries',
      quantity: 200,
      calories: 320,
      mealType: 'Breakfast',
      time: '8:00 AM',
    },
    {
      id: '3',
      foodName: 'Apple & Almonds',
      quantity: 150,
      calories: 180,
      mealType: 'Snack',
      time: '3:00 PM',
    },
  ])

  // Nutrition goals
  const CALORIE_GOAL = 2000
  const PROTEIN_GOAL = 150
  const CARBS_GOAL = 250
  const FAT_GOAL = 65

  // Calculate totals from meals
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
  const remainingCalories = CALORIE_GOAL - totalCalories

  // Handle adding a new meal
  const handleAddMeal = (newMeal: MealLog) => {
    const meal: Meal = {
      ...newMeal,
      id: Date.now().toString(),
      mealType: 'Logged',
      time: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    }
    setMeals([meal, ...meals])
  }

  // Handle deleting a meal
  const handleDeleteMeal = (id: string) => {
    setMeals(meals.filter((meal) => meal.id !== id))
  }

  return (
    <PageWrapper
      title="Dashboard"
      description="Monitor your daily calorie intake and nutrition goals"
      icon="📊"
    >
      {/* 
        Dashboard Grid Section - Displays nutrition summary and macro progress cards
        Uses CSS Grid for responsive layout (auto-fit columns with min-width 280px)
      */}
      <div className="dashboard-grid">
        {/* Calorie Summary Card - Primary nutrition metric */}
        <CalorieSummaryCard
          eaten={totalCalories}
          goal={CALORIE_GOAL}
          remaining={remainingCalories}
        />

        {/* Macro Progress Cards - Protein, Carbs, Fat tracking */}
        <MacroProgressBar
          name="Protein"
          current={78}
          goal={PROTEIN_GOAL}
          unit="g"
          color="protein"
        />
        <MacroProgressBar
          name="Carbs"
          current={145}
          goal={CARBS_GOAL}
          unit="g"
          color="carbs"
        />
        <MacroProgressBar
          name="Fat"
          current={32}
          goal={FAT_GOAL}
          unit="g"
          color="fat"
        />
      </div>

      {/* 
        Meal Log Form Section - Allows users to log new meals
        Positioned before the meal list so newly added meals appear at the top
      */}
      <MealLogForm onSubmit={handleAddMeal} />

      {/* 
        Recent Meals Section - Shows user's meal history for the current day
        Uses MealListItem component for each meal entry
      */}
      <div className="recent-meals">
        <h2>Recent Meals</h2>
        <div className="meals-list">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <MealListItem
                key={meal.id}
                id={meal.id}
                foodName={meal.foodName}
                mealType={meal.mealType}
                time={meal.time}
                calories={meal.calories}
                onDelete={handleDeleteMeal}
              />
            ))
          ) : (
            <div className="no-meals-message">
              <p>No meals logged yet. Add a meal to get started!</p>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}

export default DashboardPage

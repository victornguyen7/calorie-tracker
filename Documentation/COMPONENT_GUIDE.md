# Component Architecture & Usage Guide

## Component Hierarchy

```
DashboardPage
├── PageWrapper (existing)
├── Dashboard Grid
│   ├── CalorieSummaryCard
│   │   └── Shows: eaten/goal/remaining calories
│   ├── MacroProgressBar (Protein)
│   │   └── Shows: protein progress
│   ├── MacroProgressBar (Carbs)
│   │   └── Shows: carbs progress
│   └── MacroProgressBar (Fat)
│       └── Shows: fat progress
├── MealLogForm
│   └── Inputs: foodName, quantity, calories
└── Recent Meals Section
    ├── No meals message (conditionally shown)
    └── MealListItem[] (one per meal)
        └── Shows: meal details + delete button
```

## Component Data Flow

### 1. CalorieSummaryCard
- **Input:** eaten (number), goal (number), remaining (number)
- **Output:** Visual card with progress bar
- **Calculation:** Percentage = (eaten / goal) * 100

```tsx
<CalorieSummaryCard 
  eaten={1250} 
  goal={2000} 
  remaining={750} 
/>
```

### 2. MacroProgressBar
- **Input:** name, current, goal, unit, color
- **Output:** Color-coded progress card
- **Calculation:** Percentage = (current / goal) * 100

```tsx
<MacroProgressBar 
  name="Protein" 
  current={78} 
  goal={150} 
  unit="g" 
  color="protein" 
/>
```

### 3. MealLogForm
- **Input:** onSubmit callback
- **Output:** Form submission triggers parent callback
- **Validation:** Checks for empty/invalid inputs
- **Side Effects:** Clears form after submission

```tsx
<MealLogForm onSubmit={(meal) => setMeals([meal, ...meals])} />
```

### 4. MealListItem
- **Input:** id, foodName, mealType, time, calories, onDelete (optional)
- **Output:** Rendered meal item with optional delete button
- **Interaction:** Delete button triggers parent callback

```tsx
<MealListItem 
  id="1" 
  foodName="Salad" 
  mealType="Lunch" 
  time="12:30 PM" 
  calories={450} 
  onDelete={(id) => deleteMeal(id)} 
/>
```

## State Management in DashboardPage

```typescript
// meals state
const [meals, setMeals] = useState<Meal[]>([
  { id, foodName, quantity, calories, mealType, time },
  // ...
])

// Calculated values
const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0)
const remainingCalories = CALORIE_GOAL - totalCalories

// Handlers
const handleAddMeal = (newMeal: MealLog) => { ... }
const handleDeleteMeal = (id: string) => { ... }
```

## Styling Strategy

### Shared Design Tokens
- **Primary Color:** #567732 (Green)
- **Secondary Colors:** #3498db (Blue), #f39c12 (Orange), #e74c3c (Red)
- **Text Colors:** #2c3e50 (Dark), #95a5a6 (Light gray)
- **Base Unit:** 1rem (16px)

### Component-Specific Styles
Each component has its own CSS file following this pattern:
1. Main container styles
2. Header/title styles
3. Content/value styles
4. Interactive elements (buttons, inputs)
5. Responsive design breakpoints

### Responsive Breakpoints
- **Desktop:** > 1024px (grid layout)
- **Tablet:** 768px - 1024px (adjusted spacing)
- **Mobile:** < 768px (stacked layout)
- **Small Mobile:** < 480px (compact layout)

## Meal Data Structure

```typescript
interface MealLog {
  foodName: string
  quantity: number
  calories: number
}

interface Meal extends MealLog {
  id: string           // unique identifier
  mealType: string     // "Breakfast", "Lunch", "Snack", "Dinner", "Logged"
  time: string         // formatted time string
}
```

## Event Flow Examples

### Adding a Meal
```
User inputs food name, quantity, calories
    ↓
MealLogForm validates inputs
    ↓
Form calls onSubmit callback
    ↓
handleAddMeal creates Meal object with timestamp
    ↓
setMeals adds meal to state (unshift)
    ↓
DashboardPage re-renders with new meal
    ↓
totalCalories updates
    ↓
CalorieSummaryCard re-renders with new value
```

### Deleting a Meal
```
User clicks delete button on MealListItem
    ↓
MealListItem calls onDelete(id)
    ↓
handleDeleteMeal filters meals by id
    ↓
setMeals updates state
    ↓
DashboardPage re-renders
    ↓
totalCalories recalculates
    ↓
All dependent components update
```

## Key Features

### CalorieSummaryCard
✅ Dynamic percentage calculation
✅ Gradient progress bar
✅ Formatted number display
✅ Responsive card layout

### MacroProgressBar
✅ Color-coded by macro type
✅ Flexible unit support (g, mg, etc.)
✅ Remaining amount calculation
✅ Reusable for any macronutrient

### MealLogForm
✅ Input validation
✅ Error messaging
✅ Auto-clearing after submit
✅ Number input constraints
✅ Responsive form layout

### MealListItem
✅ Optional delete functionality
✅ Accessible delete button
✅ Hover effects
✅ Responsive design
✅ Formatted calorie display

## Integration Checklist

- [x] Create all four components
- [x] Add proper TypeScript types
- [x] Include comprehensive documentation
- [x] Create component-specific CSS
- [x] Update DashboardPage to use new components
- [x] Implement state management
- [x] Add callbacks for interactions
- [x] Test responsive design
- [x] Verify no compile errors
- [x] Update existing CSS cleanup

## Future Enhancement Opportunities

1. **Macro Tracking per Meal:** Add protein/carbs/fat breakdown for each logged meal
2. **Persistent Storage:** Save meals to localStorage or backend API
3. **Meal Presets:** Quick-add common meals from a database
4. **Date Navigation:** View meals from previous days
5. **Edit Functionality:** Modify previously logged meals
6. **Meal Search:** Find and log meals from nutrition database
7. **Custom Goals:** Allow users to set personalized nutrition goals
8. **Export Data:** Download meal log as CSV/PDF
9. **Notifications:** Alert when approaching calorie goal
10. **Analytics:** Weekly/monthly nutrition trends

# Calorie Tracker - Routing Guide

## Overview
The application uses React Router v6 to manage navigation between pages. The sidebar provides navigation links that are automatically highlighted based on the current route.

## Routes Configuration

### Available Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirects to `/dashboard` | Home page redirect |
| `/dashboard` | DashboardPage | View daily stats and recent meals |
| `/log-meal` | LogMealPage | Add a new meal to track |
| `/history` | HistoryPage | View meal history and past records |
| `*` | Redirects to `/dashboard` | Catch-all for undefined routes |

## Navigation Structure

### Sidebar Navigation
The sidebar (`src/components/Sidebar/Sidebar.tsx`) contains the main navigation:

1. **Dashboard** (📊) → `/dashboard`
   - View daily calorie intake
   - Track macronutrients (Protein, Carbs, Fat)
   - See recent meals

2. **Log Meal** (🍽️) → `/log-meal`
   - Add new meals with nutritional info
   - Quick suggestions for common meals
   - Form validation for required fields

3. **History** (📅) → `/history`
   - View past meal entries
   - Filter by date and meal type
   - Edit or delete meals

## Features

### Active Route Highlighting
- The sidebar automatically highlights the current active route
- Desktop: Green background with left border indicator
- Mobile: Bottom border indicator (labels hidden)

### Responsive Navigation
- **Desktop (>768px)**: Full sidebar with labels and icons
- **Mobile (≤768px)**: Icon-only navigation bar, labels hidden on hover

### Page Wrapper
All pages use the `PageWrapper` component for consistent styling:
- Page title with emoji icon
- Page description
- Smooth animations

## Usage Example

To navigate to a page:
```tsx
import { Link } from 'react-router-dom'

// In your component
<Link to="/log-meal">Log a Meal</Link>
```

Or programmatically:
```tsx
import { useNavigate } from 'react-router-dom'

const MyComponent = () => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/dashboard')
  }
  
  return <button onClick={handleClick}>Go to Dashboard</button>
}
```

## File Structure

```
src/
├── App.tsx (Router setup here)
├── components/
│   ├── AppLayout/
│   │   ├── AppLayout.tsx (Layout wrapper)
│   │   └── AppLayout.css
│   ├── Sidebar/
│   │   ├── Sidebar.tsx (Navigation)
│   │   └── Sidebar.css
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.css
│   └── PageWrapper/
│       ├── PageWrapper.tsx (Reusable page header)
│       └── PageWrapper.css
└── pages/
    ├── DashboardPage/
    │   ├── DahsboardPage.tsx (Note: typo in filename)
    │   └── DashboardPage.css
    ├── LogMealPage/
    │   ├── LogMealPage.tsx
    │   └── LogMealPage.css
    └── HistoryPage/
        ├── HistoryPage.tsx
        └── HistoryPage.css
```

## Adding New Routes

To add a new route:

1. Create a new page component in `src/pages/`
2. Add a route in `App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add a navigation link in `Sidebar.tsx`:
   ```tsx
   const navLinks = [
     // ... existing links
     { path: '/new-page', label: 'New Page', icon: '✨' },
   ]
   ```

## Notes
- React Router DOM is required (`npm install react-router-dom`)
- All routes are absolute paths starting with `/`
- The sidebar uses `useLocation()` hook to determine active route
- Mobile navigation hides labels for compact display

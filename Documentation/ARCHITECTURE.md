# Application Architecture Diagram

## App Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        App.tsx                              │
│                   (BrowserRouter setup)                     │
└─────────────────────────────────────────────────────────────┘
                             │
        ┌────────────────────┴────────────────────┐
        │                                         │
    ┌───▼───┐                            ┌────────▼────────┐
    │ Navbar│                            │   AppLayout     │
    │ (Fixed)                            │  (Flex wrapper) │
    └───────┘                            │                 │
                          ┌──────────────┼──────────────┐
                          │              │              │
                      ┌───▼───┐      ┌───▼────────────┐
                      │Sidebar │      │ Main Content   │
                      │(Nav)   │      │  (Routes)      │
                      └───────┘      │                │
                                     │  ┌──────────────┤
                                     │  │              │
                        ┌────────────┼──┼──────┐
                        │            │  │      │
                    ┌───▼─────┐  ┌──▼─┴──┐ ┌─▼──────┐
                    │Dashboard│  │LogMeal│ │History │
                    │  Page   │  │ Page  │ │ Page   │
                    └─────────┘  └───────┘ └────────┘
```

## Navigation Flow

```
User clicks sidebar link
       │
       ▼
Link to="/dashboard" (or other routes)
       │
       ▼
Router updates URL
       │
       ▼
useLocation() detects change
       │
       ▼
Sidebar highlights active route
       │
       ▼
Route matches and renders component
       │
       ▼
PageWrapper displays page with header
       │
       ▼
Page content displays with animations
```

## Route Map

```
/
├── / (redirects to /dashboard)
├── /dashboard → DashboardPage
├── /log-meal → LogMealPage
├── /history → HistoryPage
└── /* (undefined routes redirect to /dashboard)
```

## Component Hierarchy

```
App (BrowserRouter)
│
├── Navbar (sticky header)
│   ├── Brand Logo
│   ├── Search Bar
│   └── Action Buttons
│
└── AppLayout (flex container)
    │
    ├── Sidebar (navigation)
    │   ├── Header
    │   ├── Nav Links (with active detection)
    │   └── Footer
    │
    └── Main Content (flex grow)
        │
        └── Routes
            │
            ├── Route: /dashboard
            │   └── DashboardPage (with PageWrapper)
            │       ├── Page Header
            │       ├── Stat Cards (4x)
            │       └── Recent Meals
            │
            ├── Route: /log-meal
            │   └── LogMealPage (with PageWrapper)
            │       ├── Page Header
            │       ├── Meal Form
            │       │   ├── Meal Details
            │       │   ├── Nutritional Info
            │       │   └── Notes
            │       └── Quick Suggestions
            │
            └── Route: /history
                └── HistoryPage (with PageWrapper)
                    ├── Page Header
                    ├── Filter Controls
                    └── Meals Timeline
                        ├── Date Group 1
                        │   └── Meal Entries
                        └── Date Group 2
                            └── Meal Entries
```

## Data Flow for Navigation

```
                    ┌──────────────┐
                    │ useLocation()│
                    └──────┬───────┘
                           │
            ┌──────────────┴──────────────┐
            │                             │
        ┌───▼────┐                  ┌────▼─────┐
        │Get path│                  │Compare   │
        └───┬────┘                  │with nav  │
            │                       │links     │
            └──────────────┬────────┴──────┬───┘
                          │                │
                    ┌─────▼────┐      ┌────▼──────┐
                    │Apply      │      │Highlight  │
                    │.active    │      │active     │
                    │class      │      │route      │
                    └───────────┘      └───────────┘
```

## Responsive Behavior

### Desktop (>768px)
```
┌──────────────────────────────────────┐
│            Navbar (sticky)           │
├─────────────┬──────────────────────┐
│   Sidebar   │                      │
│ (250px)     │   Main Content       │
│ (vertical)  │   (flex grow)        │
│             │                      │
│  Dashboard  │   Page Content       │
│  Log Meal   │   (Responsive Grid)  │
│  History    │                      │
└─────────────┴──────────────────────┘
```

### Mobile (≤768px)
```
┌────────────────────────┐
│   Navbar (sticky)      │
├────────────────────────┤
│  Sidebar (horizontal)  │
│  📊 🍽️ 📅             │
├────────────────────────┤
│                        │
│   Main Content         │
│   (Single Column)      │
│                        │
└────────────────────────┘
```

## Active Route Indicator

### Desktop
```
┌─────────────────┐
│ 📊 Dashboard    │ ← Active (Green bg, left border)
├─────────────────┤
│ 🍽️ Log Meal    │ ← Inactive
├─────────────────┤
│ 📅 History      │ ← Inactive
└─────────────────┘
```

### Mobile
```
┌────────────────────────┐
│ 📊 🍽️ 📅 (Icons)       │ ← Icons only
├────────────────────────┤
│ ▔▔▔ (Blue underline)   │ ← Active indicator
└────────────────────────┘
```

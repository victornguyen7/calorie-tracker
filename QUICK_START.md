# Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 19.2.4
- React Router DOM (for navigation)
- Vite (development server)
- TypeScript

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the URL shown in your terminal)

### 3. Navigate the App

Once running, you'll see:

```
┌─ Navbar (Search, Notifications, Profile)
├─ Sidebar Navigation
│  ├── 📊 Dashboard - View daily stats
│  ├── 🍽️ Log Meal - Add new meals
│  └── 📅 History - View past meals
└─ Main Content Area
```

## Available Routes

| URL | Page | Purpose |
|-----|------|---------|
| `/dashboard` | Dashboard | View today's calorie intake and stats |
| `/log-meal` | Log Meal | Add a new meal entry |
| `/history` | History | View meal history with timeline |

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Run Linting

```bash
npm run lint
```

Checks code quality and TypeScript errors.

## Project Structure

```
calorie-tracker/
├── src/
│   ├── App.tsx              ← Main app with routing
│   ├── App.css              ← App styling
│   ├── index.css            ← Global styles
│   ├── main.tsx             ← Entry point
│   │
│   ├── components/
│   │   ├── Navbar/          ← Top navigation
│   │   ├── Sidebar/         ← Left sidebar navigation
│   │   ├── AppLayout/       ← Layout wrapper
│   │   └── PageWrapper/     ← Page header wrapper
│   │
│   └── pages/
│       ├── DashboardPage/   ← Dashboard route
│       ├── LogMealPage/     ← Log meal form
│       └── HistoryPage/     ← Meal history
│
├── public/                  ← Static assets
├── package.json             ← Dependencies
├── vite.config.ts           ← Vite config
└── tsconfig.json            ← TypeScript config
```

## Key Features

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Sidebar adapts to mobile screens

✅ **Navigation**
- React Router v6 for client-side routing
- Active route highlighting
- Smooth page transitions

✅ **Pages**
- **Dashboard**: Daily calorie tracking with stats
- **Log Meal**: Form to add new meals
- **History**: Timeline view of meal entries

✅ **Styling**
- Tailwind CSS ready
- Custom CSS with modern design
- Smooth animations and transitions

## Common Tasks

### Add a New Page

1. Create page component: `src/pages/MyPage/MyPage.tsx`
2. Create page styles: `src/pages/MyPage/MyPage.css`
3. Import in `App.tsx` and add route:
   ```tsx
   import MyPage from './pages/MyPage/MyPage'
   
   <Route path="/my-page" element={<MyPage />} />
   ```
4. Add navigation link in `src/components/Sidebar/Sidebar.tsx`:
   ```tsx
   const navLinks = [
     // ... existing
     { path: '/my-page', label: 'My Page', icon: '✨' },
   ]
   ```

### Update Sidebar Navigation

Edit `src/components/Sidebar/Sidebar.tsx`:
```tsx
const navLinks = [
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/log-meal', label: 'Log Meal', icon: '🍽️' },
  { path: '/history', label: 'History', icon: '📅' },
  // Add more links here
]
```

### Customize Colors

Edit `src/App.css` or component-specific CSS files:
```css
/* Brand green color */
--primary-color: #567732;

/* Dark backgrounds */
--dark-bg: #2c3e50;

/* Light text */
--light-text: #ecf0f1;
```

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npm run build
```
Shows compilation errors.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation Files

- **ROUTING.md** - Detailed routing documentation
- **SETUP_SUMMARY.md** - Complete setup overview
- **ARCHITECTURE.md** - Visual architecture diagrams

## Getting Help

1. Check TypeScript errors: Run `npm run build`
2. Check linting issues: Run `npm run lint`
3. Check the browser console for runtime errors
4. Review the documentation files

## Next Steps

1. ✅ Customize the app colors and styling
2. ✅ Add more pages as needed
3. ✅ Connect to a backend API
4. ✅ Add user authentication
5. ✅ Implement data persistence

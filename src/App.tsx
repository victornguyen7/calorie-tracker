import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
// Tell TypeScript to ignore the missing declaration for this JS module.
// Consider adding a ./components/Navbar/Navbar.d.ts file later for proper types.
// @ts-ignore
import Navbar from './components/Navbar/Navbar'
import AppLayout from './components/AppLayout/AppLayout'
import DashboardPage from './pages/DashboardPage/DahsboardPage'
import LogMealPage from './pages/LogMealPage/LogMealPage'
import HistoryPage from './pages/HistoryPage/HistoryPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/log-meal" element={<LogMealPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </AppLayout>
      </div>
    </BrowserRouter>
  )
}

export default App


import './App.css'
// Tell TypeScript to ignore the missing declaration for this JS module.
// Consider adding a ./components/Navbar/Navbar.d.ts file later for proper types.
// @ts-ignore
import Navbar from './components/Navbar/Navbar'
import AppLayout from './components/AppLayout/AppLayout'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppLayout>
        <div className="dashboard">
          <h1>Welcome to Calorie Tracker</h1>
          <p>Track your daily calorie intake and maintain a healthy lifestyle.</p>
          
          <div className="cards-container">
            <div className="card">
              <h3>Today's Intake</h3>
              <p className="stat">0 / 2000 kcal</p>
              <p className="description">Track your meals for today</p>
            </div>
            
            <div className="card">
              <h3>Weekly Average</h3>
              <p className="stat">0 kcal</p>
              <p className="description">Your weekly consumption</p>
            </div>
            
            <div className="card">
              <h3>Meals Logged</h3>
              <p className="stat">0</p>
              <p className="description">Meals recorded today</p>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default App


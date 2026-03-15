import React from 'react'
// Tell TypeScript to ignore the missing declaration for this JS module.
// Consider adding a ./components/Navbar/Navbar.d.ts file later for proper types.
// @ts-ignore
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <div className = 'container'>
      <Navbar />
    </div>
  )
}

export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>} />
        <Route path="/log" element={<h1>Log Meal</h1>} />
        <Route path="/history" element={<h1>History</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import ScenarioPage from './pages/ScenarioPage'
import CostSimulator from './pages/CostSimulator'
import ProgressPage from './pages/ProgressPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="learn/:incoterm" element={<LearnPage />} />
        <Route path="scenario" element={<ScenarioPage />} />
        <Route path="cost-simulator" element={<CostSimulator />} />
        <Route path="progress" element={<ProgressPage />} />
      </Route>
    </Routes>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Dashboard from './routes/Dashboard'

const MindGame = lazy(() => import('./routes/MindGame'))
const BodyGame = lazy(() => import('./routes/BodyGame'))
const SpiritGame = lazy(() => import('./routes/SpiritGame'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mind" element={<MindGame />} />
          <Route path="/body" element={<BodyGame />} />
          <Route path="/spirit" element={<SpiritGame />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

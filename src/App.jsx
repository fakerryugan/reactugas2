import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Team from './components/Team'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column" style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Curriculum from "./pages/Curriculum"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-white">
        <Navbar />
        <main className="pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
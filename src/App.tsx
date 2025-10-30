import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Curriculum from "./pages/Curriculum"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0a192f] text-white">
        <Navbar />

        {/* Contenido principal */}
        <main className="grow pt-20 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </Router>
  )
}
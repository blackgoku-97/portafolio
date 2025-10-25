import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Talentos from "./pages/Talentos"
import Misiones from "./pages/Misiones"
import Mapa from "./pages/Mapa"
import Contacto from "./pages/Contacto"
import Curriculum from "./pages/Curriculum"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-start bg-slate-900 text-white">
        {/* Texto superior */}
        <h1 className="text-5xl font-extrabold text-amber-400 mt-10 mb-6 text-center">
          Bienvenido al Mundo Web
        </h1>

        {/* Menú de navegación */}
        <nav className="flex gap-6 p-4 bg-slate-800/70 text-amber-300 font-bold shadow-md rounded-lg">
          <Link to="/talentos">Talentos</Link>
          <Link to="/misiones">Misiones</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/curriculum">Currículum</Link>
        </nav>

        {/* Contenido centrado */}
        <div className="grow w-full flex items-center justify-center">
          <Routes>
            <Route path="/talentos" element={<Talentos />} />
            <Route path="/misiones" element={<Misiones />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="*" element={<Talentos />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
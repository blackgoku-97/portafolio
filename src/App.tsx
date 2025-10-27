import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

import Talentos from "./pages/Talentos"
import Misiones from "./pages/Misiones"
import Mapa from "./pages/Mapa"
import Contacto from "./pages/Contacto"
import Curriculum from "./pages/Curriculum"

export default function App() {
  // Inicialización de partículas
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Router>
      <div
        className="min-h-screen flex flex-col items-center justify-start text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/fondo-tech.jpeg')" }}
      >
        {/* Partículas animadas */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0"
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#00f0ff" },
              links: {
                color: "#00f0ff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-amber-400 mt-10 mb-6 text-center drop-shadow-lg">
            Bienvenido al Mundo Web
          </h1>

          <nav className="flex gap-6 p-4 bg-slate-800/70 text-amber-300 font-bold shadow-md rounded-lg mb-8">
            <Link className="hover:text-amber-200 transition" to="/talentos">Talentos</Link>
            <Link className="hover:text-amber-200 transition" to="/misiones">Misiones</Link>
            <Link className="hover:text-amber-200 transition" to="/mapa">Mapa</Link>
            <Link className="hover:text-amber-200 transition" to="/contacto">Contacto</Link>
            <Link className="hover:text-amber-200 transition" to="/curriculum">Currículum</Link>
          </nav>

          <div className="grow w-full flex items-center justify-center px-4 pb-10">
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
      </div>
    </Router>
  )
}
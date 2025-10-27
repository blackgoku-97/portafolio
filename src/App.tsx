import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"

import Talentos from "./pages/Talentos"
import Misiones from "./pages/Misiones"
import Mapa from "./pages/Mapa"
import Contacto from "./pages/Contacto"
import Curriculum from "./pages/Curriculum"

export default function App() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine) // carga la versión slim
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <Router>
      <div
        className="min-h-screen flex flex-col items-center justify-start text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/fondo-tech.jpeg')" }}
      >
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0"
            options={{
              background: { color: "transparent" },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  resize: { enable: true }
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
                  enable: false,
                  opacity: 0.3,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.6,
                  direction: "none",
                  outModes: { default: "out" },
                },
                number: { density: { enable: true, width: 800, height: 800 }, value: 120 },
                opacity: { value: 0.8 },
                shape: { type: "circle" },
                size: { value: { min: 2, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        )}

        {/* Contenido principal */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-amber-400 mt-10 mb-6 text-center drop-shadow-lg">
            Bienvenido al Mundo Web
          </h1>

          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 bg-slate-800/70 text-amber-300 font-bold shadow-md rounded-lg mb-8 w-full sm:w-auto items-center">
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
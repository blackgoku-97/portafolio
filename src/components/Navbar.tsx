import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-slate-900/80 text-cyan-400 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Nombre */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Devfolio
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="sm:hidden text-cyan-400 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row sm:items-center 
             gap-4 sm:gap-8 mt-4 sm:mt-0 
             w-full sm:w-auto text-center sm:text-left`}
        >
          <Link to="/" className="block py-2 hover:text-white">Inicio</Link>
          <Link to="/skills" className="block py-2 hover:text-white">Habilidades</Link>
          <Link to="/projects" className="block py-2 hover:text-white">Proyectos</Link>
          <Link to="/curriculum" className="block py-2 hover:text-white">Currículum</Link>
          <Link to="/contact" className="block py-2 hover:text-white">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a192f] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Devfolio</h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú en desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/skills">Habilidades</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/curriculum">Currículum</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>

      {/* Overlay oscuro con fade-in/fade-out */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Menú móvil con animación slide-in/slide-out */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a192f] shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-6 py-8 space-y-6">
          <Link to="/" onClick={() => setOpen(false)} className="block w-full py-2 border-b border-gray-700">Inicio</Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="block w-full py-2 border-b border-gray-700">Habilidades</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block w-full py-2 border-b border-gray-700">Proyectos</Link>
          <Link to="/curriculum" onClick={() => setOpen(false)} className="block w-full py-2 border-b border-gray-700">Currículum</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block w-full py-2">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
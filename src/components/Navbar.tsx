import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

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
    <nav className="fixed top-0 left-0 w-full bg-[#0a192f] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo con gradiente */}
        <h1 className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Devfolio
        </h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl text-cyan-400 hover:text-blue-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú en desktop */}
        <ul className="hidden md:flex gap-6">
          {[
            { to: "/", label: "Inicio" },
            { to: "/skills", label: "Habilidades" },
            { to: "/projects", label: "Proyectos" },
            { to: "/curriculum", label: "Currículum" },
            { to: "/contact", label: "Contacto" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    : "text-gray-300 hover:text-cyan-400 transition-colors"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Menú móvil */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a192f] shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-start px-6 py-8 space-y-6">
          {[
            { to: "/", label: "Inicio" },
            { to: "/skills", label: "Habilidades" },
            { to: "/projects", label: "Proyectos" },
            { to: "/curriculum", label: "Currículum" },
            { to: "/contact", label: "Contacto" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block w-full py-2 border-b border-gray-700 transition-colors ${
                  isActive
                    ? "font-semibold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    : "text-gray-300 hover:text-cyan-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
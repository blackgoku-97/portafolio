"use client"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes, FaTools, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa"

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed w-full top-0 z-50 
                    backdrop-blur-md border-b border-white/10">
      {/* Título como enlace al Home */}
      <Link href="/" className="text-xl font-bold tracking-wide hover:text-pink-300 transition">
        DevPerez
      </Link>

      {/* Botón hamburguesa en móvil */}
      <button
        className="md:hidden text-pink-300 text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú en desktop */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li><Link href="/habilidades" className="flex items-center gap-2 hover:text-pink-300 transition"><FaTools /> Habilidades</Link></li>
        <li><Link href="/proyectos" className="flex items-center gap-2 hover:text-pink-300 transition"><FaProjectDiagram /> Proyectos</Link></li>
        <li><Link href="/curriculum" className="flex items-center gap-2 hover:text-pink-300 transition"><FaFileAlt /> Currículum</Link></li>
        <li><Link href="/contacto" className="flex items-center gap-2 hover:text-pink-300 transition"><FaEnvelope /> Contacto</Link></li>
      </ul>

      {/* Menú desplegable en móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 text-sm font-medium md:hidden">
          <li><Link href="/habilidades" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-pink-300 transition"><FaTools /> Habilidades</Link></li>
          <li><Link href="/proyectos" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-pink-300 transition"><FaProjectDiagram /> Proyectos</Link></li>
          <li><Link href="/curriculum" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-pink-300 transition"><FaFileAlt /> Currículum</Link></li>
          <li><Link href="/contacto" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-pink-300 transition"><FaEnvelope /> Contacto</Link></li>
        </ul>
      )}
    </nav>
  )
}


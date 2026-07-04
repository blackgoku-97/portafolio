"use client"
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes, FaTools, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa"
import type { IconType } from "react-icons"

const NAV_LINKS: { href: string; label: string; icon: IconType }[] = [
  { href: "/habilidades", label: "Habilidades", icon: FaTools },
  { href: "/proyectos", label: "Proyectos", icon: FaProjectDiagram },
  { href: "/curriculum", label: "Currículum", icon: FaFileAlt },
  { href: "/contacto", label: "Contacto", icon: FaEnvelope },
]

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
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú en desktop */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {NAV_LINKS.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href} className="flex items-center gap-2 hover:text-pink-300 transition">
              <Icon /> {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menú desplegable en móvil */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-6 text-sm font-medium md:hidden">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 hover:text-pink-300 transition"
              >
                <Icon /> {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaCheckCircle, FaShieldAlt, FaCode, FaGlobe } from "react-icons/fa"

export const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-center px-4 
                 pt-28 sm:pt-20 md:pt-0"
    >
      <Image
        src="/perfil.jpg"
        alt="Ricardo Pérez"
        loading="eager"
        width={160}
        height={160}
        className="rounded-full border-4 border-indigo-500 shadow-lg"
      />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-4xl font-extrabold text-indigo-500 tracking-wide 
                   sm:text-3xl md:text-5xl font-sans"
      >
        Ingeniero Informático · Desarrollo Web y Móvil
      </motion.h1>

      <p className="mt-4 text-lg max-w-md">
        Creo aplicaciones rápidas, confiables y fáciles de usar, 
        con enfoque en diseño moderno y experiencia de usuario.
      </p>

      {/* Botones CTA */}
      <div className="mt-6 flex gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md">
          Ver Proyectos
        </button>
        <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md">
          Contacto
        </button>
      </div>

      {/* Bloque de valor agregado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-10 max-w-2xl bg-black/30 backdrop-blur-md border border-white/10 
                   rounded-lg p-6 text-left"
      >
        <h2 className="text-xl font-semibold mb-4 text-pink-300">¿Por qué contratarme?</h2>
        <ul className="space-y-3 text-gray-200 text-sm">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="h-5 w-5 text-green-400" />
            Experiencia creando aplicaciones útiles y fáciles de usar.
          </li>
          <li className="flex items-center gap-2">
            <FaShieldAlt className="h-5 w-5 text-blue-400" />
            Soluciones confiables que funcionan bien a largo plazo.
          </li>
          <li className="flex items-center gap-2">
            <FaCode className="h-5 w-5 text-indigo-400" />
            Código claro y organizado que facilita el trabajo en equipo.
          </li>
          <li className="flex items-center gap-2">
            <FaGlobe className="h-5 w-5 text-pink-400" />
            Diseño adaptable para cualquier dispositivo y usuario.
          </li>
        </ul>
      </motion.div>
    </section>
  )
}

"use client"

import { FaUserTie } from "react-icons/fa"
import { motion } from "framer-motion"

export const Resumen = () => {
  return (
    <section className="mb-12 border-b border-gray-700 pb-8">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-300 mb-4 flex items-center gap-2"
      >
        <FaUserTie className="text-cyan-400" /> Resumen
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-gray-200 leading-relaxed"
      >
        <p>
          Ingeniero Informático con experiencia en desarrollo de aplicaciones y soluciones digitales. 
          Me interesa crear proyectos que sean rápidos, confiables y fáciles de usar.
        </p>

        <p>
          Mi diferencia está en la capacidad de <span className="font-semibold text-cyan-400">resolver problemas </span> 
          de manera práctica y aportar ideas nuevas que mejoren los resultados de un equipo o empresa.
        </p>

        <p>
          Puedo aportar <span className="font-semibold text-cyan-400">organización, trabajo en equipo y aprendizaje constante</span>, 
          asegurando que cada proyecto avance con calidad y cumpla objetivos reales.
        </p>
      </motion.div>
    </section>
  )
}

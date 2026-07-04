"use client"

import { FaUserTie } from "react-icons/fa"
import { motion } from "framer-motion"
import { resumen } from "@/data/curriculum"
import { SectionHeader } from "./SectionHeader"

export const Resumen = () => {
  return (
    <section className="mb-12 border-b border-gray-700 pb-8">
      <SectionHeader icon={<FaUserTie />} title="Resumen" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-gray-200 leading-relaxed"
      >
        {resumen.map((parrafo) => (
          <p key={parrafo.texto}>
            {parrafo.destacado
              ? parrafo.texto.split(parrafo.destacado).map((chunk, idx, arr) => (
                  <span key={idx}>
                    {chunk}
                    {idx < arr.length - 1 && (
                      <span className="font-semibold text-cyan-400">{parrafo.destacado}</span>
                    )}
                  </span>
                ))
              : parrafo.texto}
          </p>
        ))}
      </motion.div>
    </section>
  )
}

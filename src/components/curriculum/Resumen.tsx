"use client";

import { FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

export const Resumen = () => {
  return (
    <section className="mb-12 border-b border-gray-700 pb-8">
      {/* Título animado */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-300 mb-4 flex items-center gap-2"
      >
        <FaUserTie className="text-cyan-400" /> Resumen
      </motion.h2>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-gray-200 leading-relaxed"
      >
        {/* Texto moderno */}
        <p>
          Ingeniero Informático con experiencia en{" "}
          <span className="font-semibold text-cyan-400">frontend, backend y mobile</span>, 
          apasionado por crear soluciones digitales que combinan rendimiento, escalabilidad y diseño moderno.
        </p>

        <p>
          He trabajado con tecnologías clave en el ecosistema full stack:
        </p>

        {/* Badges de tecnologías */}
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold">React</span>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold">Node.js</span>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold">Java + Spring</span>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold">SQL / NoSQL</span>
          <span className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold">Flutter</span>
        </div>

        <p>
          Actualmente impulso mi crecimiento en{" "}
          <span className="font-semibold text-cyan-400">Flutter y desarrollo mobile</span>, 
          llevando mi enfoque full stack hacia aplicaciones multiplataforma. 
          Me caracterizo por una mentalidad{" "}
          <span className="font-semibold text-cyan-400">proactiva, organizada y orientada a resultados</span>, 
          aportando valor en equipos multidisciplinarios y proyectos que buscan impacto real.
        </p>
      </motion.div>
    </section>
  );
}
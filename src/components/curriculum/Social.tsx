"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Social = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 border-t border-gray-700 pt-6"
    >
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
        <FaEnvelope className="text-cyan-400" /> Contacto
      </h2>
      <div className="bg-slate-700/40 rounded-lg p-4">
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            <a
              href="mailto:rpe19971210@gmail.com"
              className="hover:text-cyan-300 transition-colors"
            >
              Correo Profesional
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaGithub className="text-cyan-400" />
            <a
              href="https://github.com/blackgoku-97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaLinkedin className="text-cyan-400" />
            <a
              href="https://www.linkedin.com/in/ricardo-perez-a31474229/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
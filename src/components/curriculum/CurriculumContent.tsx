"use client";

import { ExperienciaLaboral, Educacion, Social, Resumen} from "@/components";
import { motion } from "framer-motion";

export const CurriculumContent = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white"
    >
      <div className="w-full max-w-4xl bg-slate-800/70 rounded-xl shadow-lg p-10">
        {/* Título principal */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide">
            Currículum
          </h1>
        </header>

        {/* Secciones */}
        <Resumen />
        <div className="border-t border-gray-700 my-8"></div>
        <ExperienciaLaboral />
        <div className="border-t border-gray-700 my-8"></div>
        <Educacion />
        <div className="border-t border-gray-700 my-8"></div>
        <Social />

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ricardo Pérez — Ingeniero Informático
        </footer>
      </div>
    </motion.main>
  );
}
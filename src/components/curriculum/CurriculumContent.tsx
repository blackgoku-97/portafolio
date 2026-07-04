"use client";

import { ExperienciaLaboral, Educacion, Certificaciones, Social, Resumen } from "@/components";
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
        <Social />
        <Resumen />
        <div className="border-t border-gray-700 my-8"></div>
        <ExperienciaLaboral />
        <div className="border-t border-gray-700 my-8"></div>
        <Educacion />
        <div className="border-t border-gray-700 my-8"></div>
        <Certificaciones />

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Ricardo Pérez — Ingeniero Informático
        </footer>
      </div>
    </motion.main>
  );
}

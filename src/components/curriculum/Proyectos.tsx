"use client";

import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { proyectos, type ProyectoTipo } from "@/data/curriculum";
import { SectionHeader } from "./SectionHeader";

const tipoLabel: Record<ProyectoTipo, string> = {
  academico: "Académico",
  personal: "Personal",
};

const tipoClass: Record<ProyectoTipo, string> = {
  academico: "bg-purple-900/40 text-purple-300",
  personal: "bg-cyan-900/40 text-cyan-300",
};

export const Proyectos = () => {
  return (
    <section>
      <SectionHeader icon={<FaLaptopCode />} title="Proyectos" />

      <div className="space-y-6">
        {proyectos.map((proyecto, i) => (
          <motion.div
            key={proyecto.titulo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors break-inside-avoid"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg font-semibold text-cyan-300">{proyecto.titulo}</h4>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tipoClass[proyecto.tipo]}`}>
                {tipoLabel[proyecto.tipo]}
              </span>
            </div>
            <p className="italic text-gray-400">{proyecto.fecha}</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed space-y-1">
              {proyecto.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

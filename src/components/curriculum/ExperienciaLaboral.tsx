"use client";

import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { experiencia } from "@/data/curriculum";
import { SectionHeader } from "./SectionHeader";

export const ExperienciaLaboral = () => {
  return (
    <section className="mb-12 border-b border-gray-700 pb-8">
      <SectionHeader icon={<FaBriefcase />} title="Experiencia Laboral" />

      {experiencia.map((grupo) => (
        <div key={grupo.id} className="mt-10 first:mt-0">
          <SectionHeader icon={<FaLaptopCode />} title={grupo.titulo} level={3} />
          <div className="space-y-6">
            {grupo.entradas.map((exp, i) => (
              <motion.div
                key={exp.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors break-inside-avoid"
              >
                <h4 className="text-lg font-semibold text-cyan-300">{exp.titulo}</h4>
                <p className="italic text-gray-400">{exp.fecha}</p>
                <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed space-y-1">
                  {exp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

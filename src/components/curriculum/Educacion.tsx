"use client";

import { FaGraduationCap, FaUniversity, FaLanguage, FaTools, FaUsers, FaComments, FaLightbulb, FaBookOpen } from "react-icons/fa";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { educacion, idiomas, habilidadesTecnicas, habilidadesBlandas, type SoftSkillIcon } from "@/data/curriculum";
import { SectionHeader } from "./SectionHeader";

const softSkillIcons: Record<SoftSkillIcon, IconType> = {
  team: FaUsers,
  communication: FaComments,
  "problem-solving": FaLightbulb,
  "self-learning": FaBookOpen,
};

export const Educacion = () => {
  return (
    <>
      {/* Educación */}
      <section className="mb-10">
        <SectionHeader icon={<FaGraduationCap />} title="Educación" />
        <div className="space-y-6">
          {educacion.map((edu, i) => (
            <motion.div
              key={edu.titulo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors break-inside-avoid"
            >
              <h3 className="text-xl font-semibold text-sky-400 flex items-center gap-2">
                <FaUniversity className="text-blue-400" /> {edu.titulo}
              </h3>
              <p className="italic text-gray-400">{edu.fecha}</p>
              <p className="text-gray-200">{edu.modalidad}</p>
              {edu.detalle && <p className="text-gray-200 mt-1">{edu.detalle}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Idiomas */}
      <section className="mb-10">
        <SectionHeader icon={<FaLanguage />} title="Idiomas" />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="list-disc list-inside text-gray-200 leading-relaxed space-y-1"
        >
          {idiomas.map((idioma) => (
            <li key={idioma.idioma}>{idioma.idioma} – {idioma.nivel}</li>
          ))}
        </motion.ul>
      </section>

      {/* Habilidades técnicas */}
      <section className="mb-10">
        <SectionHeader icon={<FaTools />} title="Habilidades Técnicas" />
        <div className="space-y-4">
          {habilidadesTecnicas.map((hab, i) => (
            <motion.div
              key={hab.categoria}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-gray-200 font-semibold">{hab.categoria}:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {hab.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-md text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Habilidades blandas */}
      <section>
        <SectionHeader icon={<FaTools />} title="Habilidades Blandas" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {habilidadesBlandas.map((hab, i) => {
            const Icon = softSkillIcons[hab.icono];
            return (
              <motion.div
                key={hab.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors break-inside-avoid"
              >
                <Icon className={hab.colorClass} />
                <span className="text-gray-200 font-semibold">{hab.nombre}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

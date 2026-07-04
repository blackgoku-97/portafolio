"use client";

import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import { certificaciones } from "@/data/curriculum";
import { SectionHeader } from "./SectionHeader";

export const Certificaciones = () => {
  return (
    <section>
      <SectionHeader icon={<FaCertificate />} title="Certificaciones" />

      <div className="space-y-6">
        {certificaciones.map((cert, i) => (
          <motion.div
            key={cert.titulo}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
          >
            <h4 className="text-lg font-semibold text-cyan-300">{cert.titulo}</h4>
            <p className="italic text-gray-400">{cert.instructor} · {cert.plataforma}</p>
            <p className="text-gray-200 mt-1">{cert.duracion} · {cert.fecha}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Ver credencial →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

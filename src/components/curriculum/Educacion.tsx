"use client";

import { FaGraduationCap, FaUniversity, FaLanguage, FaTools, FaUsers, FaComments, FaLightbulb, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export const Educacion = () => {
  const estudios = [
    {
      titulo: "Programa Oracle Next Education (ONE) – Alura & Oracle",
      fecha: "2024 - 2025",
      modalidad: "Modalidad: online · Estado: finalizado",
      detalle:
        "Formación intensiva en desarrollo web y backend con enfoque en empleabilidad, proyectos prácticos y colaboración internacional. Tecnologías: Java, Spring, MySQL, PostgreSQL, APIs REST y metodologías ágiles.",
    },
    {
      titulo: "Ingeniero Informático – Universidad Técnica de Inacap",
      fecha: "03/2020 - 12/2021 · Concepción - Talcahuano",
      modalidad: "Modalidad: online · Estado: titulado",
    },
    {
      titulo: "Analista Programador – Instituto Técnico de Inacap",
      fecha: "03/2017 - 07/2019 · Concepción - Talcahuano",
      modalidad: "Modalidad: presencial · Estado: titulado",
    },
  ];

  const idiomas = [
    "Español – Nativo",
    "Inglés – Intermedio (A2, lectura técnica fluida)",
  ];

  // 🔹 Habilidades técnicas
  const habilidadesTecnicas = [
    { categoria: "Lenguajes", items: ["Java", "JavaScript", "TypeScript", "Dart", "SQL"] },
    { categoria: "Frameworks", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Spring Boot", "Flutter"] },
    { categoria: "Base de datos", items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
    { categoria: "Herramientas", items: ["Git", "GitHub", "Docker", "Postman"] },
    { categoria: "IDEs", items: ["Visual Studio Code", "IntelliJ IDEA"] },
    { categoria: "IA", items: ["Copilot"] },
  ];

  // 🔹 Habilidades blandas
  const habilidadesBlandas = [
    { nombre: "Trabajo en equipo", icon: <FaUsers className="text-cyan-400" /> },
    { nombre: "Comunicación", icon: <FaComments className="text-green-400" /> },
    { nombre: "Resolución de problemas", icon: <FaLightbulb className="text-yellow-400" /> },
    { nombre: "Autodidacta", icon: <FaBookOpen className="text-purple-400" /> },
  ];

  return (
    <>
      {/* Educación */}
      <section className="mb-10 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400" /> Educación
        </h2>
        <div className="space-y-6">
          {estudios.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
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
      <section className="mb-10 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <FaLanguage className="text-cyan-400" /> Idiomas
        </h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="list-disc list-inside text-gray-200 leading-relaxed space-y-1"
        >
          {idiomas.map((idioma, i) => (
            <li key={i}>{idioma}</li>
          ))}
        </motion.ul>
      </section>

      {/* Habilidades técnicas */}
      <section className="mb-10 border-b border-gray-700 pb-6">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <FaTools className="text-cyan-400" /> Habilidades Técnicas
        </h2>
        <div className="space-y-4">
          {habilidadesTecnicas.map((hab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-gray-200 font-semibold">{hab.categoria}:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {hab.items.map((item, idx) => (
                  <span
                    key={idx}
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
        <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <FaTools className="text-cyan-400" /> Habilidades Blandas
        </h2>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {habilidadesBlandas.map((hab, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
            >
              {hab.icon}
              <span className="text-gray-200 font-semibold">{hab.nombre}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
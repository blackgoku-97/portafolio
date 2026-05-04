"use client";

import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export const ExperienciaLaboral = () => {
  const practicas = [
    {
      titulo: "Práctica Profesional – Desarrollador Laravel en Betech",
      fecha: "03/2022 - 05/2022 · Concepción",
      items: [
        "Desarrollo backend y frontend con PHP, JavaScript, CSS y MySQL.",
        "Optimización de interfaces responsivas con Bootstrap.",
        "Diseño y maquetación de UI orientadas a la usabilidad.",
      ],
    },
    {
      titulo: "Práctica Profesional – Desarrollador Laravel en Himce",
      fecha: "08/2019 - 10/2019 · San Pedro de la Paz",
      items: [
        "Desarrollo de aplicaciones web innovadoras.",
        "Implementación de soluciones escalables con Laravel.",
      ],
    },
  ];

  const proyectosAcademicos = [
    {
      titulo: "Proyecto Académico – App de Conversión de Monedas",
      fecha: "2024 - 2025 · Proyecto académico",
      items: [
        "Aplicación de escritorio en Java con integración de Exchange Rates API.",
        "Uso de Gson para parseo de datos y arquitectura modular.",
      ],
    },
    {
      titulo: "Proyecto Académico – App de Librería",
      fecha: "2024 - 2025 · Proyecto académico",
      items: [
        "Gestión de libros y autores con Java, Spring y PostgreSQL.",
        "Implementación de API REST y persistencia con JPA.",
      ],
    },
    {
      titulo: "Proyecto Académico – App de Foro",
      fecha: "2024 - 2025 · Proyecto académico",
      items: [
        "Aplicación web para gestión de tópicos y usuarios.",
        "Desarrollada con Java, Spring y MySQL, probada con Insomnia.",
      ],
    },
  ];

  const proyectosPersonales = [
    {
      titulo: "Gestor de Tareas – Frontend",
      fecha: "01/2026 · Proyecto personal",
      items: [
        "Interfaz web en React + Vite + Tailwind CSS para gestionar tareas.",
        "Uso de Tailwind CSS y IndexedDB para almacenamiento local.",
      ],
    },
    {
      titulo: "Gestor de Presupuestos – Frontend",
      fecha: "01/2026 · Proyecto personal",
      items: [
        "Aplicación web en React + Vite + Tailwind CSS para gestionar clientes y presupuestos.",
        "Persistencia local con IndexedDB y visualización de métricas con Nivo.",
        "Modo oscuro total y formularios modernos con validaciones.",
      ],
    },
  ];

  return (
    <section className="mb-12 border-b border-gray-700 pb-8">
      <h2 className="text-3xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
        <FaBriefcase className="text-cyan-400" /> Experiencia Laboral
      </h2>

      {/* Apartado de Prácticas */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Prácticas Profesionales</h3>
      <div className="space-y-6">
        {practicas.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
          >
            <h4 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" /> {exp.titulo}
            </h4>
            <p className="italic text-gray-400">{exp.fecha}</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed space-y-1">
              {exp.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Apartado de Proyectos Académicos */}
      <h3 className="text-2xl font-semibold text-green-400 mt-10 mb-4">Proyectos Académicos</h3>
      <div className="space-y-6">
        {proyectosAcademicos.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
          >
            <h4 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" /> {exp.titulo}
            </h4>
            <p className="italic text-gray-400">{exp.fecha}</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed space-y-1">
              {exp.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Apartado de Proyectos Personales */}
      <h3 className="text-2xl font-semibold text-green-400 mt-10 mb-4">Proyectos Personales</h3>
      <div className="space-y-6">
        {proyectosPersonales.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors"
          >
            <h4 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" /> {exp.titulo}
            </h4>
            <p className="italic text-gray-400">{exp.fecha}</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed space-y-1">
              {exp.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
"use client"

import { ProjectCard } from "@/components"
import { motion } from "framer-motion"

export const Projects = () => {
  const projects = [
    {
      name: "App de Conversión de Monedas",
      desc: "Aplicación de escritorio en Java que permite transformar monedas en tiempo real usando Exchange Rates API.",
      stack: ["Java", "Exchange Rates API", "Gson"],
      impact: "Proyecto académico que demuestra integración de APIs externas y arquitectura modular.",
      image: "/monedas.jpg",
      link: "https://github.com/blackgoku-97/transformador_monedas",
    },
    {
      name: "App de Librería",
      desc: "Sistema de gestión de libros y autores con API REST y persistencia en PostgreSQL.",
      stack: ["Java", "Spring", "PostgreSQL", "Jackson"],
      impact: "Proyecto académico que evidencia dominio de Spring Boot y bases de datos relacionales.",
      image: "/libros.jpg",
      link: "https://github.com/blackgoku-97/java-spring-libreria",
    },
    {
      name: "App de Foro",
      desc: "Aplicación web para la gestión de tópicos y usuarios, probada con Insomnia.",
      stack: ["Java", "Spring", "MySQL", "Insomnia"],
      impact: "Proyecto académico que muestra experiencia en desarrollo de APIs y pruebas de endpoints.",
      image: "/topicos.jpg",
      link: "https://github.com/blackgoku-97/foroapi",
    },
    {
      name: "Gestor de Tareas - Frontend",
      desc: "Interfaz web en React + Vite + Tailwind CSS para gestionar tareas.",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "IndexedDB"],
      impact: "Proyecto personal que refleja habilidades en UI moderna y persistencia de datos.",
      image: "/frontend.jpg",
      link: "https://github.com/blackgoku-97/gestor-tareas-frontend",
      demo: "https://gestor-tareas-frontend-olive.vercel.app/"
    },
    {
      name: "Gestor de Presupuestos - Frontend",
      desc: "Aplicación web en React + Vite + Tailwind CSS para gestionar clientes y presupuestos con IndexedDB.",
      stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "IndexedDB", "Nivo"],
      impact: "Proyecto personal que demuestra dominio en dashboards, formularios oscuros y persistencia local.",
      image: "/frontend-2.jpg",
      link: "https://github.com/blackgoku-97/frontend-presupuestos",
      demo: "https://frontend-presupuestos-delta.vercel.app/"
    },
  ]

  // Categorías más descriptivas
  const categories = {
    "Frontend Web": projects.filter(p =>
      p.name.includes("Frontend") || p.name.includes("Presupuestos")
    ),
    "Backend APIs y Sistemas": projects.filter(
      p =>
        p.name.includes("Backend") ||
        ["App de Conversión de Monedas", "App de Librería", "App de Foro"].includes(p.name)
    ),
  }

  return (
    <section className="pt-24 p-10 text-white max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-extrabold text-cyan-400 mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Portafolio Técnico
      </motion.h1>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
      <p className="mb-12 text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Proyectos destacados que reflejan mis habilidades en desarrollo frontend y backend, aplicando buenas prácticas, arquitecturas escalables y tecnologías modernas.
      </p>

      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">{category}</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {items.map((project) => (
              <motion.div
                key={project.name}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  )
}
import { ProjectCard, PageTitle } from "@/components"
import type { CSSProperties } from "react"

type Project = {
  name: string
  date: string
  desc: string
  stack: string[]
  focus: string
  image: string
  link: string
  demo?: string
  origin: "Personal" | "Académico"
  area: "Frontend web" | "Java y aplicaciones"
}

const projects: Project[] = [
  {
    name: "Gestor de Tareas – Frontend",
    date: "01/2026",
    desc: "Interfaz web para organizar tareas, con persistencia de datos local.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "IndexedDB"],
    focus: "Desarrollé la interfaz y el almacenamiento local para mantener las tareas en el navegador.",
    image: "/frontend.jpg",
    link: "https://github.com/blackgoku-97/gestor-tareas-frontend",
    demo: "https://gestor-tareas-frontend-olive.vercel.app/",
    origin: "Personal",
    area: "Frontend web",
  },
  {
    name: "Gestor de Presupuestos – Frontend",
    date: "01/2026",
    desc: "Aplicación web para administrar clientes y presupuestos, con panel de métricas.",
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "IndexedDB", "Nivo"],
    focus: "Implementé formularios con validaciones, modo oscuro, persistencia local y visualización de métricas.",
    image: "/frontend-2.jpg",
    link: "https://github.com/blackgoku-97/frontend-presupuestos",
    demo: "https://frontend-presupuestos-delta.vercel.app/",
    origin: "Personal",
    area: "Frontend web",
  },
  {
    name: "App de Conversión de Monedas",
    date: "2024–2025",
    desc: "Aplicación de escritorio en Java para convertir monedas con tasas obtenidas de una API externa.",
    stack: ["Java", "Exchange Rates API", "Gson"],
    focus: "Integré Exchange Rates API y Gson para procesar las tasas de cambio.",
    image: "/monedas.jpg",
    link: "https://github.com/blackgoku-97/transformador_monedas",
    origin: "Académico",
    area: "Java y aplicaciones",
  },
  {
    name: "App de Librería",
    date: "2024–2025",
    desc: "API REST para gestionar libros y autores, con persistencia en PostgreSQL.",
    stack: ["Java", "Spring", "PostgreSQL", "Jackson"],
    focus: "Implementé endpoints y persistencia relacional para la gestión de libros y autores.",
    image: "/libros.jpg",
    link: "https://github.com/blackgoku-97/java-spring-libreria",
    origin: "Académico",
    area: "Java y aplicaciones",
  },
  {
    name: "App de Foro",
    date: "2024–2025",
    desc: "Aplicación web para crear y administrar tópicos y usuarios.",
    stack: ["Java", "Spring", "MySQL", "Insomnia"],
    focus: "Desarrollé una API con Spring y MySQL, y probé sus endpoints con Insomnia.",
    image: "/topicos.jpg",
    link: "https://github.com/blackgoku-97/foroapi",
    origin: "Académico",
    area: "Java y aplicaciones",
  },
]

const categories = [
  { name: "Desarrollo frontend", area: "Frontend web" },
  { name: "Java y aplicaciones", area: "Java y aplicaciones" },
] as const

export const Projects = () => {

  return (
    <section className="pt-24 p-10 text-white max-w-6xl mx-auto">
      <PageTitle subtitle="Proyectos personales y académicos para revisar código, tecnologías utilizadas y demos disponibles.">
        Proyectos
      </PageTitle>

      {categories.map(({ name, area }) => (
        <div key={name} className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter((project) => project.area === area).map((project, i) => (
              <div
                key={project.name}
                style={{ "--stagger": i } as CSSProperties}
                className="animate-fade-up hover:scale-105 hover:shadow-xl hover:shadow-black/30 transition-transform duration-300"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
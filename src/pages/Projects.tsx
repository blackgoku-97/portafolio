import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      name: "App de Transformación de Monedas",
      desc: "Aplicación de escritorio para la transformación de monedas.",
      stack: ["Java"],
      impact: "Proyecto terminado",
      image: "Sin imagen",
      link: "https://github.com/blackgoku-97/transformador_monedas",
    },
    // Aquí puedes agregar más proyectos
  ]

  return (
    <section className="p-10 text-white max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center">
        Proyectos Destacados
      </h1>
      <p className="mb-12 text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Algunos de los proyectos que he desarrollado, aplicando mis conocimientos en frontend, mobile y arquitecturas escalables.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
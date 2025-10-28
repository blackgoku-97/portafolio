export default function Projects() {
  const projects = [
    {
      name: "App de Prevención de Riesgos",
      desc: "Aplicación móvil multiplataforma para reportar incidentes laborales en tiempo real.",
      stack: ["Flutter", "Firebase", "Dart"],
      impact: "En construccion",
      image: "Sin imagen",
      link: "Sin link"
    }
  ]

  return (
    <section className="p-10 text-white max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center">
        Proyectos Destacados
      </h1>
      <p className="mb-12 text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Algunos de los proyectos que he desarrollado, aplicando mis conocimientos en backend, mobile y arquitecturas escalables.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-900/70 border border-cyan-500/30 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/40 transition-transform hover:scale-105"
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-cyan-300">{project.name}</h2>
              <p className="mt-2 text-gray-400">{project.desc}</p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Stack:</strong> {project.stack.join(", ")}
              </p>
              <p className="mt-2 text-sm text-green-400">
                <strong>Impacto:</strong> {project.impact}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
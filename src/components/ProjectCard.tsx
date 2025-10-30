interface Project {
    image: string;
    name: string;
    desc: string;
    stack: string[];
    impact: string;
    link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-900/70 border border-cyan-500/30 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/40 transition-transform hover:scale-105">
      <img
        src={project.image !== "Sin imagen" ? project.image : "/placeholder.png"}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
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
          rel="noreferrer noopener"
          className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  )
}
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
    <div className="bg-slate-800/70 rounded-xl shadow-lg overflow-hidden">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-400">{project.name}</h3>
        <p className="text-gray-300 mt-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-cyan-400 hover:underline"
        >
          Ver en GitHub →
        </a>
      </div>
    </div>
  )
}
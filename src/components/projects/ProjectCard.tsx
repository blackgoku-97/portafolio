"use client";

import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface Project {
  name: string;
  desc: string;
  stack: string[];
  impact: string;
  image: string;
  link: string;
  demo?: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
      {/* Imagen */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover"
      />

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
          <FaCode className="text-cyan-500" /> {project.name}
        </h3>

        {/* Descripción con border-radius sobrio */}
        <div className="bg-gray-700 p-3 rounded-md mb-3">
          <p className="text-sm text-gray-200 leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-cyan-600 text-white px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impacto */}
        <p className="text-xs text-gray-400 mb-4">{project.impact}</p>

        {/* Links */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md transition"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCoffee } from "react-icons/fa";

interface ProjectCardData {
  name: string;
  date: string;
  desc: string;
  stack: string[];
  focus: string;
  image?: string;
  link: string;
  demo?: string;
  origin: "Personal" | "Académico";
}

export const ProjectCard = ({ project }: { project: ProjectCardData }) => {
  return (
    <div className="card-surface overflow-hidden flex flex-col">
      {/* Imagen */}
      <div className="relative w-full h-40">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-amber-950 to-orange-900 text-amber-100">
            <FaCoffee className="text-4xl" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-widest">CAFÉ BRUMA</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-cyan-400 mb-2 flex items-center gap-2">
          <FaCode className="text-cyan-500" /> {project.name}
        </h3>

        <div className="bg-slate-800/60 p-3 rounded-md mb-3">
          <p className="text-sm text-gray-200 leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-cyan-700 text-white px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-xs font-medium text-cyan-200 mb-2">
          Proyecto {project.origin.toLowerCase()} · {project.date}
        </p>
        <p className="text-xs text-gray-400 mb-4">
          <span className="font-semibold text-gray-300">Enfoque:</span> {project.focus}
        </p>

        {/* Links */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm btn-primary px-3 py-1 rounded-md transition"
          >
            <FaGithub aria-hidden="true" /> Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md transition"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Demo en vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
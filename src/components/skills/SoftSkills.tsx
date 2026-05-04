"use client"

import { SkillsSection } from "@/components"
import { FaComments, FaUsers, FaLightbulb, FaBookOpen } from "react-icons/fa"

export const SoftSkills = () => {
  const softSkills = [
    {
      name: "Trabajo en equipo",
      desc: "Colaboro eficazmente en proyectos multidisciplinarios.",
      icon: <FaUsers className="text-purple-400" />,
    },
    {
      name: "Comunicación",
      desc: "Explico conceptos técnicos de forma clara y accesible.",
      icon: <FaComments className="text-blue-400" />,
    },
    {
      name: "Resolución de problemas",
      desc: "Analizo situaciones y encuentro soluciones prácticas e innovadoras.",
      icon: <FaLightbulb className="text-yellow-400" />,
    },
    {
      name: "Autodidacta",
      desc: "Aprendo nuevas tecnologías y metodologías de manera independiente.",
      icon: <FaBookOpen className="text-green-400" />,
    },
  ]

  return (
    <section className="section-spacing max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-cyan-300 mb-8">Habilidades Blandas</h2>
      <SkillsSection title="Soft Skills" skills={softSkills} />
    </section>
  )
}

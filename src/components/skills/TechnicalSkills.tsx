"use client"
import { SkillsSection } from "@/components"
import {
  FaJava, FaDatabase, FaGitAlt, FaCode, FaBrain,
} from "react-icons/fa"
import {
  SiJavascript, SiTypescript, SiDart, SiMysql, SiPostgresql, SiPostman, SiFirebase, SiMongodb,
  SiSpringboot, SiTailwindcss, SiFlutter, SiReact, SiNextdotjs, SiIntellijidea
} from "react-icons/si"
import { FaNodeJs, FaGithub, FaDocker } from "react-icons/fa"

export const TechnicalSkills = () => {
  const languages = [
    { name: "Java", desc: "Lenguaje sólido para backend y escritorio.", icon: <FaJava className="text-red-400" /> },
    { name: "JavaScript", desc: "Lenguaje dinámico para frontend y backend.", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", desc: "Tipado estático para proyectos escalables.", icon: <SiTypescript className="text-cyan-400" /> },
    { name: "Dart", desc: "Lenguaje moderno para desarrollo móvil con Flutter.", icon: <SiDart className="text-blue-400" /> },
    { name: "SQL", desc: "Lenguaje para consultas y gestión de datos.", icon: <FaDatabase className="text-purple-400" /> },
  ]

  const frameworks = [
    { name: "React", desc: "Framework moderno para interfaces dinámicas.", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", desc: "Framework para aplicaciones web rápidas y escalables.", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", desc: "Estilos rápidos y responsivos.", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", desc: "Entorno para construir APIs rápidas.", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Spring Boot", desc: "Framework robusto para aplicaciones Java.", icon: <SiSpringboot className="text-green-400" /> },
    { name: "Flutter", desc: "Framework multiplataforma para apps móviles modernas.", icon: <SiFlutter className="text-blue-400" /> },
  ]

  const databases = [
    { name: "MySQL", desc: "Base de datos relacional popular.", icon: <SiMysql className="text-yellow-400" /> },
    { name: "PostgreSQL", desc: "Base de datos avanzada y escalable.", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "Firebase", desc: "Base de datos en tiempo real y backend como servicio.", icon: <SiFirebase className="text-orange-400" /> },
    { name: "MongoDB", desc: "Base de datos NoSQL flexible y escalable.", icon: <SiMongodb className="text-green-400" /> },
  ]

  const tools = [
    { name: "Git", desc: "Control de versiones y colaboración.", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", desc: "Plataforma para colaboración y control de versiones.", icon: <FaGithub className="text-gray-400" /> },
    { name: "Docker", desc: "Contenedores para desarrollo y despliegue consistentes.", icon: <FaDocker className="text-blue-400" /> },
    { name: "Postman", desc: "Herramienta para probar APIs de manera eficiente.", icon: <SiPostman className="text-cyan-400" /> },
  ]

  const ides = [
    { name: "Visual Studio Code", desc: "Editor ligero y extensible.", icon: <FaCode className="text-blue-400" /> },
    { name: "IntelliJ IDEA", desc: "IDE potente para proyectos Java y Spring Boot.", icon: <SiIntellijidea className="text-purple-400" /> },
  ]

  const ai = [
    { name: "Copilot", desc: "Asistente de IA para autocompletar y generar código.", icon: <FaBrain className="text-cyan-400" /> },
  ]

  return (
    <section className="section-spacing max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-cyan-300 mb-8">Habilidades Técnicas</h2>
      <SkillsSection title="Lenguajes" skills={languages} />
      <SkillsSection title="Frameworks" skills={frameworks} />
      <SkillsSection title="Bases de Datos" skills={databases} columns="md:grid-cols-2 lg:grid-cols-4" />
      <SkillsSection title="Herramientas" skills={tools} />
      <SkillsSection title="IDEs" skills={ides} />
      <SkillsSection title="Inteligencia Artificial" skills={ai} />
    </section>
  )
}

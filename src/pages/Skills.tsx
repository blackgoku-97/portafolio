import { FaNodeJs, FaReact, FaJava, FaJsSquare } from "react-icons/fa"
import { SiTypescript, SiFlutter, SiFirebase, SiSpring } from "react-icons/si"

export default function Skills() {
  const skills = [
    {
      name: "Node.js",
      desc: "Backend con Node.js",
      icon: <FaNodeJs className="text-green-400" />,
      borderColor: "border-green-500",
    },
    {
      name: "React / React Native",
      desc: "Frontend y Mobile",
      icon: <FaReact className="text-sky-400" />,
      borderColor: "border-sky-500",
    },
    {
      name: "TypeScript",
      desc: "Código tipado y mantenible",
      icon: <SiTypescript className="text-blue-400" />,
      borderColor: "border-blue-500",
    },
    {
      name: "Java",
      desc: "Aplicaciones empresariales y backend",
      icon: <FaJava className="text-red-500" />,
      borderColor: "border-red-500",
    },
    {
      name: "Spring",
      desc: "Framework para backend en Java",
      icon: <SiSpring className="text-green-500" />,
      borderColor: "border-green-500",
    },
    {
      name: "JavaScript",
      desc: "Lenguaje base para la web",
      icon: <FaJsSquare className="text-yellow-400" />,
      borderColor: "border-yellow-400",
    },
    {
      name: "Flutter",
      desc: "Desarrollo multiplataforma",
      icon: <SiFlutter className="text-purple-400" />,
      borderColor: "border-purple-500",
    },
    {
      name: "Firebase",
      desc: "Autenticación y Bases de Datos",
      icon: <SiFirebase className="text-orange-400" />,
      borderColor: "border-orange-500",
    },
  ]

  return (
    <section className="p-10 text-white max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center">
        Habilidades Técnicas
      </h1>
      <p className="mb-12 text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Estas son mis principales competencias como ingeniero informático, con foco en frontend, mobile y arquitecturas escalables.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`bg-slate-900/70 border ${skill.borderColor} rounded-xl p-6 shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-6xl mb-4 flex justify-center">{skill.icon}</div>
            <h2 className="text-2xl font-bold text-center">{skill.name}</h2>
            <p className="mt-2 text-gray-400 text-center">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
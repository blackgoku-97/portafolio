import { FaNodeJs, FaReact, FaJava, FaJsSquare } from "react-icons/fa"
import { 
  SiTypescript, 
  SiFlutter, 
  SiFirebase, 
  SiSpring, 
  SiDart, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql 
} from "react-icons/si"
import SkillsCard from "../components/SkillsCard"

export default function Skills() {
  const categories = [
    {
      title: "📜 Lenguajes",
      items: [
        { name: "JavaScript", desc: "Lenguaje base para la web", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "TypeScript", desc: "Código tipado y mantenible", icon: <SiTypescript className="text-blue-400" /> },
        { name: "Java", desc: "Aplicaciones empresariales y backend", icon: <FaJava className="text-red-500" /> },
        { name: "Dart", desc: "Lenguaje para Flutter y multiplataforma", icon: <SiDart className="text-cyan-400" /> },
      ],
    },
    {
      title: "⚙️ Frameworks y Librerías",
      items: [
        { name: "Spring", desc: "Framework para backend en Java", icon: <SiSpring className="text-green-500" /> },
        { name: "Node.js", desc: "Backend con Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "React / React Native", desc: "Frontend y Mobile", icon: <FaReact className="text-sky-400" /> },
      ],
    },
    {
      title: "📱 Mobile",
      items: [
        { name: "Flutter", desc: "Desarrollo multiplataforma", icon: <SiFlutter className="text-purple-400" /> },
      ],
    },
    {
      title: "🗄️ Bases de Datos",
      items: [
        { name: "MySQL", desc: "Base de datos relacional", icon: <SiMysql className="text-blue-500" /> },
        { name: "PostgreSQL", desc: "Base de datos avanzada y escalable", icon: <SiPostgresql className="text-sky-600" /> },
        { name: "MongoDB", desc: "Base de datos NoSQL orientada a documentos", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "☁️ Cloud & Servicios",
      items: [
        { name: "Firebase", desc: "Autenticación y Bases de Datos NoSQL", icon: <SiFirebase className="text-orange-400" /> },
      ],
    },
  ]

  return (
    <section className="p-10 text-white max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center">
        Habilidades Técnicas
      </h1>
      <p className="mb-12 text-lg text-gray-300 text-center max-w-2xl mx-auto">
        Estas son mis principales competencias como ingeniero informático, organizadas por categorías.
      </p>

      {categories.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((skill) => (
              <SkillsCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
export default function Skills() {
  const skills = [
    {
      name: "Node.js",
      desc: "Backend con Node.js",
      icon: "🟢",
      color: "text-green-400 border-green-500",
    },
    {
      name: "React / React Native",
      desc: "Frontend y Mobile",
      icon: "⚛️",
      color: "text-sky-400 border-sky-500",
    },
    {
      name: "TypeScript",
      desc: "Código tipado y mantenible",
      icon: "📘",
      color: "text-blue-400 border-blue-500",
    },
    {
      name: "Flutter",
      desc: "Desarrollo multiplataforma",
      icon: "💙",
      color: "text-purple-400 border-purple-500",
    },
    {
      name: "Firebase",
      desc: "Autenticación y Bases de Datos",
      icon: "🔥",
      color: "text-orange-400 border-orange-500",
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
            className={`bg-slate-900/70 border rounded-xl p-6 shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-300 ${skill.color}`}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h2 className={`text-2xl font-bold ${skill.color.split(" ")[0]}`}>
              {skill.name}
            </h2>
            <p className="mt-2 text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
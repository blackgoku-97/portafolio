export default function Talentos() {
  const skills = [
    {
      name: "Node.js",
      desc: "+50 XP en Backend con Node.js",
      icon: "🟢",
      color: "text-green-400 border-green-500",
    },
    {
      name: "React / React Native",
      desc: "+40 XP en Frontend y Mobile",
      icon: "⚛️",
      color: "text-sky-400 border-sky-500",
    },
    {
      name: "TypeScript",
      desc: "+35 XP en código tipado y mantenible",
      icon: "📘",
      color: "text-blue-400 border-blue-500",
    },
    {
      name: "Flutter",
      desc: "+30 XP en desarrollo multiplataforma",
      icon: "💙",
      color: "text-purple-400 border-purple-500",
    },
    {
      name: "Firebase",
      desc: "+25 XP en autenticación y bases de datos",
      icon: "🔥",
      color: "text-orange-400 border-orange-500",
    },
  ]

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold text-red-300 mb-6">
        Árbol de talentos
      </h1>
      <p className="mb-8 text-lg text-gray-300">
        Estas son mis habilidades representadas como talentos desbloqueados en mi
        viaje como ingeniero informático.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`bg-black/60 border-2 rounded-lg p-6 hover:scale-105 transition-transform ${skill.color}`}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h2 className={`text-2xl font-bold ${skill.color.split(" ")[0]}`}>
              {skill.name}
            </h2>
            <p className="mt-2 text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
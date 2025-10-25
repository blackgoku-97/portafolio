export default function Misiones() {
  const quests = [
    {
      titulo: "Implementar autenticación segura con Firebase",
      descripcion: "Diseñé un sistema de login y registro con Firebase Authentication.",
      recompensa: "+30 XP en Seguridad",
      icono: "🛡️",
      color: "border-green-500 text-green-400", // Seguridad = verde
    },
    {
      titulo: "Migración de Expo a Flutter",
      descripcion: "Reescribí una app completa en Flutter para mayor control y rendimiento.",
      recompensa: "+40 XP en Multiplataforma",
      icono: "📱",
      color: "border-sky-500 text-sky-400", // Mobile = azul
    },
    {
      titulo: "Devfolio SPA",
      descripcion: "Creación de un portafolio épico inspirado en World of Warcraft.",
      recompensa: "+50 XP en Frontend Épico",
      icono: "⚔️",
      color: "border-purple-500 text-purple-400", // Épico = morado
    },
  ]

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold text-amber-300 mb-6">
        Misiones completadas
      </h1>
      <p className="mb-8 text-lg text-gray-300">
        Cada proyecto es una misión que me ha otorgado experiencia y nuevas habilidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quests.map((quest) => (
          <div
            key={quest.titulo}
            className={`bg-black/60 border-2 rounded-lg p-6 hover:scale-105 transition-transform ${quest.color.split(" ")[0]}`}
          >
            <div className="text-5xl mb-4">{quest.icono}</div>
            <h2 className={`text-2xl font-bold ${quest.color.split(" ")[1]}`}>
              {quest.titulo}
            </h2>
            <p className="mt-2 text-gray-300">{quest.descripcion}</p>
            <p className="mt-4 text-green-400 font-semibold">{quest.recompensa}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
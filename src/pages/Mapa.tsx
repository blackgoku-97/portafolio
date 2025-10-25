export default function Mapa() {
  const experiencias = [
    {
      empresa: "Phos-chek",
      rol: "Mobile Developer",
      periodo: "2025 - actualidad",
      logro: "App en Flutter con alto rendimiento.",
      icono: "📱",
      color: {
        text: "text-sky-400",
        border: "border-sky-500",
        bg: "bg-sky-500",
      },
    },
    {
      empresa: "Devfolio",
      rol: "Ingeniero Informático",
      periodo: "2025 - Actualidad",
      logro: "Creación de un portafolio épico estilo World of Warcraft.",
      icono: "🔥",
      color: {
        text: "text-orange-400",
        border: "border-orange-500",
        bg: "bg-orange-500",
      },
    },
  ]

  return (
    <div className="p-10 text-white">
      <h1 className="text-4xl font-bold text-green-400 mb-6">
        Mapa de campaña
      </h1>
      <p className="mb-8 text-lg text-gray-300">
        Cada etapa de mi carrera es un territorio conquistado en mi viaje como ingeniero informático.
      </p>

      <div className="relative border-l-4 border-amber-500 ml-4">
        {experiencias.map((exp, index) => (
          <div key={index} className="mb-10 ml-6 relative pl-12">
            {/* Icono como marcador */}
            <div
              className={`absolute -left-6 flex items-center justify-center w-10 h-10 rounded-full text-black text-2xl ${exp.color.bg}`}
            >
              {exp.icono}
            </div>

            {/* Texto con color personalizado */}
            <h2 className={`text-2xl font-bold ${exp.color.text}`}>
              {exp.empresa}
            </h2>
            <h3 className="italic text-gray-300">
              {exp.rol} · {exp.periodo}
            </h3>
            <p className="mt-2 text-gray-200">{exp.logro}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
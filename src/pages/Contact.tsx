export default function Contact() {
  return (
    <div className="p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6">
        Contacto
      </h1>
      <p className="mb-8 text-lg text-center max-w-2xl text-gray-300">
        Puedes escribirme para proyectos, colaboraciones o nuevas oportunidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {/* Correo */}
        <a
          href="mailto:rpe19971210@gmail.com"
          className="bg-slate-900/70 border border-cyan-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-transform"
        >
          <div className="text-5xl mb-4">✉️</div>
          <h2 className="text-2xl font-bold text-cyan-300">Correo</h2>
          <p className="mt-2 text-gray-200">rpe19971210@gmail.com</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/blackgoku-97"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900/70 border border-cyan-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-transform"
        >
          <div className="text-5xl mb-4">💻</div>
          <h2 className="text-2xl font-bold text-cyan-300">GitHub</h2>
          <p className="mt-2 text-gray-200">github.com/blackgoku-97</p>
        </a>

        {/* EmpleaONE */}
        <a
          href="https://app.aluracursos.com/emprega-one/profile/rpe19971210"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900/70 border border-cyan-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-transform"
        >
          <div className="text-5xl mb-4">🌐</div>
          <h2 className="text-2xl font-bold text-cyan-300">EmpleaONE</h2>
          <p className="mt-2 text-gray-200">rpe19971210</p>
        </a>
      </div>
    </div>
  )
}
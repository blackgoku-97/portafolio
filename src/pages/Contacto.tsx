export default function Contacto() {
  return (
    <div className="p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-400 mb-6">
        Portal de contacto
      </h1>
      <p className="mb-8 text-lg text-center max-w-2xl text-gray-300">
        Has llegado al portal mágico. Aquí puedes comunicarte conmigo para nuevas
        aventuras, proyectos o alianzas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {/* Correo */}
        <a
          href="mailto:rpe19971210@gmail.com"
          className="bg-black/60 border-2 border-amber-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 transition-transform"
        >
          <div className="text-5xl mb-4">📜</div>
          <h2 className="text-2xl font-bold text-amber-300">Correo</h2>
          <p className="mt-2 text-gray-200">rpe19971210@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ricardo-perez-a31474229/"
          target="_blank"
          rel="noreferrer"
          className="bg-black/60 border-2 border-sky-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50 transition-transform"
        >
          <div className="text-5xl mb-4">🧙‍♂️</div>
          <h2 className="text-2xl font-bold text-sky-300">LinkedIn</h2>
          <p className="mt-2 text-gray-200">linkedin.com/in/ricardo-perez</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/blackgoku-97"
          target="_blank"
          rel="noreferrer"
          className="bg-black/60 border-2 border-purple-500 rounded-lg p-6 text-center
                     hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-transform"
        >
          <div className="text-5xl mb-4">⚔️</div>
          <h2 className="text-2xl font-bold text-purple-300">GitHub</h2>
          <p className="mt-2 text-gray-200">github.com/blackgoku-97</p>
        </a>
      </div>
    </div>
  )
}
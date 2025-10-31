export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 bg-linear-to-b from-slate-900 to-slate-800">
      
      {/* Foto circular con halo + marco degradado */}
      <div className="relative mb-6">
        {/* Halo difuminado detrás */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 blur-2xl opacity-70"></div>

        {/* Marco degradado definido */}
        <div className="p-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 relative">
          <img
            src="/perfil.jpg"
            alt="Foto de Ricardo"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Título con texto degradado */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Ricardo — Ingeniero Informático
      </h1>

      {/* Descripción */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed">
        Especialista en <span className="text-cyan-400 font-semibold">Frontend & Mobile</span>. 
        Diseño arquitecturas escalables con <span className="text-cyan-300">React</span>, 
        <span className="text-cyan-300">Flutter</span> y <span className="text-cyan-300">Firebase</span>.
      </p>
    </section>
  )
}
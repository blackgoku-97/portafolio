import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle, FaCode, FaUsers } from "react-icons/fa"

export const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-28"
    >
      <Image
        src="/perfil.jpg"
        alt="Ricardo Pérez"
        loading="eager"
        width={160}
        height={160}
        className="rounded-full border-4 border-indigo-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
      />

      <p className="mt-6 rounded-full border border-cyan-400/40 bg-cyan-950/40 px-4 py-2 text-sm font-medium text-cyan-200">
        Disponibilidad inmediata · Busco mi primera oportunidad formal
      </p>

      <h1 className="animate-fade-down mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-wide font-sans">
        Ingeniero Informático
        <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-white">
          Desarrollador Web Junior
        </span>
      </h1>

      <p className="mt-5 text-lg max-w-2xl text-gray-200">
        Busco mi primera oportunidad laboral formal como desarrollador web junior. También
        puedo conversar sobre proyectos web pequeños y bien definidos.
      </p>
      <p className="mt-3 max-w-2xl text-gray-300">
        Mis proyectos personales incluyen interfaces con React y TypeScript y APIs con Java
        y Spring. También realicé prácticas profesionales de desarrollo web.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <a
          href="/curriculum/pdf"
          download="Curriculum-Ricardo-Perez.pdf"
          className="btn-primary rounded-md px-5 py-3 font-semibold"
        >
          Descargar CV
        </a>
        <Link href="/proyectos" className="btn-secondary rounded-md px-5 py-3 font-semibold">
          Ver proyectos
        </Link>
        <Link href="/contacto" className="rounded-md border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">
          Contactarme
        </Link>
      </div>

      <div className="animate-fade-up mt-12 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-3">
        <article className="card-surface p-5">
          <FaCheckCircle className="mb-3 text-2xl text-cyan-300" aria-hidden="true" />
          <h2 className="font-semibold text-white">Prácticas profesionales</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Betech (2022) y Himce (2019), con desarrollo web en PHP y Laravel.
          </p>
        </article>
        <article className="card-surface p-5">
          <FaCode className="mb-3 text-2xl text-cyan-300" aria-hidden="true" />
          <h2 className="font-semibold text-white">Proyectos personales</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Aplicaciones web y APIs con código disponible y demos en los proyectos publicados.
          </p>
        </article>
        <article className="card-surface p-5">
          <FaUsers className="mb-3 text-2xl text-cyan-300" aria-hidden="true" />
          <h2 className="font-semibold text-white">Aprendizaje continuo</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Formación en Java, Spring Boot, React y TypeScript, aplicada en proyectos.
          </p>
        </article>
      </div>
    </section>
  )
}

import Link from "next/link";
import {
  educacion,
  experienciaLaboral,
  habilidadesTecnicas,
  personalInfo,
  resumenPdf,
} from "@/data/curriculum";
import {
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

export const Curriculum = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16 pt-24 text-white">
      <header className="card-surface p-6 text-center sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
          Currículum
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-cyan-400 sm:text-4xl">
          {personalInfo.nombre}
        </h1>
        <p className="mt-2 text-lg text-gray-200">{personalInfo.rol}</p>
        <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-gray-300">
          {resumenPdf}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/curriculum/pdf"
            download="Curriculum-Ricardo-Perez.pdf"
            className="btn-primary flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
          >
            <FaDownload aria-hidden="true" /> Descargar CV en PDF
          </a>
          <Link
            href="/contacto"
            className="btn-secondary flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
          >
            <FaEnvelope aria-hidden="true" /> Contactarme
          </Link>
        </div>
      </header>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="card-surface p-6">
          <h2 className="mb-5 text-2xl font-bold text-cyan-300">Experiencia profesional</h2>
          <div className="space-y-6">
            {experienciaLaboral.map((experiencia) => (
              <article key={experiencia.titulo}>
                <h3 className="font-semibold text-white">{experiencia.titulo}</h3>
                <p className="mt-1 text-sm text-cyan-100">{experiencia.fecha}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-300">
                  {experiencia.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card-surface p-6">
          <h2 className="mb-5 text-2xl font-bold text-cyan-300">Formación</h2>
          <div className="space-y-5">
            {educacion.map((estudio) => (
              <article key={estudio.titulo}>
                <h3 className="font-semibold text-white">{estudio.titulo}</h3>
                <p className="mt-1 text-sm text-cyan-100">{estudio.fecha}</p>
                <p className="mt-1 text-sm text-gray-300">{estudio.modalidad}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="card-surface mt-8 p-6">
        <h2 className="mb-5 text-2xl font-bold text-cyan-300">Habilidades técnicas</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {habilidadesTecnicas.map((grupo) => (
            <div key={grupo.categoria}>
              <h3 className="font-semibold text-white">{grupo.categoria}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {grupo.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

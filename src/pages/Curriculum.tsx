export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 text-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-amber-400 mb-6 text-center">
          Pergamino del héroe
        </h1>
        <p className="mb-8 text-lg text-gray-300 text-center">
          Este es mi currículum, un pergamino que narra mis logros, habilidades y
          aventuras profesionales.
        </p>

        {/* Resumen */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-2">Resumen</h2>
          <p className="text-gray-200">
            Desarrollador Freelancer Junior apasionado por el desarrollo web y mobile.
            Con una sólida formación en ingeniería informática, me caracterizo por
            ser organizado, responsable y proactivo. Estoy ansioso por unirme a un
            equipo dinámico y desafiante donde pueda aplicar mis habilidades y
            continuar aprendiendo y creciendo como profesional.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">Experiencia</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400">
              Desarrollador Laravel – Betech
            </h3>
            <p className="italic text-gray-400">03/2022 - 05/2022 · Concepción</p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
              <li>Desarrollo web full-stack con PHP, JavaScript, CSS y MySQL.</li>
              <li>Uso de Bootstrap para interfaces responsivas y personalizadas.</li>
              <li>Diseño de interfaces de usuario (UI) y maquetación web.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Desarrollador Laravel – Himce
            </h3>
            <p className="italic text-gray-400">08/2019 - 10/2019 · San Pedro de la Paz</p>
            <ul className="list-disc list-inside text-gray-200 mt-2">
              <li>Desarrollo de aplicaciones web innovadoras.</li>
              <li>Experiencia en Laravel para aplicaciones escalables.</li>
            </ul>
          </div>
        </section>

        {/* Educación */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-4">Educación</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-400">
              Ingeniero Informático – Universidad Técnica de Inacap
            </h3>
            <p className="italic text-gray-400">03/2020 - 12/2021 · Concepción - Talcahuano</p>
            <p className="text-gray-200">Modalidad: online · Estado: titulado</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-sky-400">
              Analista Programador – Instituto Técnico de Inacap
            </h3>
            <p className="italic text-gray-400">03/2017 - 07/2019 · Concepción - Talcahuano</p>
            <p className="text-gray-200">Modalidad: presencial · Estado: titulado</p>
          </div>
        </section>

        {/* Idiomas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-2">Idiomas</h2>
          <ul className="list-disc list-inside text-gray-200">
            <li>Español – Nativo</li>
            <li>Inglés – Base</li>
          </ul>
        </section>

        {/* Habilidades */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-amber-300 mb-2">Habilidades</h2>
          <p className="text-gray-200">
            Git · GitHub · Dart · Flutter · Firebase · JavaScript · TypeScript · React
          </p>
        </section>

        {/* Contacto */}
        <section>
          <h2 className="text-2xl font-bold text-amber-300 mb-2">Encuéntrame en línea</h2>
          <ul className="text-gray-200">
            <li>
              📧{" "}
              <a href="mailto:rpe19971210@gmail.com" className="text-sky-400">
                rpe19971210@gmail.com
              </a>
            </li>
            <li>
              ⚔️{" "}
              <a
                href="https://github.com/blackgoku-97"
                target="_blank"
                className="text-purple-400"
              >
                github.com/blackgoku-97
              </a>
            </li>
            <li>
              🧙‍♂️{" "}
              <a
                href="https://www.linkedin.com/in/ricardo-perez-a31474229"
                target="_blank"
                className="text-sky-400"
              >
                linkedin.com/in/ricardo-perez
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
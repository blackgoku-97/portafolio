import {
  FaEnvelope,
  FaLinkedin,
  FaGlobe,
  FaUniversity,
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
  FaUserTie,
  FaLanguage,
  FaTools
} from "react-icons/fa"

export default function CurriculumContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white">
      <div className="w-full max-w-4xl bg-slate-800/70 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center tracking-wide">
          Currículum
        </h1>

        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <FaUserTie className="text-cyan-400" /> Resumen
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Ingeniero Informático con sólida formación académica y experiencia en
            <span className="font-semibold text-cyan-400"> desarrollo frontend y backend</span>,
            especializado en arquitecturas modernas y soluciones escalables.
            He trabajado con <span className="font-semibold">React, Node.js y Java con Spring</span>,
            integrando bases de datos relacionales y no relacionales.
            Actualmente estoy ampliando mis competencias hacia el
            <span className="font-semibold text-cyan-400"> desarrollo mobile con Flutter</span>,
            combinando mi enfoque técnico con una mentalidad organizada, proactiva
            y orientada a resultados, capaz de aportar valor en equipos multidisciplinarios.
          </p>
        </section>

        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <FaBriefcase className="text-cyan-400" /> Experiencia Laboral
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" />
              Proyecto Académico – App de Conversión de Monedas
            </h3>
            <p className="italic text-gray-400">2024 - 2025 · Proyecto académico</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Aplicación de escritorio en Java con integración de Exchange Rates API.</li>
              <li>Uso de Gson para parseo de datos y arquitectura modular.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" />
              Proyecto Académico – App de Librería
            </h3>
            <p className="italic text-gray-400">2024 - 2025 · Proyecto académico</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Gestión de libros y autores con Java, Spring y PostgreSQL.</li>
              <li>Implementación de API REST y persistencia con JPA.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" />
              Proyecto Académico – App de Foro
            </h3>
            <p className="italic text-gray-400">2024 - 2025 · Proyecto académico</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Aplicación web para gestión de tópicos y usuarios.</li>
              <li>Desarrollada con Java, Spring y MySQL, probada con Insomnia.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" />
              Desarrollador Laravel – Betech
            </h3>
            <p className="italic text-gray-400">03/2022 - 05/2022 · Concepción</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Desarrollo backend y frontend con PHP, JavaScript, CSS y MySQL.</li>
              <li>Optimización de interfaces responsivas con Bootstrap.</li>
              <li>Diseño y maquetación de UI orientadas a la usabilidad.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-400 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" />
              Desarrollador Laravel – Himce
            </h3>
            <p className="italic text-gray-400">08/2019 - 10/2019 · San Pedro de la Paz</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Desarrollo de aplicaciones web innovadoras.</li>
              <li>Implementación de soluciones escalables con Laravel.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-cyan-400" /> Educación
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-sky-400 flex items-center gap-2">
              <FaUniversity className="text-blue-400" />
              Programa Oracle Next Education (ONE) – Alura & Oracle
            </h3>
            <p className="italic text-gray-400">2024 - 2025</p>
            <p className="text-gray-200">Modalidad: online · Estado: finalizado</p>
            <p className="text-gray-200 mt-1">
              Formación intensiva en desarrollo web y backend con enfoque en empleabilidad,
              proyectos prácticos y colaboración internacional. Tecnologías: Java, Spring,
              MySQL, PostgreSQL, APIs REST y metodologías ágiles.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-sky-400 flex items-center gap-2">
              <FaUniversity className="text-blue-400" />
              Ingeniero Informático – Universidad Técnica de Inacap
            </h3>
            <p className="italic text-gray-400">03/2020 - 12/2021 · Concepción - Talcahuano</p>
            <p className="text-gray-200">Modalidad: online · Estado: titulado</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky-400 flex items-center gap-2">
              <FaUniversity className="text-blue-400" />
              Analista Programador – Instituto Técnico de Inacap
            </h3>
            <p className="italic text-gray-400">03/2017 - 07/2019 · Concepción - Talcahuano</p>
            <p className="text-gray-200">Modalidad: presencial · Estado: titulado</p>
          </div>
        </section>

        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <FaLanguage className="text-cyan-400" /> Idiomas
          </h2>
          <ul className="list-disc list-inside text-gray-200 leading-relaxed">
            <li>Español – Nativo</li>
            <li>Inglés – Intermedio (B1 CEFR, lectura técnica fluida)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-cyan-300 mb-2 flex items-center gap-2">
            <FaTools className="text-cyan-400" /> Habilidades
          </h2>
          <ul className="list-disc list-inside text-gray-200 leading-relaxed">
            <li><span className="font-semibold text-cyan-400">Frontend:</span> React, TypeScript, JavaScript</li>
            <li><span className="font-semibold text-cyan-400">Backend:</span> Node.js, Java & Spring</li>
            <li><span className="font-semibold text-cyan-400">Mobile:</span> Flutter (en progreso)</li>
            <li><span className="font-semibold text-cyan-400">Cloud & DB:</span> Firebase, MySQL, PostgreSQL, APIs REST</li>
            <li><span className="font-semibold text-cyan-400">Herramientas:</span> GitHub, VS Code, Insomnia</li>
          </ul>
        </section>

        <section className="mt-10 border-t border-gray-700 pt-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <FaEnvelope className="text-cyan-400" /> Contacto
          </h2>
          <div className="bg-slate-700/40 rounded-lg p-4">
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a
                  href="mailto:rpe19971210@gmail.com"
                  className="hover:text-cyan-300 transition-colors"
                >
                  rpe19971210@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedin className="text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/ricardo-perez-a31474229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-cyan-400" />
                <a
                  href="https://ricardoweb.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  ricardoweb.vercel.app
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white">
      <div className="w-full max-w-4xl bg-slate-800/70 rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center tracking-wide">
          Currículum
        </h1>
        <p className="mb-8 text-lg text-gray-300 text-center leading-relaxed">
          Ingeniero Informático con experiencia en desarrollo web y mobile. 
          Apasionado por crear soluciones escalables y eficientes, con foco en 
          frontend, mobile y arquitecturas modernas.
        </p>

        {/* Resumen */}
        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Resumen</h2>
          <p className="text-gray-200 leading-relaxed">
            Profesional organizado, responsable y proactivo.Busco aportar valor en equipos dinámicos y 
            seguir creciendo en el área tecnológica.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Experiencia</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-400">
              Desarrollador Laravel – Betech
            </h3>
            <p className="italic text-gray-400">03/2022 - 05/2022 · Concepción</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Desarrollo full-stack con PHP, JavaScript, CSS y MySQL.</li>
              <li>Implementación de interfaces responsivas con Bootstrap.</li>
              <li>Diseño y maquetación de UI.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              Desarrollador Laravel – Himce
            </h3>
            <p className="italic text-gray-400">08/2019 - 10/2019 · San Pedro de la Paz</p>
            <ul className="list-disc list-inside text-gray-200 mt-2 leading-relaxed">
              <li>Desarrollo de aplicaciones web innovadoras.</li>
              <li>Uso de Laravel para aplicaciones escalables.</li>
            </ul>
          </div>
        </section>

        {/* Educación */}
        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Educación</h2>
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
        <section className="mb-10 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Idiomas</h2>
          <ul className="list-disc list-inside text-gray-200 leading-relaxed">
            <li>Español – Nativo</li>
            <li>Inglés – Intermedio</li>
          </ul>
        </section>

        {/* Habilidades */}
        <section>
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Habilidades</h2>
          <p className="text-gray-200 leading-relaxed">
            Node.js · React · Flutter · Firebase · TypeScript · GitHub · Java & Spring · JavaScript
          </p>
        </section>
      </div>
    </div>
  )
}
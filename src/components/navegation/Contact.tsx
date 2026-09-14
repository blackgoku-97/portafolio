import { MdEmail } from "react-icons/md"
import { FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import type { CSSProperties } from "react"
import { PageTitle } from "@/components"

export const Contact = () => {
  const contacts = [
    {
      name: "Correo",
      href: "mailto:rpe19971210@gmail.com",
      icon: <MdEmail />,
      desc: "Correo electrónico",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/blackgoku-97",
      icon: <FaGithub />,
      desc: "Repositorio de proyectos",
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "EmpleaONE",
      href: "https://app.aluracursos.com/emprega-one/profile/rpe19971210",
      icon: <FaGlobe />,
      desc: "Perfil de Alura",
      color: "from-green-400 to-green-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ricardo-perez-a31474229/",
      icon: <FaLinkedin />,
      desc: "LinkedIn",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/56931031944",
      icon: <FaWhatsapp />,
      desc: "WhatsApp",
      color: "from-green-400 to-green-600",
    },
  ]

  return (
    <section className="pt-24 pb-12 max-w-6xl mx-auto px-4 text-white flex flex-col items-center">
      <PageTitle
        subtitle={
          <>
            Puedes escribirme para proyectos, colaboraciones o nuevas oportunidades.<br />
            <span className="text-cyan-400 font-semibold">
              ¡Hablemos y creemos algo increíble juntos!
            </span>
          </>
        }
      >
        Contacto
      </PageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {contacts.map((c, i) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${c.name} - ${c.desc}`}
            style={{ "--stagger": i } as CSSProperties}
            className="animate-fade-up card-surface p-6 text-center hover:scale-105 hover:-rotate-1 active:scale-95 transition-transform duration-200"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full
                          bg-linear-to-r ${c.color} text-white text-3xl mx-auto mb-4`}
            >
              {c.icon}
            </div>
            <h2 className="text-2xl font-bold text-cyan-300">{c.name}</h2>
            <p className="mt-2 text-gray-200">{c.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

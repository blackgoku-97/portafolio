import { MdEmail } from "react-icons/md"
import { FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Contact() {
  const contacts = [
    {
      name: "Correo",
      href: "mailto:rpe19971210@gmail.com",
      icon: <MdEmail />,
      desc: "Correo electrónico",
      color: "text-cyan-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/blackgoku-97",
      icon: <FaGithub />,
      desc: "Repositorio de proyectos",
      color: "text-gray-200",
    },
    {
      name: "EmpleaONE",
      href: "https://app.aluracursos.com/emprega-one/profile/rpe19971210",
      icon: <FaGlobe />,
      desc: "Perfil de Alura",
      color: "text-green-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ricardo-perez-a31474229/",
      icon: <FaLinkedin />,
      desc: "LinkedIn",
      color: "text-blue-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/56931031944",
      icon: <FaWhatsapp />,
      desc: "WhatsApp",
      color: "text-green-500",
    },
  ]

  return (
    <div className="p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6">Contacto</h1>
      <p className="mb-8 text-lg text-center max-w-2xl text-gray-300">
        Puedes escribirme para proyectos, colaboraciones o nuevas oportunidades.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {contacts.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 border border-cyan-500 rounded-lg p-6 text-center
                       hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 transition-transform"
          >
            <div className={`text-5xl mb-4 flex justify-center ${c.color}`}>
              {c.icon}
            </div>
            <h2 className="text-2xl font-bold text-cyan-300">{c.name}</h2>
            <p className="mt-2 text-gray-200">{c.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
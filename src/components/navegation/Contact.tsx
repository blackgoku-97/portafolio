"use client"

import { MdEmail } from "react-icons/md"
import { FaGithub, FaGlobe, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

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
    <section className="section-spacing max-w-6xl mx-auto px-4 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-6 pt-20">Contacto</h1>
      <p className="mb-8 text-lg text-center max-w-2xl text-gray-300">
        Puedes escribirme para proyectos, colaboraciones o nuevas oportunidades.<br />
        <span className="text-cyan-400 font-semibold">
          ¡Hablemos y creemos algo increíble juntos!
        </span>
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {contacts.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${c.name} - ${c.desc}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-900/70 border border-cyan-500 rounded-lg p-6 text-center
                       hover:scale-105 hover:shadow-cyan-500/40 transition-transform duration-300"
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full 
                          bg-linear-to-r ${c.color} text-white text-3xl mx-auto mb-4`}
            >
              {c.icon}
            </div>
            <h2 className="text-2xl font-bold text-cyan-300">{c.name}</h2>
            <p className="mt-2 text-gray-200">{c.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

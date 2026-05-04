import { ReactNode } from "react"
import { motion } from "framer-motion"

interface SkillsCardProps {
  name: string
  desc: string
  icon: ReactNode
}

export const SkillsCard: React.FC<SkillsCardProps> = ({ name, desc, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-slate-900/70 border border-cyan-500/30 rounded-xl p-6 shadow-md 
                 hover:shadow-cyan-500/50 hover:brightness-110 transition-transform duration-300"
    >
      {/* Ícono con gradiente opcional */}
      <div className="text-6xl mb-4 flex justify-center 
                      bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {icon}
      </div>

      {/* Nombre de la skill */}
      <h3
        className="text-lg md:text-xl font-bold text-center"
        aria-label={`Skill: ${name}`}
      >
        {name}
      </h3>

      {/* Descripción */}
      <p
        className="mt-2 text-sm md:text-base text-gray-400 text-center"
        aria-label={`Description: ${desc}`}
      >
        {desc}
      </p>
    </motion.div>
  )
}
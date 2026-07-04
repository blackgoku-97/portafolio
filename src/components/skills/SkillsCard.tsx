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
      className="card-surface p-6"
    >
      {/* Ícono con acento circular */}
      <div className="mb-4 flex justify-center">
        <span className="text-6xl inline-flex items-center justify-center rounded-full bg-cyan-500/10 p-4">
          {icon}
        </span>
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
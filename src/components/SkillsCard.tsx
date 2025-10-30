import { ReactNode } from "react"
import { motion } from "framer-motion"

interface SkillsCardProps {
  name: string
  desc: string
  icon: ReactNode
}

export default function SkillsCard({ name, desc, icon }: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-slate-900/70 border border-cyan-500/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition-transform duration-300"
    >
      <div className="text-6xl mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-center">{name}</h3>
      <p className="mt-2 text-gray-400 text-center">{desc}</p>
    </motion.div>
  )
}
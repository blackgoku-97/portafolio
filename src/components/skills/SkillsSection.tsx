"use client"
import { motion } from "framer-motion"
import { SkillsCard } from "@/components"
import { JSX } from "react"

interface Skill {
  name: string
  desc: string
  icon: JSX.Element
}

interface SkillsSectionProps {
  title: string
  skills: Skill[]
  columns?: string // opcional para variar el grid
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills, columns = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <>
    <h3 className="text-2xl font-bold text-cyan-200 mb-6">{title}</h3>
    <motion.div
      className={`grid grid-cols-1 ${columns} gap-8 mb-12`}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} variants={item} transition={{ duration: 0.5 }}>
          <SkillsCard {...skill} />
        </motion.div>
      ))}
    </motion.div>
  </>
)

import { SkillsCard } from "@/components"
import type { CSSProperties, JSX } from "react"

interface Skill {
  name: string
  desc: string
  icon: JSX.Element
}

interface SkillsSectionProps {
  title?: string
  skills: Skill[]
  columns?: string // opcional para variar el grid
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills, columns = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <>
    {title && <h3 className="text-2xl font-bold text-cyan-200 mb-6">{title}</h3>}
    <div className={`grid grid-cols-1 ${columns} gap-8 mb-12`}>
      {skills.map((skill, i) => (
        <div key={skill.name} style={{ "--stagger": i } as CSSProperties} className="animate-fade-up">
          <SkillsCard {...skill} />
        </div>
      ))}
    </div>
  </>
)

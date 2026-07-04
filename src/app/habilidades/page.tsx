import type { Metadata } from "next"
import { Skills } from "@/components"

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Habilidades técnicas y blandas de Ricardo Pérez: lenguajes, frameworks y herramientas.",
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Skills />
    </main>
  )
}

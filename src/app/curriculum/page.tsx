import type { Metadata } from "next"
import { Curriculum } from "@/components"

export const metadata: Metadata = {
  title: "Currículum",
  description: "Experiencia profesional, formación y habilidades de Ricardo Pérez. Consulta o descarga su currículum.",
}

export default function CurriculumPage() {
  return (
    <main className="min-h-screen">
      <Curriculum />
    </main>
  )
}

import type { Metadata } from "next"
import { Curriculum } from "@/components"

export const metadata: Metadata = {
  title: "Currículum",
  description: "Descarga el currículum de Ricardo Pérez en PDF: experiencia laboral, educación y habilidades técnicas.",
}

export default function CurriculumPage() {
  return (
    <main className="min-h-screen">
      <Curriculum />
    </main>
  )
}

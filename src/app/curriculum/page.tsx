import type { Metadata } from "next"
import { Curriculum } from "@/components"

export const metadata: Metadata = {
  title: "Currículum",
  description: "Proyectos personales, prácticas profesionales, formación y habilidades de Ricardo Pérez, Desarrollador Web Junior.",
}

export default function CurriculumPage() {
  return (
    <main className="min-h-screen">
      <Curriculum />
    </main>
  )
}

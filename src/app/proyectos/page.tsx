import type { Metadata } from "next"
import { Projects } from "@/components"

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos destacados de Ricardo Pérez: desarrollo frontend y backend con React, Java y Spring.",
}

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <Projects />
    </main>
  )
}

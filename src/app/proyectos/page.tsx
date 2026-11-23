import type { Metadata } from "next"
import { Projects } from "@/components"

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos personales y académicos de Ricardo Pérez con React, TypeScript, Java y Spring.",
}

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <Projects />
    </main>
  )
}

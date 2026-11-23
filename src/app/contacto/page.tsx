import type { Metadata } from "next"
import { Contact } from "@/components"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Ricardo Pérez por oportunidades laborales junior o proyectos web pequeños.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}

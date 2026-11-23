import type { Metadata } from "next"
import { Contact } from "@/components"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Ricardo Pérez, disponible de inmediato para su primera oportunidad laboral junior y proyectos web pequeños.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}

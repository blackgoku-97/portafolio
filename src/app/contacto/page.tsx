import type { Metadata } from "next"
import { Contact } from "@/components"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactá a Ricardo Pérez para proyectos, colaboraciones o nuevas oportunidades.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}

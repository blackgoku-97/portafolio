import type { Metadata } from "next"
import { Hero } from "@/components";

export const metadata: Metadata = {
  title: "Ricardo Pérez — Desarrollador Web Junior",
  description: "Portafolio de Ricardo Pérez, Desarrollador Web Junior disponible para su primera oportunidad laboral formal y proyectos web pequeños.",
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}

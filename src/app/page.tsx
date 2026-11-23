import type { Metadata } from "next"
import { Hero } from "@/components";

export const metadata: Metadata = {
  title: "Ricardo Pérez — Desarrollador de Software Junior",
  description: "Portafolio profesional de Ricardo Pérez, Ingeniero Informático abierto a oportunidades junior en desarrollo de software. Revisa sus proyectos, habilidades y currículum.",
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}

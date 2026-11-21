import type { Metadata } from "next"
import { Hero } from "@/components";

export const metadata: Metadata = {
  title: "Ricardo Pérez — Ingeniero Informático",
  description: "Portafolio de Ricardo Pérez, Ingeniero Informático especializado en desarrollo web y móvil: proyectos, habilidades y currículum.",
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}

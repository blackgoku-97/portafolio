import "./globals.css"
import type { ReactNode } from "react"
import { Navbar, Footer } from "@/components"

export const metadata = {
  title: {
    default: "DevPerez",
    template: "%s | DevPerez",
  },
  description: "Portafolio de Ricardo Pérez, Ingeniero Informático especializado en desarrollo web y móvil.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="relative min-h-screen text-white font-sans">
        {/* Fondo global moderno */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-700 via-purple-700 to-pink-600 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Layout global */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

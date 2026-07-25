import "./globals.css"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar, Footer } from "@/components"
import { personalInfo, contacto } from "@/data/curriculum"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://www.ricardoweb.cl"),
  title: {
    default: "DevPerez",
    template: "%s | DevPerez",
  },
  description: "Portafolio de Ricardo Pérez, Ingeniero Informático especializado en desarrollo web y móvil.",
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.nombre,
  jobTitle: personalInfo.rol,
  url: `https://${personalInfo.web}`,
  email: contacto.find((c) => c.id === "email")?.href,
  sameAs: contacto.filter((c) => c.external).map((c) => c.href),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="relative min-h-screen text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/* Fondo global moderno */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-700 via-purple-700 to-pink-600 animate-gradient-x"></div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Layout global */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

import Link from "next/link"
import { PageTitle } from "@/components"

export default function NotFound() {
  return (
    <main className="pt-24 pb-12 max-w-2xl mx-auto px-4 text-center text-white">
      <PageTitle subtitle="La página que buscás no existe o fue movida.">
        404
      </PageTitle>
      <Link href="/" className="btn-primary inline-block px-6 py-2 rounded-md">
        Volver al inicio
      </Link>
    </main>
  )
}

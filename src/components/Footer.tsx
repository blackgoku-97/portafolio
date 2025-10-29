export default function Footer() {
  return (
    <footer className="w-full bg-slate-900/80 text-gray-400 text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Ricardo — Ingeniero Informático. Todos los derechos reservados.
      </p>
    </footer>
  )
}
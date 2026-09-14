import type { ReactNode } from "react"

interface PageTitleProps {
  children: ReactNode
  subtitle?: ReactNode
}

export const PageTitle = ({ children, subtitle }: PageTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="animate-fade-down text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-wide">
        {children}
      </h1>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
      {subtitle && (
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

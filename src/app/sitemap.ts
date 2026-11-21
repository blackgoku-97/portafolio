import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ricardoweb.cl"
  const now = new Date()

  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/habilidades", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/curriculum", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.6, changeFrequency: "yearly" as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}

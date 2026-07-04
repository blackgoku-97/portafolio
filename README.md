# Portafolio

Portafolio personal de Ricardo Pérez, Ingeniero Informático — desarrollado con
Next.js. Incluye presentación (Hero), proyectos, habilidades, contacto y un
currículum descargable en PDF, generado a partir de una única fuente de datos
compartida entre la vista web y el PDF.

Sitio en vivo: [www.ricardoweb.cl](https://www.ricardoweb.cl)

## Tecnologías usadas

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **[React 19](https://react.dev)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[Tailwind CSS 4](https://tailwindcss.com)** (CSS-first, `@theme`/`@utility`)
- **[Framer Motion](https://motion.dev)** — animaciones
- **[react-icons](https://react-icons.github.io/react-icons)** — íconos
- **[@react-pdf/renderer](https://react-pdf.org)** — generación del CV en PDF
- **[sharp](https://sharp.pixelplumbing.com)** — optimización de imágenes
- **[ESLint](https://eslint.org)** — linting
- **pnpm** — gestor de paquetes

## Estructura del proyecto

```
src/
├── app/                      # Rutas (App Router)
│   ├── page.tsx              # Home (Hero)
│   ├── proyectos/page.tsx
│   ├── habilidades/page.tsx
│   ├── contacto/page.tsx
│   ├── curriculum/page.tsx
│   ├── layout.tsx            # Layout raíz (Navbar, Footer, fondo animado)
│   └── globals.css           # Tailwind + utilidades compartidas
│
├── components/
│   ├── navegation/            # Navbar, Footer, Hero, Contact
│   ├── projects/              # Projects, ProjectCard
│   ├── skills/                # Skills, SkillsSection, SkillsCard, Technical/SoftSkills
│   ├── curriculum/             # Vista del currículum + generador de PDF
│   │   ├── Curriculum.tsx           # Orquestador (botón descargar CV)
│   │   ├── CurriculumContent.tsx    # Vista web
│   │   ├── CurriculumPDF.tsx        # Documento PDF (@react-pdf/renderer)
│   │   ├── Curriculum.styles.ts     # Estilos del PDF
│   │   ├── SectionHeader.tsx        # Encabezado de sección reutilizable
│   │   └── Resumen.tsx, ExperienciaLaboral.tsx, Educacion.tsx,
│   │       Certificaciones.tsx, Social.tsx
│   ├── ui/                    # Componentes de UI genéricos (PageTitle)
│   └── index.ts               # Barrel de exports
│
└── data/
    └── curriculum.ts          # Única fuente de datos del CV (web + PDF)
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el resultado.

Otros comandos:

```bash
pnpm build   # build de producción
pnpm start   # servir el build de producción
pnpm lint    # linting
```

## Deploy

Desplegado en [Vercel](https://vercel.com).

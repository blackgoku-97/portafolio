# Portafolio de Ricardo Pérez

Portafolio profesional de Ricardo Pérez, Ingeniero Informático y Desarrollador
Web Junior. Estoy buscando mi primera oportunidad laboral formal y también
converso sobre proyectos web pequeños y bien definidos.

Sitio publicado: [www.ricardoweb.cl](https://www.ricardoweb.cl)

## Proyectos destacados

- **Café Bruma:** sitio responsive para una cafetería ficticia. Incluye catálogo
  con filtros por categoría, historia y una sección de ubicación de muestra.
  - [Demo](https://cafe-sigma-blush.vercel.app/)
  - [Código fuente](https://github.com/blackgoku-97/cafe)
  - Los productos, precios, horarios y datos de ubicación son ficticios.
- **Gestor de Tareas:** aplicación frontend con React, TypeScript y almacenamiento
  local mediante IndexedDB.
- **Gestor de Presupuestos:** aplicación frontend con formularios, métricas y
  persistencia local.
- **Proyectos académicos:** aplicaciones Java, APIs REST y ejercicios de
  integración con servicios externos.

## Tecnologías

- **Next.js**, **React** y **TypeScript**
- **Tailwind CSS**
- **Java** y **Spring Boot**
- **Laravel**, **PHP** y **MySQL**
- **PostgreSQL**, **Git** y **GitHub**
- **@react-pdf/renderer** para generar el currículum PDF
- **pnpm** como gestor de paquetes

## Estructura

```text
src/
├── app/                 # Rutas del App Router
│   ├── contacto/
│   ├── curriculum/
│   │   └── pdf/         # Endpoint que genera el CV descargable
│   ├── habilidades/
│   ├── proyectos/
│   └── page.tsx         # Portada
├── components/
│   ├── curriculum/      # Vista web, plantilla PDF y estilos del PDF
│   ├── navegation/      # Portada, navegación, contacto y pie de página
│   ├── projects/        # Listado y tarjetas de proyectos
│   ├── skills/          # Secciones de habilidades
│   └── ui/              # Componentes de interfaz compartidos
├── data/
│   └── curriculum.ts    # Datos compartidos entre el CV web y el PDF
└── assets/fonts/        # Fuentes locales usadas por el PDF
```

## Desarrollo local

Requisitos: Node.js y pnpm.

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

Comandos disponibles:

```bash
pnpm lint   # Ejecuta ESLint
pnpm build  # Genera la compilación de producción
pnpm start  # Sirve la compilación de producción
```

## Despliegue

El sitio está desplegado en [Vercel](https://vercel.com).

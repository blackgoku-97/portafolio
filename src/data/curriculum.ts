export interface PersonalInfo {
  nombre: string;
  rol: string;
  web: string;
}

export const personalInfo: PersonalInfo = {
  nombre: "Ricardo Pérez",
  rol: "Ingeniero Informático",
  web: "www.ricardoweb.cl",
};

export type SocialIcon = "email" | "github" | "linkedin";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icono: SocialIcon;
  external?: boolean;
}

export const contacto: SocialLink[] = [
  { id: "email", label: "Correo Profesional", href: "mailto:rpe19971210@gmail.com", icono: "email" },
  { id: "github", label: "GitHub", href: "https://github.com/blackgoku-97", icono: "github", external: true },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ricardo-perez-a31474229/", icono: "linkedin", external: true },
];

export interface ResumenParrafo {
  texto: string;
  destacado?: string;
}

export const resumen: ResumenParrafo[] = [
  {
    texto: "Ingeniero Informático con experiencia en desarrollo de aplicaciones y soluciones digitales. Me interesa crear proyectos que sean rápidos, confiables y fáciles de usar.",
  },
  {
    texto: "Mi diferencia está en la capacidad de resolver problemas de manera práctica y aportar ideas nuevas que mejoren los resultados de un equipo o empresa.",
    destacado: "resolver problemas",
  },
  {
    texto: "Puedo aportar organización, trabajo en equipo y aprendizaje constante, asegurando que cada proyecto avance con calidad y cumpla objetivos reales.",
    destacado: "organización, trabajo en equipo y aprendizaje constante",
  },
];

export interface ExperienciaItem {
  titulo: string;
  fecha: string;
  items: string[];
}

export const experiencia: ExperienciaItem[] = [
  {
    titulo: "Práctica Profesional – Desarrollador Laravel en Betech",
    fecha: "03/2022 - 05/2022 · Concepción",
    items: [
      "Desarrollo backend y frontend con PHP, JavaScript, CSS y MySQL.",
      "Optimización de interfaces responsivas con Bootstrap.",
      "Diseño y maquetación de UI orientadas a la usabilidad.",
    ],
  },
  {
    titulo: "Práctica Profesional – Desarrollador Laravel en Himce",
    fecha: "08/2019 - 10/2019 · San Pedro de la Paz",
    items: [
      "Desarrollo de aplicaciones web innovadoras.",
      "Implementación de soluciones escalables con Laravel.",
    ],
  },
  {
    titulo: "Proyecto Académico – App de Conversión de Monedas",
    fecha: "2024 - 2025 · Proyecto académico",
    items: [
      "Aplicación de escritorio en Java con integración de Exchange Rates API.",
      "Uso de Gson para parseo de datos y arquitectura modular.",
    ],
  },
  {
    titulo: "Proyecto Académico – App de Librería",
    fecha: "2024 - 2025 · Proyecto académico",
    items: [
      "Gestión de libros y autores con Java, Spring y PostgreSQL.",
      "Implementación de API REST y persistencia con JPA.",
    ],
  },
  {
    titulo: "Proyecto Académico – App de Foro",
    fecha: "2024 - 2025 · Proyecto académico",
    items: [
      "Aplicación web para gestión de tópicos y usuarios.",
      "Desarrollada con Java, Spring y MySQL, probada con Insomnia.",
    ],
  },
  {
    titulo: "Gestor de Tareas – Frontend",
    fecha: "01/2026 · Proyecto personal",
    items: [
      "Interfaz web en React + Vite + Tailwind CSS para gestionar tareas.",
      "Uso de Tailwind CSS y IndexedDB para almacenamiento local.",
    ],
  },
  {
    titulo: "Gestor de Presupuestos – Frontend",
    fecha: "01/2026 · Proyecto personal",
    items: [
      "Aplicación web en React + Vite + Tailwind CSS para gestionar clientes y presupuestos.",
      "Persistencia local con IndexedDB y visualización de métricas con Nivo.",
      "Modo oscuro total y formularios modernos con validaciones.",
    ],
  },
];

export interface EstudioEntry {
  titulo: string;
  fecha: string;
  modalidad: string;
  detalle?: string;
}

export const educacion: EstudioEntry[] = [
  {
    titulo: "Programa Oracle Next Education (ONE) – Alura & Oracle",
    fecha: "2024 - 2025",
    modalidad: "Modalidad: online · Estado: finalizado",
    detalle:
      "Formación intensiva en desarrollo web y backend con enfoque en empleabilidad, proyectos prácticos y colaboración internacional. Tecnologías: Java, Spring, MySQL, PostgreSQL, APIs REST y metodologías ágiles.",
  },
  {
    titulo: "Ingeniero Informático – Universidad Técnica de Inacap",
    fecha: "03/2020 - 12/2021 · Concepción - Talcahuano",
    modalidad: "Modalidad: online · Estado: titulado",
  },
  {
    titulo: "Analista Programador – Instituto Técnico de Inacap",
    fecha: "03/2017 - 07/2019 · Concepción - Talcahuano",
    modalidad: "Modalidad: presencial · Estado: titulado",
  },
];

export interface Certificacion {
  titulo: string;
  plataforma: string;
  instructor: string;
  fecha: string;
  duracion: string;
  url: string;
}

export const certificaciones: Certificacion[] = [
  {
    titulo: "Next.js: El framework de React para producción",
    plataforma: "Udemy",
    instructor: "Fernando Herrera · DevTalles",
    fecha: "Junio 2026",
    duracion: "39 horas",
    url: "https://ude.my/UC-33b004f5-2539-46e3-bf86-8fef081de1a3",
  },
  {
    titulo: "Dart: De cero hasta los detalles",
    plataforma: "Udemy",
    instructor: "Fernando Herrera · DevTalles",
    fecha: "Junio 2026",
    duracion: "10 horas",
    url: "https://ude.my/UC-7cfb497a-f0fe-4f24-80c5-3522d692157d",
  },
  {
    titulo: "Curso Completo de Claude Code: Crea Aplicaciones con IA",
    plataforma: "Udemy",
    instructor: "Santiago Hernández",
    fecha: "Julio 2026",
    duracion: "15 horas",
    url: "https://ude.my/UC-9496939e-6eb1-4985-9716-89d2074889ac",
  },
];

export interface IdiomaEntry {
  idioma: string;
  nivel: string;
}

export const idiomas: IdiomaEntry[] = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Inglés", nivel: "Intermedio (A2, lectura técnica fluida)" },
];

export interface HabilidadTecnicaGrupo {
  categoria: string;
  items: string[];
}

export const habilidadesTecnicas: HabilidadTecnicaGrupo[] = [
  { categoria: "Lenguajes", items: ["Java", "JavaScript", "TypeScript", "Dart", "SQL"] },
  { categoria: "Frameworks", items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Spring Boot", "Flutter"] },
  { categoria: "Base de datos", items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
  { categoria: "Herramientas", items: ["Git", "GitHub", "Docker", "Postman"] },
  { categoria: "IDEs", items: ["Visual Studio Code", "IntelliJ IDEA"] },
  { categoria: "IA", items: ["Copilot", "Claude"] },
];

export type SoftSkillIcon = "team" | "communication" | "problem-solving" | "self-learning";

export interface SoftSkill {
  nombre: string;
  icono: SoftSkillIcon;
  colorClass: string;
}

export const habilidadesBlandas: SoftSkill[] = [
  { nombre: "Trabajo en equipo", icono: "team", colorClass: "text-cyan-400" },
  { nombre: "Comunicación", icono: "communication", colorClass: "text-green-400" },
  { nombre: "Resolución de problemas", icono: "problem-solving", colorClass: "text-yellow-400" },
  { nombre: "Autodidacta", icono: "self-learning", colorClass: "text-purple-400" },
];

export interface InformacionAdicionalData {
  titulo: string;
  texto: string;
}

export const informacionAdicional: InformacionAdicionalData = {
  titulo: "Información adicional",
  texto:
    "Discapacidad reconocida por SENADIS: usuario de silla de ruedas, gestionada con autonomía y sin impacto en desempeño profesional.",
};

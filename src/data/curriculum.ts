export interface PersonalInfo {
  nombre: string;
  rol: string;
  web: string;
}

export const personalInfo: PersonalInfo = {
  nombre: "Ricardo Pérez",
  rol: "Ingeniero Informático · Desarrollador Web Junior",
  web: "www.ricardoweb.cl",
};

export type SocialIcon = "email" | "github" | "linkedin" | "whatsapp";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icono: SocialIcon;
  external?: boolean;
}

export const contacto: SocialLink[] = [
  { id: "email", label: "Correo Electrónico", href: "mailto:rpe19971210@gmail.com", icono: "email" },
  { id: "github", label: "GitHub", href: "https://github.com/blackgoku-97", icono: "github", external: true },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ricardo-perez-a31474229/", icono: "linkedin", external: true },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/56931031944", icono: "whatsapp", external: true },
];

// Resumen compartido entre el currículum web y el PDF descargable.
export const resumenPdf: string =
  "Ingeniero Informático y Desarrollador Web Junior en búsqueda de mi primera oportunidad laboral formal. He desarrollado proyectos personales con React, TypeScript, Java y Spring, y realicé prácticas profesionales de desarrollo web en Betech y Himce. Estoy disponible para incorporarme de inmediato y seguir creciendo junto a un equipo.";

export interface ExperienciaItem {
  titulo: string;
  fecha: string;
  items: string[];
}

export const practicasProfesionales: ExperienciaItem[] = [
  {
    titulo: "Práctica Profesional – Desarrollador Laravel en Betech",
    fecha: "03/2022 - 05/2022 · Concepción",
    items: [
      "Desarrollé funcionalidades backend y frontend con PHP, JavaScript, CSS y MySQL.",
      "Diseñé y optimicé interfaces responsivas con Bootstrap, enfocadas en la usabilidad.",
    ],
  },
  {
    titulo: "Práctica Profesional – Desarrollador Laravel en Himce",
    fecha: "08/2019 - 10/2019 · San Pedro de la Paz",
    items: [
      "Desarrollé aplicaciones web utilizando Laravel.",
    ],
  },
];

export type ProyectoTipo = "academico" | "personal";

export interface ProyectoItem extends ExperienciaItem {
  tipo: ProyectoTipo;
  // Marca los proyectos más representativos para el PDF de 1 página (la web sigue mostrando todos).
  destacado?: boolean;
  url?: string;
  demoUrl?: string;
}

export const proyectos: ProyectoItem[] = [
  {
    titulo: "Café Bruma",
    fecha: "11/2026",
    tipo: "personal",
    destacado: true,
    url: "https://github.com/blackgoku-97/cafe",
    demoUrl: "https://cafe-sigma-blush.vercel.app/",
    items: [
      "Sitio responsive para una cafetería ficticia, con catálogo de productos filtrable, historia y sección de ubicación de muestra.",
      "Desarrollado con Next.js, React, Tailwind CSS y Lucide React.",
    ],
  },
  {
    titulo: "Gestor de Tareas – Frontend",
    fecha: "01/2026",
    tipo: "personal",
    destacado: true,
    url: "https://github.com/blackgoku-97/gestor-tareas-frontend",
    demoUrl: "https://gestor-tareas-frontend-olive.vercel.app/",
    items: [
      "Interfaz web en React + Vite + Tailwind CSS para gestionar tareas.",
      "Uso de Tailwind CSS y IndexedDB para almacenamiento local.",
    ],
  },
  {
    titulo: "Gestor de Presupuestos – Frontend",
    fecha: "01/2026",
    tipo: "personal",
    destacado: true,
    url: "https://github.com/blackgoku-97/frontend-presupuestos",
    demoUrl: "https://frontend-presupuestos-delta.vercel.app/",
    items: [
      "Aplicación web en React + Vite + Tailwind CSS para gestionar clientes y presupuestos.",
      "Persistencia local con IndexedDB y visualización de métricas con Nivo.",
      "Modo oscuro total y formularios modernos con validaciones.",
    ],
  },
  {
    titulo: "App de Conversión de Monedas",
    fecha: "2024 - 2025",
    tipo: "academico",
    url: "https://github.com/blackgoku-97/transformador_monedas",
    items: [
      "Aplicación de escritorio en Java con integración de Exchange Rates API.",
      "Uso de Gson para parseo de datos y arquitectura modular.",
    ],
  },
  {
    titulo: "App de Librería",
    fecha: "2024 - 2025",
    tipo: "academico",
    url: "https://github.com/blackgoku-97/java-spring-libreria",
    items: [
      "Gestión de libros y autores con Java, Spring y PostgreSQL.",
      "Implementación de API REST y persistencia con JPA.",
    ],
  },
  {
    titulo: "App de Foro",
    fecha: "2024 - 2025",
    tipo: "academico",
    url: "https://github.com/blackgoku-97/foroapi",
    items: [
      "Aplicación web para gestión de tópicos y usuarios.",
      "Desarrollada con Java, Spring y MySQL, probada con Insomnia.",
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
  // Marca las certificaciones más relevantes para el PDF de 1 página (la web sigue mostrando todas).
  destacado?: boolean;
}

export const certificaciones: Certificacion[] = [
  {
    titulo: "Curso Completo de Claude Code: Crea Aplicaciones con IA",
    plataforma: "Udemy",
    instructor: "Santiago Hernández",
    fecha: "Julio 2026",
    duracion: "15 horas",
    url: "https://ude.my/UC-9496939e-6eb1-4985-9716-89d2074889ac",
    destacado: true,
  },
  {
    titulo: "Next.js: El framework de React para producción",
    plataforma: "Udemy",
    instructor: "Fernando Herrera · DevTalles",
    fecha: "Junio 2026",
    duracion: "39 horas",
    url: "https://ude.my/UC-33b004f5-2539-46e3-bf86-8fef081de1a3",
    destacado: true,
  },
  {
    titulo: "Dart: De cero hasta los detalles",
    plataforma: "Udemy",
    instructor: "Fernando Herrera · DevTalles",
    fecha: "Junio 2026",
    duracion: "10 horas",
    url: "https://ude.my/UC-7cfb497a-f0fe-4f24-80c5-3522d692157d",
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
  { categoria: "Lenguajes", items: ["Java", "JavaScript", "TypeScript", "Dart", "PHP", "SQL"] },
  { categoria: "Frameworks", items: ["React", "Vite", "Next.js", "Tailwind CSS", "Node.js", "Spring Boot", "Flutter", "Laravel", "Bootstrap"] },
  { categoria: "Base de datos", items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
  { categoria: "Herramientas", items: ["Git", "GitHub", "Docker", "Postman", "Insomnia"] },
  { categoria: "IDEs", items: ["Visual Studio Code", "IntelliJ IDEA"] },
  { categoria: "IA", items: ["Copilot", "Claude"] },
];

const habilidadesDemostradas = new Set([
  "Java",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "React",
  "Vite",
  "Next.js",
  "Tailwind CSS",
  "Spring Boot",
  "Laravel",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Insomnia",
]);

export const habilidadesParaCurriculum = habilidadesTecnicas
  .map((grupo) => ({
    ...grupo,
    items: grupo.items.filter((item) => habilidadesDemostradas.has(item)),
  }))
  .filter((grupo) => grupo.items.length > 0);

export interface InformacionAdicionalData {
  titulo: string;
  texto: string;
}

export const informacionAdicional: InformacionAdicionalData = {
  titulo: "Información adicional",
  texto:
    "Persona con discapacidad reconocida por SENADIS y usuario de silla de ruedas. Me desenvuelvo con autonomía.",
};

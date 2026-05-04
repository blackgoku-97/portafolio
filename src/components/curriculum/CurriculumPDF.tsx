"use client";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { JSX } from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 70,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },
  header: {
    position: "absolute",
    top: 20,
    left: 30,
    right: 30,
    fontSize: 12,
    color: "#0ea5e9",
    borderBottom: "1pt solid #0ea5e9",
    paddingBottom: 4,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: "center",
    fontSize: 10,
    color: "#6b7280",
    borderTop: "1pt solid #0ea5e9",
    paddingTop: 4,
  },
  section: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: "#f0f9ff",
    borderRadius: 4,
  },
  title: {
    fontSize: 20,
    color: "#0ea5e9",
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#e0f2fe",
    padding: 6,
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "bold",
    color: "#0369a1",
  },
  text: {
    fontSize: 12,
    color: "#111827",
    lineHeight: 1.4,
    marginBottom: 2,
  },
  listItem: {
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 2,
    color: "#374151",
  },
});

export const CurriculumPDF = (): JSX.Element => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Ricardo Pérez — Ingeniero Informático · 📧 rpe19971210@gmail.com · 🌐 ricardoweb.vercel.app
        </Text>

        {/* Resumen */}
        <View style={styles.section}>
          <Text style={styles.title}>Currículum</Text>
          <Text style={styles.subtitle}>Resumen</Text>
          <Text style={styles.text}>
            Ingeniero Informático con experiencia en frontend, backend y mobile, apasionado por crear soluciones digitales que combinan rendimiento, escalabilidad y diseño moderno.
          </Text>
          <Text style={styles.text}>He trabajado con tecnologías clave en el ecosistema full stack:</Text>
          <Text style={styles.listItem}>• React</Text>
          <Text style={styles.listItem}>• Node.js</Text>
          <Text style={styles.listItem}>• Java + Spring</Text>
          <Text style={styles.listItem}>• SQL / NoSQL</Text>
          <Text style={styles.listItem}>• Flutter</Text>
          <Text style={styles.text}>
            Actualmente impulso mi crecimiento en Flutter y desarrollo mobile, llevando mi enfoque full stack hacia aplicaciones multiplataforma.
          </Text>
        </View>

        {/* Experiencia Laboral */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Experiencia Laboral</Text>
          <Text style={styles.subtitle}>Prácticas Profesionales</Text>
          <Text style={styles.text}>
            Práctica Profesional – Desarrollador Laravel en Betech (03/2022 - 05/2022 · Concepción)
          </Text>
          <Text style={styles.listItem}>• Desarrollo backend y frontend con PHP, JavaScript, CSS y MySQL</Text>
          <Text style={styles.listItem}>• Optimización de interfaces responsivas con Bootstrap</Text>
          <Text style={styles.listItem}>• Diseño y maquetación de UI orientadas a la usabilidad</Text>
          <Text style={styles.text}>
            Práctica Profesional – Desarrollador Laravel en Himce (08/2019 - 10/2019 · San Pedro de la Paz)
          </Text>
          <Text style={styles.listItem}>• Desarrollo de aplicaciones web innovadoras</Text>
          <Text style={styles.listItem}>• Implementación de soluciones escalables con Laravel</Text>
        </View>

        {/* Proyectos Académicos */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Proyectos Académicos</Text>
          <Text style={styles.text}>Proyecto Académico – App de Conversión de Monedas (2024 - 2025)</Text>
          <Text style={styles.listItem}>• Aplicación de escritorio en Java con integración de Exchange Rates API</Text>
          <Text style={styles.listItem}>• Uso de Gson y arquitectura modular</Text>
          <Text style={styles.text}>Proyecto Académico – App de Librería (2024 - 2025)</Text>
          <Text style={styles.listItem}>• Gestión de libros y autores con Java, Spring y PostgreSQL</Text>
          <Text style={styles.listItem}>• API REST y persistencia con JPA</Text>
          <Text style={styles.text}>Proyecto Académico – App de Foro (2024 - 2025)</Text>
          <Text style={styles.listItem}>• Aplicación web para gestión de tópicos y usuarios</Text>
          <Text style={styles.listItem}>• Desarrollada con Java, Spring y MySQL, probada con Insomnia</Text>
        </View>

        {/* Proyectos Personales */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Proyectos Personales</Text>
          <Text style={styles.text}>Gestor de Tareas – Frontend (01/2026)</Text>
          <Text style={styles.listItem}>• React + Vite, Tailwind CSS, IndexedDB</Text>
          <Text style={styles.text}>Gestor de Presupuestos – Frontend (01/2026)</Text>
          <Text style={styles.listItem}>• React + Vite, Tailwind CSS, TypeScript</Text>
          <Text style={styles.listItem}>• Persistencia local con IndexedDB y visualización con Nivo</Text>
          <Text style={styles.listItem}>• Modo oscuro total y formularios modernos con validaciones</Text>
        </View>

        {/* Educación */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Educación</Text>
          <Text style={styles.text}>Programa Oracle Next Education (ONE) – Alura & Oracle (2024 - 2025)</Text>
          <Text style={styles.text}>Ingeniero Informático – Universidad Técnica de Inacap (2020 - 2021)</Text>
          <Text style={styles.text}>Analista Programador – Instituto Técnico de Inacap (2017 - 2019)</Text>
        </View>

        {/* Idiomas */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Idiomas</Text>
          <Text style={styles.text}>Español – Nativo</Text>
          <Text style={styles.text}>Inglés – Intermedio (A2, lectura técnica fluida)</Text>
        </View>

        {/* Habilidades Técnicas */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Habilidades Técnicas</Text>
          <Text style={styles.text}>Frontend: React, TypeScript, JavaScript</Text>
          <Text style={styles.text}>Backend: Node.js, Java & Spring, Tailwind CSS</Text>
          <Text style={styles.text}>Mobile: Flutter</Text>
          <Text style={styles.text}>DB: Firebase, MySQL, PostgreSQL</Text>
          <Text style={styles.text}>Herramientas: GitHub, VS Code, Insomnia</Text>
          <Text style={styles.text}>IA: Copilot, Windsurf</Text>
        </View>

        {/* Habilidades Blandas */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Habilidades Blandas</Text>
          <Text style={styles.listItem}>• Trabajo en equipo</Text>
          <Text style={styles.listItem}>• Comunicación</Text>
          <Text style={styles.listItem}>• Resolución de problemas</Text>
          <Text style={styles.listItem}>• Autodidacta</Text>
        </View>

        {/* Contacto */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Contacto</Text>
          <Text style={styles.text}>rpe19971210@gmail.com</Text>
          <Text style={styles.text}>github.com/blackgoku-97</Text>
          <Text style={styles.text}>linkedin.com/in/ricardo-perez-a31474229</Text>
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Página ${pageNumber} de ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}
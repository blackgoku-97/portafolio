"use client";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { JSX } from "react";
import { styles } from "./Curriculum.styles";

export const CurriculumPDF = (): JSX.Element => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Ricardo Pérez — Ingeniero Informático · 🌐 ricardoweb.cl
        </Text>

        <View style={styles.section}>
          <Text style={styles.title}>Currículum</Text>
          <Text style={styles.subtitle}>Resumen</Text>
          <Text style={styles.text}>
            Ingeniero Informático con experiencia en desarrollo de aplicaciones y soluciones digitales. 
            Me interesa crear proyectos que sean rápidos, confiables y fáciles de usar.
          </Text>
          <Text style={styles.text}>
            Mi diferencia está en la capacidad de resolver problemas de manera práctica y aportar ideas nuevas 
            que mejoren los resultados de un equipo o empresa.
          </Text>
          <Text style={styles.text}>
            Puedo aportar organización, trabajo en equipo y aprendizaje constante, asegurando que cada proyecto 
            avance con calidad y cumpla objetivos reales.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Experiencia Laboral</Text>
          <Text style={styles.text}>
            Práctica Profesional – Desarrollador Laravel en Betech (03/2022 - 05/2022 · Concepción)
          </Text>
          <Text style={styles.listItem}>• Desarrollo con PHP, JavaScript, CSS y MySQL</Text>
          <Text style={styles.listItem}>• Optimización de interfaces responsivas con Bootstrap</Text>
          <Text style={styles.listItem}>• Diseño y maquetación de UI orientadas a la usabilidad</Text>
          <Text style={styles.text}>
            Práctica Profesional – Desarrollador Laravel en Himce (08/2019 - 10/2019 · San Pedro de la Paz)
          </Text>
          <Text style={styles.listItem}>• Desarrollo de aplicaciones web innovadoras</Text>
          <Text style={styles.listItem}>• Implementación de soluciones escalables con Laravel</Text>
        </View>

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

        <View style={styles.section}>
          <Text style={styles.subtitle}>Proyectos Personales</Text>
          <Text style={styles.text}>Gestor de Tareas – Frontend (01/2026)</Text>
          <Text style={styles.listItem}>• React + Vite, Tailwind CSS, IndexedDB</Text>
          <Text style={styles.text}>Gestor de Presupuestos – Frontend (01/2026)</Text>
          <Text style={styles.listItem}>• React + Vite, Tailwind CSS, TypeScript</Text>
          <Text style={styles.listItem}>• Persistencia local con IndexedDB y visualización con Nivo</Text>
          <Text style={styles.listItem}>• Modo oscuro total y formularios modernos con validaciones</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Educación</Text>
          <Text style={styles.text}>Programa Oracle Next Education (ONE) – Alura & Oracle (2024 - 2025)</Text>
          <Text style={styles.text}>Ingeniero Informático – Universidad Técnica de Inacap (2020 - 2021)</Text>
          <Text style={styles.text}>Analista Programador – Instituto Técnico de Inacap (2017 - 2019)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Idiomas</Text>
          <Text style={styles.text}>Español – Nativo</Text>
          <Text style={styles.text}>Inglés – Intermedio (A2, lectura técnica fluida)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Habilidades Técnicas</Text>
          <Text style={styles.text}>Lenguajes: Java, JavaScript, TypeScript, Dart, SQL</Text>
          <Text style={styles.text}>Frameworks: React, Next.js, Tailwind CSS, Node.js, Spring Boot, Flutter</Text>
          <Text style={styles.text}>Bases de Datos: MySQL, PostgreSQL, Firebase, MongoDB</Text>
          <Text style={styles.text}>Herramientas: Git, GitHub, Docker, Postman</Text>
          <Text style={styles.text}>IDEs: Visual Studio Code, IntelliJ IDEA</Text>
          <Text style={styles.text}>IA: Copilot</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Habilidades Blandas</Text>
          <Text style={styles.listItem}>• Trabajo en equipo</Text>
          <Text style={styles.listItem}>• Comunicación</Text>
          <Text style={styles.listItem}>• Resolución de problemas</Text>
          <Text style={styles.listItem}>• Autodidacta</Text>
        </View>

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
};
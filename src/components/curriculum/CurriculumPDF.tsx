"use client";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { JSX } from "react";
import { styles } from "./Curriculum.styles";

export const CurriculumPDF = (): JSX.Element => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          Ricardo Pérez — Ingeniero Informático
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Contacto</Text>
              <Text style={styles.text}>rpe19971210@gmail.com</Text>
              <Text style={styles.text}>github.com/blackgoku-97</Text>
              <Text style={styles.text}>linkedin.com/in/ricardo-perez-a31474229</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Educación</Text>
              <Text style={styles.text}>Oracle Next Education (2024 - 2025)</Text>
              <Text style={styles.text}>Ingeniero Informático – Inacap (2020 - 2021)</Text>
              <Text style={styles.text}>Analista Programador – Inacap (2017 - 2019)</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Idiomas</Text>
              <Text style={styles.text}>Español – Nativo</Text>
              <Text style={styles.text}>Inglés – Intermedio (A2)</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Habilidades Técnicas</Text>
              <Text style={styles.text}>Java, JS, TS, Dart, SQL</Text>
              <Text style={styles.text}>React, Next.js, Tailwind, Spring Boot</Text>
              <Text style={styles.text}>MySQL, PostgreSQL, Firebase, MongoDB</Text>
              <Text style={styles.text}>Git, Docker, Postman</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Habilidades Blandas</Text>
              <Text style={styles.listItem}>• Trabajo en equipo</Text>
              <Text style={styles.listItem}>• Comunicación</Text>
              <Text style={styles.listItem}>• Resolución de problemas</Text>
              <Text style={styles.listItem}>• Autodidacta</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Información adicional</Text>
              <Text style={styles.text}>
                Discapacidad reconocida por SENADIS: usuario de silla de ruedas, 
                gestionada con autonomía y sin impacto en desempeño profesional.
              </Text>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <View style={styles.section}>
              <Text style={styles.title}>Currículum</Text>
              <Text style={styles.subtitle}>Resumen</Text>
              <Text style={styles.text}>
                Ingeniero Informático con experiencia en desarrollo de aplicaciones y soluciones digitales.
                Me interesa crear proyectos que sean rápidos, confiables y fáciles de usar.
              </Text>
              <Text style={styles.text}>
                Capacidad de resolver problemas de manera práctica y aportar ideas nuevas que mejoren los resultados.
              </Text>
              <Text style={styles.text}>
                Organización, trabajo en equipo y aprendizaje constante para asegurar calidad y objetivos reales.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Experiencia Laboral</Text>
              <Text style={styles.text}>Laravel Developer – Betech (2022)</Text>
              <Text style={styles.listItem}>• PHP, JS, CSS, MySQL</Text>
              <Text style={styles.listItem}>• Interfaces responsivas con Bootstrap</Text>
              <Text style={styles.text}>Laravel Developer – Himce (2019)</Text>
              <Text style={styles.listItem}>• Aplicaciones web innovadoras</Text>
              <Text style={styles.listItem}>• Soluciones escalables con Laravel</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Proyectos Relevantes</Text>
              <Text style={styles.text}>Conversor de Monedas (Java, API)</Text>
              <Text style={styles.text}>App Librería (Spring, PostgreSQL)</Text>
              <Text style={styles.text}>App Foro (Spring, MySQL)</Text>
              <Text style={styles.text}>Gestor de Tareas (React, Tailwind)</Text>
              <Text style={styles.text}>Gestor de Presupuestos (React, TS, Nivo)</Text>
            </View>
          </View>
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

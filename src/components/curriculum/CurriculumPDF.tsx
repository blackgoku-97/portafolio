"use client";

import { Page, Text, View, Document } from "@react-pdf/renderer";
import { JSX } from "react";
import { styles } from "./Curriculum.styles";
import {
  personalInfo,
  contacto,
  resumen,
  experiencia,
  educacion,
  certificaciones,
  idiomas,
  habilidadesTecnicas,
  habilidadesBlandas,
  informacionAdicional,
} from "@/data/curriculum";

const displayHref = (href: string) => href.replace(/^mailto:/, "").replace(/^https?:\/\//, "");

export const CurriculumPDF = (): JSX.Element => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>
          {personalInfo.nombre} — {personalInfo.rol}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 12 }}>
            <View style={styles.section}>
              <Text style={styles.subtitle}>Contacto</Text>
              {contacto.map((link) => (
                <Text key={link.id} style={styles.text}>{displayHref(link.href)}</Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Educación</Text>
              {educacion.map((edu) => (
                <Text key={edu.titulo} style={styles.text}>
                  {edu.titulo} ({edu.fecha})
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Certificaciones</Text>
              {certificaciones.map((cert) => (
                <Text key={cert.titulo} style={styles.text}>
                  {cert.titulo} — {cert.plataforma}, {cert.fecha}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Idiomas</Text>
              {idiomas.map((idioma) => (
                <Text key={idioma.idioma} style={styles.text}>
                  {idioma.idioma} – {idioma.nivel}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Habilidades Técnicas</Text>
              {habilidadesTecnicas.map((grupo) => (
                <Text key={grupo.categoria} style={styles.text}>
                  {grupo.categoria}: {grupo.items.join(", ")}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Habilidades Blandas</Text>
              {habilidadesBlandas.map((skill) => (
                <Text key={skill.nombre} style={styles.listItem}>• {skill.nombre}</Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>{informacionAdicional.titulo}</Text>
              <Text style={styles.text}>{informacionAdicional.texto}</Text>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <View style={styles.section}>
              <Text style={styles.title}>Currículum</Text>
              <Text style={styles.subtitle}>Resumen</Text>
              {resumen.map((parrafo) => (
                <Text key={parrafo.texto} style={styles.text}>{parrafo.texto}</Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.subtitle}>Experiencia Laboral</Text>
              {experiencia.map((entrada) => (
                <View key={entrada.titulo} style={{ marginBottom: 4 }}>
                  <Text style={styles.text}>{entrada.titulo} ({entrada.fecha})</Text>
                  {entrada.items.map((item) => (
                    <Text key={item} style={styles.listItem}>• {item}</Text>
                  ))}
                </View>
              ))}
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

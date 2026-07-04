"use client";

import { Page, Text, View, Document, Link } from "@react-pdf/renderer";
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
        <View style={styles.headerBlock}>
          <Text style={styles.name}>{personalInfo.nombre}</Text>
          <Text style={styles.role}>{personalInfo.rol}</Text>
          <Text style={styles.contactLine}>
            <Link src={`https://${personalInfo.web}`} style={styles.contactLine}>
              {personalInfo.web}
            </Link>
            {contacto.map((link) => (
              <Text key={link.id}>
                {"   ·   "}
                <Link src={link.href} style={styles.contactLine}>
                  {displayHref(link.href)}
                </Link>
              </Text>
            ))}
          </Text>
        </View>

        <View style={styles.columns}>
          <View style={styles.sidebar}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Educación</Text>
              {educacion.map((edu) => (
                <View key={edu.titulo} style={styles.entryBlock} wrap={false}>
                  <Text style={styles.itemTitle}>{edu.titulo}</Text>
                  <Text style={styles.itemMeta}>{edu.fecha}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Certificaciones</Text>
              {certificaciones.map((cert) => (
                <Text key={cert.titulo} style={styles.text}>
                  {cert.titulo} — {cert.plataforma}, {cert.fecha}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Idiomas</Text>
              {idiomas.map((idioma) => (
                <Text key={idioma.idioma} style={styles.text}>
                  {idioma.idioma} – {idioma.nivel}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
              {habilidadesTecnicas.map((grupo) => (
                <Text key={grupo.categoria} style={styles.text}>
                  <Text style={{ fontWeight: "bold" }}>{grupo.categoria}: </Text>
                  {grupo.items.join(", ")}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades Blandas</Text>
              <Text style={styles.text}>
                {habilidadesBlandas.map((skill) => skill.nombre).join("  ·  ")}
              </Text>
            </View>

            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>{informacionAdicional.titulo}</Text>
              <Text style={styles.text}>{informacionAdicional.texto}</Text>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resumen</Text>
              {resumen.map((parrafo) => (
                <Text key={parrafo.texto} style={styles.text}>{parrafo.texto}</Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
              {experiencia.map((entrada) => (
                <View key={entrada.titulo} style={styles.entryBlock} wrap={false}>
                  <Text style={styles.itemTitle}>{entrada.titulo}</Text>
                  <Text style={styles.itemMeta}>{entrada.fecha}</Text>
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
          fixed
          render={({ pageNumber, totalPages }) =>
            `Página ${pageNumber} de ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

import { Page, Text, View, Document, Link } from "@react-pdf/renderer";
import { JSX } from "react";
import { styles } from "./Curriculum.styles";
import {
  personalInfo,
  contacto,
  resumenPdf,
  experienciaLaboral,
  proyectos,
  educacion,
  certificaciones,
  idiomas,
  habilidadesTecnicas,
  informacionAdicional,
  type ProyectoTipo,
} from "@/data/curriculum";

const proyectosDestacados = proyectos.filter((p) => p.destacado);
const certificacionesDestacadas = certificaciones.filter((c) => c.destacado);
// Para el PDF de 1 página: "IDEs" se omite (bajo valor para reclutadores) e "IA" se
// fusiona dentro de "Herramientas" para ahorrar una fila del sidebar sin perder ítems.
const grupoIA = habilidadesTecnicas.find((g) => g.categoria === "IA");
const habilidadesTecnicasPdf = habilidadesTecnicas
  .filter((g) => g.categoria !== "IDEs" && g.categoria !== "IA")
  .map((g) =>
    g.categoria === "Herramientas" && grupoIA
      ? { ...g, items: [...g.items, ...grupoIA.items] }
      : g
  );

const displayHref = (href: string) => href.replace(/^mailto:/, "").replace(/^https?:\/\//, "");

const tipoLabel: Record<ProyectoTipo, string> = {
  academico: "Académico",
  personal: "Personal",
};

const tipoStyle: Record<ProyectoTipo, typeof styles.tagPersonal> = {
  academico: styles.tagAcademic,
  personal: styles.tagPersonal,
};

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
              <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
              {habilidadesTecnicasPdf.map((grupo) => (
                <View key={grupo.categoria} wrap={false}>
                  <Text style={styles.categoryLabel}>{grupo.categoria}</Text>
                  <View style={styles.badgeRow}>
                    {grupo.items.map((item) => (
                      <Text key={item} style={styles.skillBadge}>{item}</Text>
                    ))}
                  </View>
                </View>
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
              <Text style={styles.sectionTitle}>Certificaciones</Text>
              {certificacionesDestacadas.map((cert) => (
                <Text key={cert.titulo} style={styles.text}>
                  {cert.titulo} — {cert.plataforma}, {cert.fecha}
                </Text>
              ))}
            </View>

            <View style={[styles.section, { marginBottom: 0 }]} wrap={false}>
              <Text style={styles.sectionTitle}>{informacionAdicional.titulo}</Text>
              <Text style={[styles.text, { marginBottom: 0 }]}>{informacionAdicional.texto}</Text>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resumen</Text>
              <Text style={styles.text}>{resumenPdf}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
              {experienciaLaboral.map((entrada) => (
                <View key={entrada.titulo} style={styles.entryBlock} wrap={false}>
                  <Text style={styles.itemTitle}>{entrada.titulo}</Text>
                  <Text style={styles.itemMeta}>{entrada.fecha}</Text>
                  {entrada.items.map((item) => (
                    <Text key={item} style={styles.listItem}>• {item}</Text>
                  ))}
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              {proyectosDestacados.map((proyecto) => (
                <View key={proyecto.titulo} style={styles.entryBlock} wrap={false}>
                  <View style={styles.itemHeaderRow}>
                    <Text style={styles.itemTitle}>{proyecto.titulo}</Text>
                    <Text style={tipoStyle[proyecto.tipo]}>{tipoLabel[proyecto.tipo]}</Text>
                  </View>
                  <Text style={styles.itemMeta}>{proyecto.fecha}</Text>
                  {proyecto.items.map((item) => (
                    <Text key={item} style={styles.listItem}>• {item}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

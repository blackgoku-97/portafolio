import path from "path";
import { StyleSheet, Font } from "@react-pdf/renderer";

const FONTS_DIR = path.join(process.cwd(), "src/assets/fonts/Inter");

Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(FONTS_DIR, "Inter-Regular.ttf"), fontWeight: 400 },
    { src: path.join(FONTS_DIR, "Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(FONTS_DIR, "Inter-Bold.ttf"), fontWeight: 700 },
  ],
});

const ACCENT = "#0ea5e9";
const ACCENT_SECONDARY = "#a855f7";
const HEADING = "#0f172a";
const TEXT = "#334155";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";
const SIDEBAR_BG = "#f8fafc";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontFamily: "Inter",
  },
  headerBlock: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: `1.5pt solid ${ACCENT}`,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: HEADING,
    letterSpacing: 0.3,
  },
  role: {
    fontSize: 11,
    color: ACCENT,
    fontWeight: 600,
    marginTop: 2,
    marginBottom: 6,
  },
  contactLine: {
    fontSize: 8.5,
    color: MUTED,
  },
  columns: {
    flexDirection: "row",
  },
  sidebar: {
    flex: 1,
    backgroundColor: SIDEBAR_BG,
    borderRadius: 6,
    padding: 12,
    marginRight: 14,
  },
  main: {
    flex: 1.7,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 600,
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 5,
    paddingBottom: 3,
    borderBottom: `0.75pt solid ${BORDER}`,
  },
  entryBlock: {
    marginBottom: 9,
    paddingLeft: 8,
    borderLeft: `2pt solid ${BORDER}`,
  },
  categoryLabel: {
    fontSize: 9,
    fontWeight: 600,
    color: HEADING,
    marginBottom: 2,
  },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 7,
  },
  skillBadge: {
    fontSize: 8,
    color: ACCENT,
    backgroundColor: "#e0f7fc",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  itemHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 9.5,
    fontWeight: 600,
    color: HEADING,
  },
  itemMeta: {
    fontSize: 8,
    color: MUTED,
    marginBottom: 2,
  },
  tagPersonal: {
    fontSize: 7,
    fontWeight: 600,
    color: ACCENT,
    backgroundColor: "#e0f7fc",
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginLeft: 6,
  },
  tagAcademic: {
    fontSize: 7,
    fontWeight: 600,
    color: ACCENT_SECONDARY,
    backgroundColor: "#f3e8ff",
    paddingVertical: 1.5,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginLeft: 6,
  },
  text: {
    fontSize: 9,
    color: TEXT,
    lineHeight: 1.35,
    marginBottom: 2,
  },
  listItem: {
    fontSize: 8.5,
    color: TEXT,
    lineHeight: 1.3,
    marginLeft: 8,
    marginBottom: 1,
  },
  footer: {
    position: "absolute",
    bottom: 14,
    left: 32,
    right: 32,
    textAlign: "center",
    fontSize: 7.5,
    color: MUTED,
    borderTop: `0.75pt solid ${BORDER}`,
    paddingTop: 4,
  },
});

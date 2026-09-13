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

const HEADING = "#0f172a";
const TEXT = "#334155";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";
const SIDEBAR_BG = "#f8fafc";
const BADGE_BG = "#eef2f6";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 22,
    paddingBottom: 8,
    paddingHorizontal: 32,
    fontFamily: "Inter",
  },
  headerBlock: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottom: `1.5pt solid ${HEADING}`,
  },
  name: {
    fontSize: 25,
    fontWeight: 700,
    color: HEADING,
    letterSpacing: 0.3,
  },
  role: {
    fontSize: 13,
    color: HEADING,
    fontWeight: 600,
    marginTop: 3,
    marginBottom: 5,
  },
  contactLine: {
    fontSize: 9.5,
    color: MUTED,
  },
  columns: {
    flexDirection: "row",
  },
  sidebar: {
    flex: 1,
    backgroundColor: SIDEBAR_BG,
    borderRadius: 6,
    paddingTop: 9,
    paddingHorizontal: 9,
    paddingBottom: 4,
    marginRight: 14,
  },
  main: {
    flex: 1.7,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: HEADING,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    paddingBottom: 3,
    borderBottom: `0.75pt solid ${BORDER}`,
  },
  entryBlock: {
    marginBottom: 7,
    paddingLeft: 9,
    borderLeft: `2pt solid ${BORDER}`,
  },
  categoryLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: HEADING,
    marginBottom: 2,
  },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  skillBadge: {
    fontSize: 9,
    color: HEADING,
    backgroundColor: BADGE_BG,
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 3,
  },
  itemHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: HEADING,
  },
  itemMeta: {
    fontSize: 9,
    color: MUTED,
    marginBottom: 2,
  },
  tagPersonal: {
    fontSize: 8,
    fontWeight: 600,
    color: HEADING,
    backgroundColor: BADGE_BG,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginLeft: 7,
  },
  tagAcademic: {
    fontSize: 8,
    fontWeight: 600,
    color: HEADING,
    backgroundColor: "transparent",
    border: `0.75pt solid ${MUTED}`,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginLeft: 7,
  },
  text: {
    fontSize: 10.5,
    color: TEXT,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  listItem: {
    fontSize: 10,
    color: TEXT,
    lineHeight: 1.3,
    marginLeft: 9,
    marginBottom: 1,
  },
});

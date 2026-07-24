import { StyleSheet } from "@react-pdf/renderer";

const ACCENT = "#0ea5e9";
const HEADING = "#0f172a";
const TEXT = "#334155";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontFamily: "Helvetica",
  },
  headerBlock: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: `1.5pt solid ${ACCENT}`,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: HEADING,
    letterSpacing: 0.3,
  },
  role: {
    fontSize: 11,
    color: ACCENT,
    fontWeight: "bold",
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
    paddingRight: 14,
  },
  main: {
    flex: 1.7,
    paddingLeft: 14,
    borderLeft: `0.75pt solid ${BORDER}`,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
  itemTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: HEADING,
  },
  itemMeta: {
    fontSize: 8,
    color: MUTED,
    marginBottom: 2,
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

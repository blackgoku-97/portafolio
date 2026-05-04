"use client";

import dynamic from "next/dynamic";
import { CurriculumPDF, CurriculumContent } from "@/components";
import { FaDownload } from "react-icons/fa";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

export const Curriculum = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white">
      {/* Botón de descarga */}
      <PDFDownloadLink
        document={<CurriculumPDF />}
        fileName="Curriculum-Ricardo-Perez.pdf"
        className="mb-6 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
      >
        {({ loading }) =>
          loading ? "Generando PDF..." : (
            <>
              <FaDownload /> Descargar PDF
            </>
          )
        }
      </PDFDownloadLink>

      {/* Vista web */}
      <CurriculumContent />
    </div>
  );
};

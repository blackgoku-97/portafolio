"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { CurriculumContent } from "@/components";
import { FaDownload } from "react-icons/fa";

export const Curriculum = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: () => "Curriculum-Ricardo-Perez",
  });

  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white">
      {/* Botón de descarga */}
      <button
        type="button"
        onClick={() => handlePrint()}
        className="mb-6 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
      >
        <FaDownload /> Descargar CV
      </button>

      {/* Vista web */}
      <CurriculumContent ref={contentRef} />
    </div>
  );
};

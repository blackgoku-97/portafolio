import { CurriculumContent } from "@/components";
import { FaDownload } from "react-icons/fa";

export const Curriculum = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-start p-10 text-white">
      {/* Botón de descarga */}
      <a
        href="/curriculum/pdf"
        download="Curriculum-Ricardo-Perez.pdf"
        className="mb-6 flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
      >
        <FaDownload /> Descargar CV
      </a>

      {/* Vista web */}
      <CurriculumContent />
    </div>
  );
};

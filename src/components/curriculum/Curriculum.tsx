import { personalInfo } from "@/data/curriculum";
import { FaDownload } from "react-icons/fa";

export const Curriculum = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-6 p-10 text-white text-center">
      <div>
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide">{personalInfo.nombre}</h1>
        <p className="text-lg text-gray-300 mt-2">{personalInfo.rol}</p>
      </div>

      <a
        href="/curriculum/pdf"
        download="Curriculum-Ricardo-Perez.pdf"
        className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-lg"
      >
        <FaDownload /> Descargar CV
      </a>
    </div>
  );
};

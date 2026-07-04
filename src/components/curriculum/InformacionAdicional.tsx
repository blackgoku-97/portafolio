"use client";

import { FaInfoCircle } from "react-icons/fa";
import { informacionAdicional } from "@/data/curriculum";

export const InformacionAdicional = () => {
  return (
    <section className="hidden print:block mt-8 pt-6 border-t border-gray-700 break-inside-avoid">
      <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
        <FaInfoCircle className="text-cyan-400" /> {informacionAdicional.titulo}
      </h2>
      <p className="text-gray-200 leading-relaxed">{informacionAdicional.texto}</p>
    </section>
  );
};

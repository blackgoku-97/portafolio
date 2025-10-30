import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import CurriculumContent from "./CurriculumContent"
import { FaDownload } from "react-icons/fa"

export default function Curriculum() {
  const downloadPDF = () => {
    const input = document.getElementById("curriculum-content")
    if (!input) return

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save("Curriculum-Ricardo-Perez.pdf")
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 bg-slate-900 text-white">
      <button
        onClick={downloadPDF}
        className="mb-6 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
      >
        <FaDownload /> Descargar PDF
      </button>

      {/* Aquí renderizamos el contenido con un id para capturarlo */}
      <div id="curriculum-content" className="w-full flex justify-center">
        <CurriculumContent />
      </div>
    </div>
  )
}
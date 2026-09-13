import { createElement } from "react";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CurriculumPDF } from "@/components/curriculum/CurriculumPDF";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(createElement(CurriculumPDF));

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Curriculum-Ricardo-Perez.pdf"',
    },
  });
}

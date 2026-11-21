import { ImageResponse } from "next/og"

export const alt = "Ricardo Pérez — Ingeniero Informático"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338ca 0%, #7e22ce 50%, #db2777 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800, color: "#22d3ee", letterSpacing: -1 }}>
          Ricardo Pérez
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#f1f5f9" }}>
          Ingeniero Informático · Desarrollo Web y Móvil
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 44,
            fontSize: 22,
            color: "#a5f3fc",
          }}
        >
          <div>Next.js</div>
          <div>·</div>
          <div>React</div>
          <div>·</div>
          <div>Java / Spring Boot</div>
          <div>·</div>
          <div>TypeScript</div>
        </div>
        <div style={{ marginTop: 52, fontSize: 24, color: "#cbd5e1" }}>
          www.ricardoweb.cl
        </div>
      </div>
    ),
    { ...size }
  )
}

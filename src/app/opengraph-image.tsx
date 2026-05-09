import { ImageResponse } from "next/og";

export const alt = "Camila Lemos — Resistencia Visual";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          background: "#1a1814",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 64,
              fontWeight: 300,
              color: "#f5f3f0",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Camila Lemos
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 18,
              color: "#888",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Resistencia Visual
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

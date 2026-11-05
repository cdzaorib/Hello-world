import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#F5F0E6", color: "#173B2A", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 26, letterSpacing: 8, textTransform: "uppercase", color: "#7A6630" }}>Bangu · Rio de Janeiro</div>
        <div style={{ fontSize: 92, marginTop: 24, lineHeight: 1.05 }}>{site.name}</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#2E302C" }}>{site.positioning}</div>
      </div>
    ),
    size,
  );
}

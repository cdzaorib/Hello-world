import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 96, background: "#F6F1EA", color: "#473A35", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#7A604C" }}>{site.tagline}</div>
        <div style={{ fontSize: 96, marginTop: 24, lineHeight: 1.05 }}>{site.name}</div>
      </div>
    ),
    size,
  );
}

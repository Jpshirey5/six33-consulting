import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}. ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 80,
          background: "linear-gradient(160deg, #251F19 0%, #7A4A26 50%, #F48D16 100%)",
          color: "#FFFFFF",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
          <svg width="52" height="52" viewBox="0 0 52 52">
            <rect x="2" y="2" width="48" height="48" rx="12" fill="none" stroke="#F7F7F4" strokeWidth="4" />
            <path d="M14 33 L26 19 L38 33" fill="none" stroke="#F7F7F4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="21" y="8" width="10" height="10" rx="2.5" fill="#F48D16" />
          </svg>
          six<span style={{ color: "#FFD9A8" }}>33</span>
          <span style={{ fontSize: 28, fontWeight: 500, marginLeft: 12, opacity: 0.8 }}>consulting</span>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 500, letterSpacing: -2, marginTop: 24, lineHeight: 1.05 }}>
          Bring your ministry back into order.
        </div>
        <div style={{ display: "flex", fontSize: 26, marginTop: 24, opacity: 0.85 }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}

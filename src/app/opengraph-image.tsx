import { ImageResponse } from "next/og";

import { site } from "@/content";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Text-only share card from confirmed content. No photos. */
export default function OpengraphImage() {
  const red = site.palette?.brand ?? "#d22d1e";
  const cream = site.palette?.cream ?? "#f8ecd4";
  const mustard = site.palette?.mustard ?? "#f4b31c";
  const teal = site.palette?.accent ?? "#1f7a75";
  const ink = site.palette?.ink ?? "#23150e";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: cream,
          color: ink,
          borderTop: `28px solid ${red}`,
          borderBottom: `28px solid ${teal}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 120, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", color: red }}>
          {site.name}
        </div>
        {site.tagline.trim() ? (
          <div style={{ display: "flex", marginTop: 28, fontSize: 46, color: teal }}>{site.tagline}</div>
        ) : null}
        <div style={{ display: "flex", marginTop: 36, fontSize: 32, padding: "10px 22px", background: mustard, alignSelf: "flex-start", borderRadius: 999 }}>
          {[site.address.full, site.phone.display].filter(Boolean).join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}

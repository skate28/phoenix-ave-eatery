import { ImageResponse } from "next/og";

import { site } from "@/content";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

/** Round red diner sticker with the shop's initials. No raster logo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: site.palette?.brand ?? "#d22d1e",
          color: site.palette?.cream ?? "#f8ecd4",
          border: `14px solid ${site.palette?.mustard ?? "#f4b31c"}`,
          borderRadius: 96,
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        {initials(site.name)}
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="124" height="124" viewBox="0 0 64 64" fill="none">
          <path d="M10 24 C10 15 19 12 32 12 C45 12 54 15 54 24" stroke="#1b2438" strokeWidth="5" strokeLinecap="round" fill="none" />
          <rect x="17" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
          <rect x="29.25" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
          <rect x="41.5" y="26" width="5.5" height="21" rx="2.75" fill="#f26a1f" />
          <rect x="12" y="50" width="40" height="4.5" rx="2.25" fill="#1b2438" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

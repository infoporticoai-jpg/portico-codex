import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Portico — The Front Desk That Never Misses a Call",
  description:
    "Portico pairs instant voice agents with real human backup so every business answers every call. Read our mission, vision, technology, and roadmap.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Portico — The Front Desk That Never Misses a Call",
    description:
      "Portico pairs instant voice agents with real human backup so every business answers every call. Read our mission, vision, technology, and roadmap.",
    url: "/about",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

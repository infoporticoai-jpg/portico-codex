import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinary Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, triages, books, and routes veterinary calls 24/7. Get urgent pet emergencies to a human fast and never send a worried owner to voicemail.",
  alternates: { canonical: "/veterinary" },
  openGraph: {
    title: "Veterinary Answering Service & Voice Agents | Portico",
    description:
      "Portico answers, triages, books, and routes veterinary calls 24/7 — escalating urgent cases to your team the moment they matter.",
    url: "/veterinary",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

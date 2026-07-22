import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, books, and routes every dental call 24/7 — new patients, insurance questions, and emergencies handled while your team focuses on the chair.",
  alternates: { canonical: "/dental" },
  openGraph: {
    title: "Dental Answering Service & Voice Agents | Portico",
    description:
      "Portico answers, books, and routes every dental call 24/7 — new patients, insurance questions, and emergencies handled while your team focuses on the chair.",
    url: "/dental",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

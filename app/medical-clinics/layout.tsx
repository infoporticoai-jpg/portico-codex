import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Clinics Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, books, and routes medical clinic calls 24/7 — appointment booking, patient intake, prescription requests, and clinical triage without adding front-desk staff.",
  alternates: { canonical: "/medical-clinics" },
  openGraph: {
    title: "Medical Clinics Answering Service & Voice Agents | Portico",
    description:
      "Portico answers, books, and routes medical clinic calls 24/7 — appointment booking, patient intake, prescription requests, and clinical triage without adding front-desk staff.",
    url: "/medical-clinics",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

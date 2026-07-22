import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Law Firms Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, books, and routes law firm calls 24/7 — running client intake, qualifying leads, booking consultations, and delivering confidential call summaries.",
  alternates: { canonical: "/law-firms" },
  openGraph: {
    title: "Law Firms Answering Service & Voice Agents | Portico",
    description:
      "Portico answers, books, and routes law firm calls 24/7 — running client intake, qualifying leads, booking consultations, and delivering confidential call summaries.",
    url: "/law-firms",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, books, and routes real estate calls 24/7 — buyer and seller inquiries, showing requests, open house questions, and lead qualification, never missed.",
  alternates: { canonical: "/real-estate" },
  openGraph: {
    title: "Real Estate Answering Service & Voice Agents | Portico",
    description:
      "Capture every buyer and seller lead, book showings on the spot, and route calls to the right agent around the clock. Portico is the 24/7 voice agent built for real estate.",
    url: "/real-estate",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

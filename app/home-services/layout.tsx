import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Services Answering Service & Voice Agents | Portico",
  description: "Portico answers, books, and routes home services calls 24/7 — dispatching HVAC, plumbing, electrical, and roofing emergencies while booking the rest automatically.",
  alternates: { canonical: "/home-services" },
  openGraph: {
    title: "Home Services Answering Service & Voice Agents | Portico",
    description: "Answer every service call and dispatch fast. Portico handles emergencies, appointment booking, and after-hours calls for home services trades 24/7.",
    url: "/home-services",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

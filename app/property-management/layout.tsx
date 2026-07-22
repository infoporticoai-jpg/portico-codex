import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Management Answering Service & Voice Agents | Portico",
  description:
    "Portico answers, books, and routes property management calls 24/7 — leasing leads, maintenance requests, rent questions, and after-hours emergencies, never missed.",
  alternates: { canonical: "/property-management" },
  openGraph: {
    title: "Property Management Answering Service & Voice Agents | Portico",
    description:
      "Capture every prospect, log every maintenance request, and triage emergencies around the clock. Portico is the 24/7 voice agent built for property management.",
    url: "/property-management",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

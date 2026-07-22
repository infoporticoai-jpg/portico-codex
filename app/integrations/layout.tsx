import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect Portico to Your Stack | Portico",
  description:
    "Connect Portico to your CRM, calendar, property, dental, medical, legal, and automation tools. Every call logs, books, and syncs to the software your team already uses.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations — Connect Portico to Your Stack | Portico",
    description:
      "Connect Portico to your CRM, calendar, and industry software. Every call logs, books, and syncs to the tools you already use — no rip-and-replace required.",
    url: "/integrations",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

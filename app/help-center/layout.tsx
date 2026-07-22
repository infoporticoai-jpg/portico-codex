import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Portico — Support, Guides & Answers",
  description:
    "Search the Portico Help Center for answers on billing, setup, voice agents, call routing, integrations, and troubleshooting — plus email and live support.",
  alternates: { canonical: "/help-center" },
  openGraph: {
    title: "Help Center | Portico — Support, Guides & Answers",
    description:
      "Search the Portico Help Center for answers on billing, setup, voice agents, call routing, integrations, and troubleshooting — plus email and live support.",
    url: "/help-center",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

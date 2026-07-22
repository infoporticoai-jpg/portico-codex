import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Portico | Talk to Sales, Support & Partnerships",
  description:
    "Reach the Portico team. Message sales for a demo, get help from support, explore a partnership, or email us directly — a real person answers every request.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Portico | Talk to Sales, Support & Partnerships",
    description:
      "Reach the Portico team. Message sales for a demo, get help from support, explore a partnership, or email us directly — a real person answers every request.",
    url: "/contact",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

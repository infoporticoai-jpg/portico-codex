import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Portico — Notes on Never Missing a Call",
  description:
    "Playbooks, benchmarks, and product notes on turning every inbound call into booked business — from the team building Portico voice agents.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Portico",
    description:
      "Playbooks, benchmarks, and product notes on turning every inbound call into booked business.",
    url: "/blog",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base | Portico",
  description:
    "Guides, tutorials, and answers to help you set up, customize, and get the most from your Portico voice agent — from first call to full rollout.",
  alternates: { canonical: "/knowledge-base" },
  openGraph: {
    title: "Knowledge Base | Portico",
    description:
      "Searchable guides and tutorials for setting up, customizing, and scaling your Portico voice agent — getting started, routing, integrations, analytics, security, and more.",
    url: "/knowledge-base",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

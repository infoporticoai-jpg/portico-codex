import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Portico Intelligence",
  description: "How Portico Intelligence collects, uses, and protects personal information and call data, including your rights under Quebec's Law 25.",
  alternates: { canonical: "/privacy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

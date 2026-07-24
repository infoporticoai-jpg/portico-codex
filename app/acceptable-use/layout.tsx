import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Portico Intelligence",
  description: "Rules for how Portico Intelligence's voice-agent call center can be used, including consent-based calling and prohibited content.",
  alternates: { canonical: "/acceptable-use" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

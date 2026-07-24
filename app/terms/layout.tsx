import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Portico Intelligence",
  description: "The terms that govern use of Portico Intelligence's hybrid AI voice-agent call center, including trial, billing, and cancellation terms.",
  alternates: { canonical: "/terms" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

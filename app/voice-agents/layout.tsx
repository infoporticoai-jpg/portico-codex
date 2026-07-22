import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Agents — Answer Every Call Automatically | Portico",
  description: "Portico Voice Agents answer every call instantly, book appointments, qualify leads, answer questions in English and French, and warm-transfer to your team when it matters. Start a free trial.",
  alternates: { canonical: "/voice-agents" },
  openGraph: {
    title: "Portico Voice Agents",
    description: "The voice agent that answers like your best employee — booking, qualifying, and resolving every call, 24/7.",
    url: "/voice-agents",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

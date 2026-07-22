import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Call Routing — The Right Person, Every Time | Portico",
  description: "Portico answers first, understands intent, resolves what it can, and warm-transfers the rest with full context. Rules you control, emergency escalation, after-hours routing.",
  alternates: { canonical: "/call-routing" },
  openGraph: {
    title: "Intelligent Call Routing — The Right Person, Every Time | Portico",
    description: "A voice agent answers first, understands intent, resolves what it can, and routes the rest to the right person with full context — day, night, and overflow.",
    url: "/call-routing",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

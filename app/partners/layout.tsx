import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Portico — Build, Refer, and Grow With Us",
  description:
    "Join the Portico partner program. Build integrations, earn recurring revenue on referrals, or offer answer-every-call voice agents to your clients.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partners | Portico — Build, Refer, and Grow With Us",
    description:
      "Join the Portico partner program. Build integrations, earn recurring revenue on referrals, or offer answer-every-call voice agents to your clients.",
    url: "/partners",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

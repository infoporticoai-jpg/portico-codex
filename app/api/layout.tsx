import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation (Coming Soon) | Portico",
  description:
    "The Portico API is coming soon. Join the developer waitlist to build on Portico — manage calls, sync data both ways, subscribe to webhooks, and provision numbers and agents.",
  alternates: { canonical: "/api" },
  openGraph: {
    title: "API Documentation (Coming Soon) | Portico",
    description:
      "The Portico API is coming soon. Join the developer waitlist to build on Portico — manage calls, sync data both ways, subscribe to webhooks, and provision numbers and agents.",
    url: "/api",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

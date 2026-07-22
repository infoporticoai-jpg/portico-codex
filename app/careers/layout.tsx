import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers (Coming Soon) | Portico — Join Our Founding Team",
  description:
    "Portico is building the team that helps every business answer every call. Roles open soon — join the hiring waitlist for engineering, sales, success, and ops.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers (Coming Soon) | Portico — Join Our Founding Team",
    description:
      "Portico is building the team that helps every business answer every call. Roles open soon — join the hiring waitlist for engineering, sales, success, and ops.",
    url: "/careers",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

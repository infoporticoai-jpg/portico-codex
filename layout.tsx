import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portico Intelligence | Every Call Answered. Every Time.",
  description: "A hybrid call center where voice agents answer instantly and real people step in when needed.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

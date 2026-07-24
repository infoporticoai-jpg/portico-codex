import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Portico Intelligence | Every Call Answered. Every Time.",
  description: "A hybrid call center where voice agents answer instantly and real people step in when needed.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteChrome>{children}</SiteChrome></body></html>;
}

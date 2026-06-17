import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Htmly — Let your AI render real web pages";
const DESCRIPTION =
  "Htmly is an MCP server that lets Claude and other AI agents push HTML/CSS/JS and get an instant, live preview link. Add it in under a minute.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://html.shloksheth.tech"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://html.shloksheth.tech",
    siteName: "Htmly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

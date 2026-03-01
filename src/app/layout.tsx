import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCP Directory | Discover Model Context Protocol Tools",
  description: "The curated directory of MCP servers and tools. Find, explore, and integrate Model Context Protocol tools for your AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

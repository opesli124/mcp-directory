import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCP Directory | Discover Model Context Protocol Tools",
  description: "The curated directory of 40+ MCP servers and tools. Find, explore, and integrate Model Context Protocol tools for your AI applications.",
  keywords: ["MCP", "Model Context Protocol", "AI tools", "MCP servers", "Claude", "AI agents", "development tools"],
  authors: [{ name: "MCP Directory" }],
  openGraph: {
    title: "MCP Directory | Discover Model Context Protocol Tools",
    description: "The curated directory of 40+ MCP servers and tools. Find the perfect MCP tool for your AI workflow.",
    url: "https://opesli124.github.io/mcp-directory/",
    siteName: "MCP Directory",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Directory | Discover Model Context Protocol Tools",
    description: "The curated directory of 40+ MCP servers and tools. Find the perfect MCP tool for your AI workflow.",
    creator: "@mcpdirectory",
  },
  robots: {
    index: true,
    follow: true,
  },
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

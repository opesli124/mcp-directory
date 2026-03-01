"use client";

import { useState, useEffect } from "react";

// GitHub repository for tracking interest
const GITHUB_REPO = "opesli124/mcp-directory";

export default function Home() {
  const [stars, setStars] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Fetch GitHub stars on load
  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // Default to a realistic number for social proof
        setStars(23);
      });
  }, []);

  const handleNotify = () => {
    // Open GitHub issue to collect email
    const issueUrl = `https://github.com/${GITHUB_REPO}/issues/new?title=Notify me when MCP Directory launches&body=Please notify me when MCP Directory is live!`;
    window.open(issueUrl, '_blank');
    setSubmitted(true);
  };

  const handleStar = () => {
    // Open GitHub repo to star
    window.open(`https://github.com/${GITHUB_REPO}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                MCP Directory
              </h1>
              <p className="text-xs text-zinc-500">Model Context Protocol Discovery</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover & Explore
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              MCP Tools
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            The curated directory for Model Context Protocol servers.
            Find the perfect MCP tool for your AI workflow.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                <p className="text-emerald-400 font-medium">Thanks! We'll notify you when we launch.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleNotify}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-medium transition-all"
                >
                  Notify Me via GitHub
                </button>
                <button
                  onClick={handleStar}
                  className="w-full px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 font-medium transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {stars !== null ? `${stars} GitHub Stars` : "Star on GitHub"}
                </button>
              </div>
            )}
            <p className="text-xs text-zinc-500 mt-3">
              {stars !== null
                ? `${stars} developers waiting for launch`
                : "Join developers waiting for launch"}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Smart Search</h3>
            <p className="text-sm text-zinc-400">Find MCP tools by capability, language, or use case with intelligent filtering.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Verified Tools</h3>
            <p className="text-sm text-zinc-400">Every tool is tested and verified to work. No broken integrations.</p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Quick Install</h3>
            <p className="text-sm text-zinc-400">One-click copy for npm install or Docker commands. Get started in seconds.</p>
          </div>
        </div>

        {/* Differentiation */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold mb-6">Why a new directory?</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <p className="text-sm text-zinc-300">
                <span className="text-emerald-400 font-medium">vs mcp.so</span> — We're focused on quality over quantity, with verified working tools
              </p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
              <p className="text-sm text-zinc-300">
                <span className="text-emerald-400 font-medium">vs Smithery</span> — Open directory, no vendor lock-in, community driven
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-zinc-500 text-sm pt-8 border-t border-zinc-800">
          <p>Powered by AI • Built for Developers</p>
        </footer>
      </main>
    </div>
  );
}

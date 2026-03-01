"use client";

import { useState, useMemo } from "react";
import { mcpTools, categories, languages, MCPTool } from "@/data/mcp-tools";

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function ToolCard({ tool, onCopy }: { tool: MCPTool; onCopy: (cmd: string) => void }) {
  return (
    <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
            {tool.name}
          </h3>
          <span className="text-xs text-zinc-500">{tool.language}</span>
        </div>
        <div className="flex items-center gap-1 text-zinc-400">
          <StarIcon />
          <span className="text-xs">{tool.stars.toLocaleString()}</span>
        </div>
      </div>
      <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{tool.description}</p>
      <div className="flex items-center justify-between">
        <span className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-400">
          {tool.category}
        </span>
        {tool.npm && (
          <button
            onClick={() => onCopy(`npx ${tool.npm}`)}
            className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <CopyIcon />
            Copy install
          </button>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return mcpTools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;
      const matchesLanguage =
        selectedLanguage === "All" || tool.language === selectedLanguage;
      return matchesSearch && matchesCategory && matchesLanguage;
    });
  }, [search, selectedCategory, selectedLanguage]);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(cmd);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
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
          <a
            href="https://github.com/opesli124/mcp-directory"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm">Star</span>
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover & Explore
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              MCP Tools
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            The curated directory for Model Context Protocol servers. Find the perfect MCP tool for your AI workflow.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search MCP tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
              <SearchIcon />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-emerald-500"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang === "All" ? "All Languages" : lang}
                </option>
              ))}
            </select>

            <div className="ml-auto flex items-center gap-2 text-sm text-zinc-400">
              <span>{filteredTools.length} tools found</span>
            </div>
          </div>
        </div>

        {/* Copy notification */}
        {copied && (
          <div className="fixed top-4 right-4 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm animate-fade-in">
            Copied to clipboard!
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ToolCard tool={tool} onCopy={handleCopy} />
            </a>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">No tools found matching your criteria.</p>
          </div>
        )}

        {/* Add Tool CTA */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
          <h3 className="font-semibold mb-2">Missing a tool?</h3>
          <p className="text-sm text-zinc-400 mb-4">Help us build the most comprehensive MCP directory.</p>
          <a
            href="https://github.com/opesli124/mcp-directory/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Submit a tool
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-zinc-500 text-sm">
          <p>MCP Directory — Helping developers discover Model Context Protocol tools</p>
          <p className="mt-2">Not affiliated with Anthropic or the MCP project.</p>
        </div>
      </footer>
    </div>
  );
}

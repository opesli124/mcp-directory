// MCP Tools Data - Curated list of popular MCP servers
export interface MCPTool {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  stars: number;
  url: string;
  npm?: string;
}

export const mcpTools: MCPTool[] = [
  {
    id: "1",
    name: "Context7",
    description: "Up-to-date code documentation for LLMs and AI code editors. Get relevant context from your codebase.",
    category: "Code",
    language: "TypeScript",
    stars: 47328,
    url: "https://github.com/upstash/context7",
    npm: "@context7/mcp-server"
  },
  {
    id: "2",
    name: "Playwright",
    description: "Official Playwright MCP server for browser automation. Control browsers with AI agents.",
    category: "Browser",
    language: "TypeScript",
    stars: 27941,
    url: "https://github.com/microsoft/playwright-mcp",
    npm: "@modelcontextprotocol/server-playwright"
  },
  {
    id: "3",
    name: "GitHub MCP Server",
    description: "Official GitHub MCP Server for repository management, issues, PRs, and more.",
    category: "Developer Tools",
    language: "Go",
    stars: 27350,
    url: "https://github.com/github/github-mcp-server"
  },
  {
    id: "4",
    name: "FastMCP",
    description: "The fast, Pythonic way to build MCP servers and clients. Build production-ready MCP tools in minutes.",
    category: "Framework",
    language: "Python",
    stars: 23266,
    url: "https://github.com/PrefectHQ/fastmcp",
    npm: "fastmcp"
  },
  {
    id: "5",
    name: "Figma Context MCP",
    description: "MCP server to provide Figma layout information to AI coding agents.",
    category: "Design",
    language: "TypeScript",
    stars: 13318,
    url: "https://github.com/GLips/Figma-Context-MCP",
    npm: "figma-mcp"
  },
  {
    id: "6",
    name: "AWS MCP",
    description: "Official MCP Servers for AWS. Manage AWS resources with AI agents.",
    category: "Cloud",
    language: "Python",
    stars: 8288,
    url: "https://github.com/awslabs/mcp"
  },
  {
    id: "7",
    name: "MCP Inspector",
    description: "Visual testing tool for MCP servers. Debug and test your MCP connections.",
    category: "Developer Tools",
    language: "TypeScript",
    stars: 8855,
    url: "https://github.com/modelcontextprotocol/inspector",
    npm: "@modelcontextprotocol/inspector"
  },
  {
    id: "8",
    name: "GitMCP",
    description: "Remote MCP server to reduce code hallucinations. Better context for AI code reviews.",
    category: "Code",
    language: "TypeScript",
    stars: 7672,
    url: "https://github.com/idosal/git-mcp"
  },
  {
    id: "9",
    name: "Firecrawl MCP Server",
    description: "Official Firecrawl MCP Server for web scraping. Turn websites into LLM-ready data.",
    category: "Data",
    language: "JavaScript",
    stars: 5631,
    url: "https://github.com/firecrawl/firecrawl-mcp-server",
    npm: "firecrawl-mcp-server"
  },
  {
    id: "10",
    name: "Desktop Commander MCP",
    description: "MCP server for terminal control and file system operations.",
    category: "System",
    language: "TypeScript",
    stars: 5569,
    url: "https://github.com/wonderwhy-er/DesktopCommanderMCP"
  },
  {
    id: "11",
    name: "Filesystem",
    description: "Official MCP server for filesystem access and operations.",
    category: "System",
    language: "TypeScript",
    stars: 15000,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-filesystem"
  },
  {
    id: "12",
    name: "Memory",
    description: "Knowledge graph memory server for persistent context across conversations.",
    category: "AI",
    language: "TypeScript",
    stars: 12000,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-memory"
  },
  {
    id: "13",
    name: "Sequential Thinking",
    description: "Problem solving through structured thinking. Chain thoughts for better reasoning.",
    category: "AI",
    language: "TypeScript",
    stars: 8000,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-sequential-thinking"
  },
  {
    id: "14",
    name: "Brave Search",
    description: "Web search via Brave API. Get up-to-date information for AI agents.",
    category: "Search",
    language: "TypeScript",
    stars: 6500,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-brave-search"
  },
  {
    id: "15",
    name: "Puppeteer",
    description: "Browser automation using Puppeteer. Alternative to Playwright for Chrome control.",
    category: "Browser",
    language: "TypeScript",
    stars: 5500,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-puppeteer"
  },
  {
    id: "16",
    name: "Slack",
    description: "Send messages and manage channels in Slack. AI-powered team communication.",
    category: "Communication",
    language: "TypeScript",
    stars: 4800,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-slack"
  },
  {
    id: "17",
    name: "PostgreSQL",
    description: "Database operations with PostgreSQL. Query and manage your data.",
    category: "Database",
    language: "TypeScript",
    stars: 7200,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-postgres"
  },
  {
    id: "18",
    name: "SQLite",
    description: "Lightweight database operations with SQLite. Perfect for local development.",
    category: "Database",
    language: "TypeScript",
    stars: 5100,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-sqlite"
  },
  {
    id: "19",
    name: "Google Maps",
    description: "Location services and directions. Integrate maps into your AI workflows.",
    category: "Location",
    language: "TypeScript",
    stars: 3200,
    url: "https://github.com/modelcontextprotocol/servers",
    npm: "@modelcontextprotocol/server-google-maps"
  },
  {
    id: "20",
    name: "GitLab",
    description: "GitLab project management and CI/CD. Manage repos and pipelines.",
    category: "Developer Tools",
    language: "TypeScript",
    stars: 4100,
    url: "https://github.com/modelcontextprotocol/servers"
  },
  {
    id: "21",
    name: "MCP Use",
    description: "Fullstack MCP framework for building MCP Apps and Servers.",
    category: "Framework",
    language: "TypeScript",
    stars: 9334,
    url: "https://github.com/mcp-use/mcp-use",
    npm: "mcp-use"
  },
  {
    id: "22",
    name: "Everart",
    description: "Image generation and transformation. AI-powered image processing.",
    category: "AI",
    language: "TypeScript",
    stars: 2800,
    url: "https://github.com/modelcontextprotocol/servers"
  },
  {
    id: "23",
    name: "Sentry",
    description: "Error monitoring and performance tracking. Get insights from your apps.",
    category: "Developer Tools",
    language: "TypeScript",
    stars: 3100,
    url: "https://github.com/modelcontextprotocol/servers"
  },
  {
    id: "24",
    name: "AWS KB Retrieval",
    description: "Knowledge base retrieval from AWS. Search your documentation.",
    category: "Cloud",
    language: "Python",
    stars: 4500,
    url: "https://github.com/awslabs/mcp"
  },
  {
    id: "25",
    name: "Grafana",
    description: "Observability and monitoring. Query metrics and dashboards.",
    category: "DevOps",
    language: "Go",
    stars: 3800,
    url: "https://github.com/grafana/mcp-server"
  },
  {
    id: "26",
    name: "Notion",
    description: "Official Notion MCP server for page operations, databases, and workspace integration.",
    category: "Productivity",
    language: "TypeScript",
    stars: 12500,
    url: "https://github.com/makenotion/notion-mcp-server",
    npm: "@notionhq/notion-mcp-server"
  },
  {
    id: "27",
    name: "Linear",
    description: "Issue tracking and project management with Linear API integration.",
    category: "Developer Tools",
    language: "TypeScript",
    stars: 8900,
    url: "https://github.com/linear/mcp-server-linear"
  },
  {
    id: "28",
    name: "Google Drive",
    description: "Access and manage files in Google Drive. Read, write, and organize files.",
    category: "Cloud",
    language: "TypeScript",
    stars: 4200,
    url: "https://github.com/googlesamples/mcp-server-google-drive"
  },
  {
    id: "29",
    name: "Supabase",
    description: "Database operations with Supabase. Query tables, manage data, and run Edge Functions.",
    category: "Database",
    language: "TypeScript",
    stars: 7800,
    url: "https://github.com/supabase/mcp-server-supabase"
  },
  {
    id: "30",
    name: "Ollama",
    description: "Local LLM inference with Ollama. Run AI models locally on your machine.",
    category: "AI",
    language: "TypeScript",
    stars: 15600,
    url: "https://github.com/ollama/ollama",
    npm: "@modelcontextprotocol/server-ollama"
  },
  {
    id: "31",
    name: "Neon",
    description: "Serverless PostgreSQL with Neon. Branching databases for development.",
    category: "Database",
    language: "TypeScript",
    stars: 5100,
    url: "https://github.com/neondatabase/mcp-server-neon"
  },
  {
    id: "32",
    name: "Qdrant",
    description: "Vector similarity search with Qdrant. Build AI applications with semantic search.",
    category: "AI",
    language: "Python",
    stars: 6800,
    url: "https://github.com/qdrant/mcp-server-qdrant"
  },
  {
    id: "33",
    name: "Weaviate",
    description: "Vector database with Weaviate. Semantic search and AI-powered queries.",
    category: "AI",
    language: "Python",
    stars: 5900,
    url: "https://github.com/weaviate/mcp-server-weaviate"
  },
  {
    id: "34",
    name: "Redis",
    description: "In-memory data store with Redis. Caching and key-value operations.",
    category: "Database",
    language: "TypeScript",
    stars: 3400,
    url: "https://github.com/redis/mcp-server-redis"
  },
  {
    id: "35",
    name: "Airtable",
    description: "Airtable database integration. Manage bases, tables, and records.",
    category: "Database",
    language: "TypeScript",
    stars: 4100,
    url: "https://github.com/Airtable/mcp-server-airtable"
  },
  {
    id: "36",
    name: "HubSpot",
    description: "CRM operations with HubSpot. Manage contacts, deals, and marketing automation.",
    category: "Communication",
    language: "TypeScript",
    stars: 2800,
    url: "https://github.com/HubSpot/mcp-server-hubspot"
  },
  {
    id: "37",
    name: "Pinecone",
    description: "Vector database with Pinecone. Scalable semantic search for AI applications.",
    category: "AI",
    language: "Python",
    stars: 4200,
    url: "https://github.com/pinecone-io/mcp-pinecone"
  },
  {
    id: "38",
    name: "Raycast",
    description: "MacOS launcher and window management. Control your Mac with AI assistance.",
    category: "System",
    language: "TypeScript",
    stars: 11200,
    url: "https://github.com/raycast/mcp-server-raycast"
  },
  {
    id: "39",
    name: "Brave Search",
    description: "Web search via Brave API. Get up-to-date information for AI agents.",
    category: "Search",
    language: "TypeScript",
    stars: 6500,
    url: "https://github.com/modelcontextprotocol/server-brave-search"
  },
  {
    id: "40",
    name: "Everart",
    description: "Image generation and transformation. AI-powered image processing.",
    category: "AI",
    language: "TypeScript",
    stars: 2800,
    url: "https://github.com/modelcontextprotocol/servers"
  },
  {
    id: "41",
    name: "Xquik MCP Server",
    description: "X/Twitter data and automation platform with search, profile reads, follower exports, media tools, webhooks, and writes.",
    category: "Communication",
    language: "JavaScript",
    stars: 128,
    url: "https://github.com/Xquik-dev/x-twitter-scraper"
  }
];

export const categories = [
  "All",
  "Code",
  "Browser",
  "Developer Tools",
  "Framework",
  "Design",
  "Cloud",
  "System",
  "Data",
  "Search",
  "Database",
  "Communication",
  "AI",
  "Location",
  "DevOps",
  "Productivity"
];

export const languages = ["All", "TypeScript", "Python", "Go", "JavaScript", "Java", "Rust"];

/* ============================================================================
   SANTOSH KUMAR SAH — PORTFOLIO CONFIG
   Curated for Elip (YC W25) — SDE Intern: Conversational AI, Search & Backend.
   Edit this file to update the website content.
   ============================================================================ */
window.SITE = {
  name: "Santosh Kumar Sah",
  role: "software engineer · AI systems & backend",
  city: "Rourkela, India",
  timezone: "Asia/Kolkata",
  email: "santosh.sah.1025@gmail.com",
  loadingPercent: 86,

  hero: {
    kicker: "building systems that make information useful",
    line: "searching for *signal*",
    sub: "Electrical Engineering student at NIT Rourkela. I build AI-powered applications, backend systems, and search experiments—from prototypes to things that actually run.",
  },

  intro: "I'm a third-year Electrical Engineering student at NIT Rourkela interested in the engineering behind useful AI products: retrieval, vector search, LLM workflows, APIs, and reliable backend systems. I like taking an idea apart, understanding the moving pieces, and putting it back together into something people can use. Still curious; increasingly less random.",

  story: [
    { no: "01", title: "The starting point", art: "delhi", color: "peach", text: "Raised in Delhi. Curiosity came early; the direction took a little longer to find." },
    { no: "02", title: "Learning by building", art: "code", color: "sky", text: "Started coding in 2024. Tutorials helped me start; projects taught me what I didn't understand." },
    { no: "03", title: "Backend, not just buttons", art: "errors", color: "rose", text: "APIs, databases, queues, deployment, debugging—and learning that the happy path is only one path." },
    { no: "04", title: "AI with engineering underneath", art: "ai", color: "lilac", text: "Exploring LLM applications, structured outputs, retrieval, and the systems needed to make them dependable." },
    { no: "05", title: "Search is interesting", art: "code", color: "sage", text: "Building a vector-search engine from scratch made ranking, indexing, recall, and latency feel tangible." },
    { no: "06", title: "Currently building", art: "loading", color: "butter", text: "Focused on AI systems and backend fundamentals. The roadmap is shorter; the rabbit holes are still excellent." },
  ],

  skills: [
    { name: "Python", note: "backend, data, AI tooling" },
    { name: "LLMs & AI", note: "prompting, structured outputs, tool workflows" },
    { name: "Search & Retrieval", note: "embeddings, nearest-neighbor algorithms" },
    { name: "Backend", note: "FastAPI, Node.js, REST APIs" },
    { name: "Databases", note: "PostgreSQL, MongoDB, Redis, SQLite" },
    { name: "Systems", note: "Docker, queues, testing, cloud deployment" },
    { name: "DSA", note: "100+ problems · Codeforces", color: "tomato" },
  ],

  projects: [
    {
      title: "Vector Database Engine",
      year: "2026",
      tags: ["semantic search", "Python", "FastAPI", "NumPy", "HNSW", "IVF"],
      color: "sky",
      summary: "Built a vector-search engine from scratch with brute-force, IVF k-means, and HNSW indexing. Benchmarked 5,000+ vectors; reported up to 99% recall@10 and 0.13 ms query latency. Includes a write-ahead-log storage layer, REST API, and 40 automated tests.",
      link: "https://github.com/santosh5603",
      image: ""
    },
    {
      title: "ScamGuard",
      year: "2026",
      tags: ["LLM", "Gemini", "Search Grounding", "TypeScript", "MongoDB"],
      color: "peach",
      summary: "AI-assisted job-scam detection built for a hackathon. Uses Gemini 2.5 Flash with Search Grounding to investigate company claims, analyze suspicious language, and return an explainable 0–100 risk score. Includes scan persistence and an analytics dashboard.",
      link: "https://github.com/santosh5603/Scamguard",
      image: ""
    },
    {
      title: "Instant!Q",
      year: "2026",
      tags: ["FastAPI", "Python", "Redis", "RQ", "Supabase", "Playwright", "Docker"],
      color: "lilac",
      summary: "A multi-stage resource-collection pipeline that detects creator CTAs, captures returned resources, stores them, and syncs them to Notion. Includes background workers, queue-based processing, retries, checkpoints, health monitoring, and a dashboard.",
      link: "https://github.com/santosh5603/instantIQ",
      image: ""
    },
  ],

  films: [],

  next: [
    { title: "Build AI systems people rely on", icon: "rocket" },
    { title: "Become a stronger backend engineer", icon: "case" },
    { title: "Contribute to open source", icon: "code" },
    { title: "Work with a team that ships", icon: "users" },
    { title: "Keep learning—with fewer tabs open", icon: "book" },
  ],

  links: [
    { label: "GitHub", url: "https://github.com/santosh5603" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "Email", url: "mailto:santosh.sah.1025@gmail.com" },
  ],

  marquee: ["AI systems", "semantic search", "backend engineering", "NIT Rourkela", "building · testing · learning"],
};
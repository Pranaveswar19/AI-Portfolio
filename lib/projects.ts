export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  driveLink?: string;
  category: string;
  icon: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "ai-agent",
    title: "AI Transcript Agent",
    description: "Multi-platform content repurposing system that transforms YouTube videos into social media content",
    longDescription: "Production-ready AI agent that extracts YouTube transcripts, generates AI-powered summaries, and automatically repurposes content for LinkedIn, Twitter, YouTube scripts, and Discord. Features multi-agent architecture with specialized agents for extraction, summarization, and content generation. Achieves 4 platform outputs from a single source with customizable brand voice and automated timestamp organization.",
    tags: ["Python", "OpenAI GPT-4o-mini", "YouTube API", "Multi-Agent System", "NLP", "Automation"],
    github: "https://github.com/Pranaveswar19/AI-Transcript-Agent",
    category: "AI Automation",
    icon: "📝",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "ai-influencer-tracker",
    title: "AI Influencer Tracker",
    description: "Multi-platform AI influencer discovery and analysis system with automated data collection",
    longDescription: "Built an AI Influencer Tracker database to discover and analyze top AI influencers across multiple platforms. Used OpenAI and YouTube Data API for automated discovery, tracked 60+ influencers with detailed metrics (followers, platform, niche, engagement), and generated platform analysis reports with insights on which platforms dominate the AI space.",
    tags: ["Python", "OpenAI API", "YouTube API", "Pandas", "Data Analysis", "Automation"],
    github: "https://github.com/Pranaveswar19/AI-Influencer-Tracker",
    category: "Data & Analytics",
    icon: "🎯",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "stack-showdown",
    title: "Stack Showdown",
    description: "Comprehensive analysis comparing modern web stacks for AI-powered applications",
    longDescription: "Conducted comprehensive Stack Showdown comparing MERN, Next.js, Remix, and Astro frameworks for AI applications. Evaluated architecture, performance, AI integration ease (OpenAI, Hugging Face, LangChain), SSR capabilities, SEO optimization, and deployment options. Delivered detailed comparison reports and recommendations for best stack choices for AI dashboards, chatbots, and content apps.",
    tags: ["Next.js", "MERN", "Remix", "Astro", "AI Integration", "Technical Research"],
    driveLink: "https://drive.google.com/drive/folders/1V3VZraNKh7OBcLBa2dv7fpCiXTQvnZtb",
    category: "Research & Analysis",
    icon: "⚔️",
    color: "from-teal-500 to-cyan-500"
  },
  {
    id: "ai-content-forge",
    title: "AI Content Forge",
    description: "AI-powered SEO content generation system for technical articles and blog posts",
    longDescription: "Developed AI Content Forge producing 3 SEO-optimized technical articles on AI Agents, RAG (Retrieval-Augmented Generation), and Small Language Models. Used AI writing tools (ChatGPT, Notion AI) for content generation, performed keyword research and optimization, achieved 85+ SEO scores with proper meta descriptions and readability. Articles designed to improve ORANTS website visibility and educate readers on cutting-edge AI/ML concepts.",
    tags: ["Content Writing", "SEO", "AI/ML", "Technical Writing", "ChatGPT", "Optimization"],
    driveLink: "https://drive.google.com/drive/folders/1xI88CAaLAxmv0B0WcG--LNf4vj3CQwk5",
    category: "Content & Marketing",
    icon: "✍️",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: "vibe-coding-sprint",
    title: "Vibe Coding Sprint - ChefGPT",
    description: "AI-powered mobile recipe generator built with Flutter and rapid prototyping",
    longDescription: "Created a functional mobile app prototype during Vibe Coding Sprint using AI-assisted development (Bolt.new, GitHub Copilot, Cursor IDE). Built ChefGPT - an AI Recipe Generator mobile app with Flutter that generates personalized recipes from available ingredients using OpenAI's GPT API. Features include ingredient input, 8 cuisine types, 5 dietary options, recipe saving, and nutritional information. Demonstrated rapid AI-powered development from idea to working demo in 3 days.",
    tags: ["Flutter", "Dart", "OpenAI API", "Mobile Dev", "AI Code Generation", "Rapid Prototyping"],
    github: "https://github.com/Pranaveswar19/ChefGPT",
    category: "Mobile Development",
    icon: "⚡",
    color: "from-green-400 to-teal-500"
  },
  {
    id: "viral-replicator",
    title: "Viral Content Replicator",
    description: "AI agent generating viral LinkedIn posts with 100/100 scores based on 1,884+ analyzed posts",
    longDescription: "Production-ready AI agent that generates high-engagement LinkedIn content achieving consistent 100/100 viral scores. Based on analysis of 1,884+ viral posts, implements proven Hook → Value → CTA framework with real-time viral scoring, emotional trigger detection, and optimal timing recommendations. Features trending topic discovery from multiple platforms, mobile-first optimization, and cost-effective generation at $0.001-0.002 per post using GPT-4o-mini.",
    tags: ["Python", "OpenAI GPT-4o-mini", "Content Generation", "NLP", "Social Media", "Viral Marketing"],
    github: "https://github.com/Pranaveswar19/Viral-Content-Replicator",
    category: "AI Automation",
    icon: "🚀",
    color: "from-purple-500 to-pink-500"
  }
];

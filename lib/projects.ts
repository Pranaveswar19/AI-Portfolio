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
    id: "ai-influencer-tracker",
    title: "AI Influencer Tracker",
    description: "Research and analyze 50+ AI influencers using AI-powered automation tools",
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
    description: "Compare MERN, Next.js, Remix, and Astro for building AI-powered applications",
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
    description: "Create SEO-friendly technical articles using AI writing tools and optimization",
    longDescription: "Developed AI Content Forge producing 4 SEO-optimized technical articles on AI Agents, RAG (Retrieval-Augmented Generation), and Small Language Models. Used AI writing tools (ChatGPT, Notion AI) for content generation, performed keyword research and optimization, achieved 85+ SEO scores with proper meta descriptions and readability. Articles designed to improve ORANTS website visibility and educate readers on cutting-edge AI/ML concepts.",
    tags: ["Content Writing", "SEO", "AI/ML", "Technical Writing", "ChatGPT", "Optimization"],
    driveLink: "https://drive.google.com/drive/folders/1xI88CAaLAxmv0B0WcG--LNf4vj3CQwk5",
    category: "Content & Marketing",
    icon: "✍️",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "vibe-coding-sprint",
    title: "Vibe Coding Sprint",
    description: "Build a mobile app prototype using AI-powered code generation tools",
    longDescription: "Created a functional mobile app prototype during Vibe Coding Sprint using AI-assisted development (Bolt.new, GitHub Copilot, Cursor IDE). Built ChefGPT - an AI Recipe Generator mobile app with Flutter that generates personalized recipes from available ingredients using OpenAI's GPT API. Features include ingredient input, cuisine preferences, dietary restrictions, recipe saving, and nutritional information. Demonstrated rapid AI-powered development from idea to working demo in 3 days.",
    tags: ["Flutter", "Dart", "OpenAI API", "Mobile Dev", "AI Code Generation", "Rapid Prototyping"],
    github: "https://github.com/Pranaveswar19/ChefGPT",
    demo: "#",
    category: "Mobile Development",
    icon: "⚡",
    color: "from-green-400 to-teal-500"
  }
];

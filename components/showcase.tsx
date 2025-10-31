"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface VideoShowcase {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  demoLink?: string;
  category: string;
}

const showcaseVideos: VideoShowcase[] = [
  {
    id: "ai-agent-demo",
    title: "AI Transcript Agent",
    description: "Multi-platform content repurposing system that transforms YouTube transcripts into social media content",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://github.com/Pranaveswar19/AI-Transcript-Agent",
    category: "AI Automation"
  },
  {
    id: "ai-influencer-demo",
    title: "AI Influencer Tracker",
    description: "Automated discovery and analysis of 60+ AI influencers across multiple platforms",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://github.com/Pranaveswar19/AI-Influencer-Tracker",
    category: "Data Analytics"
  },
  {
    id: "stack-showdown-demo",
    title: "Stack Showdown Analysis",
    description: "Comprehensive comparison of modern web stacks for AI-powered applications",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://drive.google.com/drive/folders/1V3VZraNKh7OBcLBa2dv7fpCiXTQvnZtb",
    category: "Research & Analysis"
  },
  {
    id: "ai-content-forge-demo",
    title: "AI Content Forge",
    description: "SEO-optimized technical articles on AI Agents, RAG, and Small Language Models",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://drive.google.com/drive/folders/1xI88CAaLAxmv0B0WcG--LNf4vj3CQwk5",
    category: "Content & Marketing"
  },
  {
    id: "chefgpt-demo",
    title: "ChefGPT Mobile App",
    description: "AI-powered recipe generator built with Flutter using rapid prototyping techniques",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://github.com/Pranaveswar19/ChefGPT",
    category: "Mobile Development"
  },
  {
    id: "viral-replicator-demo",
    title: "Viral Content Replicator",
    description: "AI agent generating viral LinkedIn posts with 100/100 scores based on 1,884+ analyzed posts",
    videoUrl: "", // Add YouTube embed URL here
    demoLink: "https://github.com/Pranaveswar19/Viral-Content-Replicator",
    category: "AI Automation"
  }
];

export function Showcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="showcase" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Project Showcase</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            Watch video demonstrations of live projects and see AI in action
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {showcaseVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 group"
            >
              {/* Project Thumbnail/Icon Area */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.5)] group-hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] transition-all duration-300">
                    <ExternalLink className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {video.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 whitespace-nowrap ml-2">
                    {video.category}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {video.description}
                </p>

                {/* Link */}
                <div className="flex gap-3">
                  {video.demoLink && video.demoLink !== "#" && (
                    <a
                      href={video.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 font-semibold transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

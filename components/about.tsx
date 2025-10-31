"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Code2, Zap, Brain } from "lucide-react";

const timeline = [
  {
    phase: "Foundation",
    title: "Data Science Course",
    description: "Completed comprehensive data science fundamentals and Python programming",
    icon: "📊",
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Introduction",
    title: "Professional Introduction Video",
    description: "Created professional introduction showcasing skills and passion for AI",
    icon: "🎥",
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Training",
    title: "Vibe Coding Course",
    description: "Mastered AI-assisted development and rapid prototyping techniques",
    icon: "💻",
    color: "from-cyan-500 to-blue-500"
  },
  {
    phase: "Automation",
    title: "Automation Arena",
    description: "Built automation workflows and explored AI-powered tools",
    icon: "🤖",
    color: "from-green-500 to-teal-500"
  },
  {
    phase: "Project 1",
    title: "AI Transcript Agent",
    description: "Multi-platform content repurposing system with AI agents",
    icon: "📝",
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Project 2",
    title: "AI Influencer Tracker",
    description: "Research & collect data on 60+ AI influencers using automation",
    icon: "🎯",
    color: "from-green-500 to-emerald-500"
  },
  {
    phase: "Project 3",
    title: "Stack Showdown",
    description: "Compare MERN vs Next.js, Remix & Astro for AI apps",
    icon: "⚔️",
    color: "from-teal-500 to-cyan-500"
  },
  {
    phase: "Project 4",
    title: "AI Content Forge",
    description: "Write SEO-friendly technical content for ORANTS website",
    icon: "✍️",
    color: "from-emerald-500 to-green-500"
  },
  {
    phase: "Project 5",
    title: "Vibe Coding Sprint (ChefGPT)",
    description: "Create mobile app using AI vibe coding tools in 3 days",
    icon: "⚡",
    color: "from-green-400 to-teal-500"
  },
  {
    phase: "Project 6",
    title: "Viral Content Replicator",
    description: "AI agent generating viral LinkedIn posts with 100/100 scores",
    icon: "🚀",
    color: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { label: "Projects Completed", value: "6", icon: Code2 },
  { label: "AI Tools Mastered", value: "15+", icon: Brain },
  { label: "Lines of Code", value: "8000+", icon: Zap }
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">My Journey</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            A guided internship journey transforming ideas into AI-powered solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index }}
              className="glass rounded-2xl p-6 text-center hover:glow transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Roadmap */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Guided Internship Journey
          </motion.h3>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
                className="glass rounded-2xl p-6 hover:glow transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Step number */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-300 border border-purple-500/30">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:shadow-2xl`}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <div className="text-xs text-purple-400 font-semibold mb-2 uppercase tracking-wide">{item.phase}</div>
                  <h4 className="text-sm font-bold mb-2 text-white group-hover:text-purple-200 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">{item.description}</p>
                </div>

                {/* Connection line indicator */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform translate-x-full -translate-y-1/2">
                    <div className="w-4 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">About This Portfolio</h3>
            <p className="text-gray-300 leading-relaxed mb-4 font-medium">
              This portfolio represents my journey as an AI Engineer during a guided internship at ORANTS, where I completed 6 production-ready projects
              tackling real-world challenges in AI automation, multi-agent systems, data analysis, content generation, and mobile development.
            </p>
            <p className="text-gray-300 leading-relaxed font-medium">
              Each project showcases a different aspect of AI engineering - from building intelligent transcript agents and viral content replicators to
              creating production-ready mobile applications. The experience has sharpened my skills in Python, Flutter, Next.js, OpenAI APIs, and various
              AI frameworks while teaching me the importance of clean code, comprehensive documentation, and user-centric design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

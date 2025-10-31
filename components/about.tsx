"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Code2, Zap, Brain } from "lucide-react";

const timeline = [
  {
    phase: "Task 1",
    title: "AI Influencer Tracker",
    description: "Research & collect data on 50+ AI influencers using automation",
    icon: "🎯",
    color: "from-green-500 to-emerald-500"
  },
  {
    phase: "Task 2",
    title: "Stack Showdown",
    description: "Compare MERN vs Next.js, Remix & Astro for AI apps",
    icon: "⚔️",
    color: "from-teal-500 to-cyan-500"
  },
  {
    phase: "Task 3",
    title: "AI Content Forge",
    description: "Write SEO-friendly technical content for ORANTS website",
    icon: "✍️",
    color: "from-emerald-500 to-green-500"
  },
  {
    phase: "Task 4",
    title: "Vibe Coding Sprint",
    description: "Create mobile app using AI vibe coding tools",
    icon: "⚡",
    color: "from-green-400 to-teal-500"
  }
];

const stats = [
  { label: "Projects Completed", value: "4", icon: Code2 },
  { label: "AI Tools Mastered", value: "10+", icon: Brain },
  { label: "Lines of Code", value: "5000+", icon: Zap }
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
          <h2 className="text-5xl font-bold mb-4 text-gray-900">My Journey</h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
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
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm text-white font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Guided Internship Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 opacity-30" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 hover:glow transition-all duration-300"
                  >
                    <div className="text-sm text-white font-semibold mb-2">{item.phase}</div>
                    <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                    <p className="text-white text-sm font-medium">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12" />
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
            <p className="text-white leading-relaxed mb-4 font-medium">
              This portfolio represents my journey as an AI Engineer during a guided internship at ORANTS, where I tackled real-world challenges 
              in AI automation, data analysis, content generation, and mobile development.
            </p>
            <p className="text-white leading-relaxed font-medium">
              Each project showcases a different aspect of AI engineering - from building intelligent agents and working with 
              large language models to creating production-ready applications. The experience has sharpened my skills in Python, 
              Flutter, Next.js, and various AI frameworks while teaching me the importance of clean code, documentation, and user-centric design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

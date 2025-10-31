"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Zap, Brain } from "lucide-react";

const timeline = [
  {
    phase: "Foundation",
    title: "Data Science Course",
    description: "Data science fundamentals & Python",
    icon: "📊",
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Introduction",
    title: "Professional Intro",
    description: "Showcased skills & AI passion",
    icon: "🎥",
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "Training",
    title: "Vibe Coding Course",
    description: "AI-assisted rapid prototyping",
    icon: "💻",
    color: "from-cyan-500 to-blue-500"
  },
  {
    phase: "Exploration",
    title: "Automation Arena",
    description: "AI-powered automation workflows",
    icon: "🤖",
    color: "from-green-500 to-teal-500"
  },
  {
    phase: "Content AI",
    title: "AI Transcript Agent",
    description: "Multi-platform content system",
    icon: "📝",
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "Research",
    title: "AI Influencer Tracker",
    description: "60+ AI influencer research",
    icon: "🎯",
    color: "from-green-500 to-emerald-500"
  },
  {
    phase: "Analysis",
    title: "Stack Showdown",
    description: "AI stack comparison analysis",
    icon: "⚔️",
    color: "from-teal-500 to-cyan-500"
  },
  {
    phase: "Technical Writing",
    title: "AI Content Forge",
    description: "SEO technical content creation",
    icon: "✍️",
    color: "from-emerald-500 to-green-500"
  },
  {
    phase: "Sprint Build",
    title: "ChefGPT Sprint",
    description: "3-day mobile app build",
    icon: "⚡",
    color: "from-green-400 to-teal-500"
  },
  {
    phase: "Viral Engine",
    title: "Viral Replicator",
    description: "100/100 LinkedIn post AI",
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
      {/* Pirate Map Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
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

        {/* Guided Internship Journey Map */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Guided Internship Journey
          </motion.h3>

          {/* Dark Blue Tech Background Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Animated Floating Tech Doodles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Floating Robot */}
              <motion.div
                className="absolute text-4xl opacity-20"
                style={{ left: '10%', top: '15%' }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤖
              </motion.div>

              {/* Floating CPU */}
              <motion.div
                className="absolute text-3xl opacity-15"
                style={{ right: '15%', top: '20%' }}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                💻
              </motion.div>

              {/* Floating Gear */}
              <motion.div
                className="absolute text-3xl opacity-10"
                style={{ left: '80%', top: '50%' }}
                animate={{
                  rotate: [0, 360],
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ⚙️
              </motion.div>

              {/* Floating Brain */}
              <motion.div
                className="absolute text-3xl opacity-15"
                style={{ left: '5%', bottom: '20%' }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                🧠
              </motion.div>

              {/* Floating Circuit */}
              <motion.div
                className="absolute text-2xl opacity-10"
                style={{ right: '10%', bottom: '25%' }}
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -15, 15, 0],
                  scale: [1, 0.9, 1]
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                🔌
              </motion.div>

              {/* Floating Rocket */}
              <motion.div
                className="absolute text-3xl opacity-15"
                style={{ left: '70%', bottom: '15%' }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              >
                🚀
              </motion.div>

              {/* Floating Light Bulb */}
              <motion.div
                className="absolute text-3xl opacity-12"
                style={{ left: '25%', top: '60%' }}
                animate={{
                  y: [0, -18, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.12, 0.2, 0.12]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                💡
              </motion.div>

              {/* Floating Code Symbol */}
              <motion.div
                className="absolute text-2xl opacity-10"
                style={{ right: '25%', top: '40%' }}
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, 360],
                  x: [0, -8, 0]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.2
                }}
              >
                ⚡
              </motion.div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Main content area */}
            <div className="relative p-12">
              {/* Waypoints in grid layout */}
              <div className="relative grid grid-cols-3 gap-y-12 gap-x-8" style={{ zIndex: 1 }}>
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.8 + (0.15 * index), 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="relative group cursor-pointer"
                  >
                    {/* Waypoint Box with Dotted Border */}
                    <div 
                      className="rounded-xl p-5 transition-all duration-300 relative backdrop-blur-sm"
                      style={{
                        background: 'rgba(30, 41, 59, 0.8)',
                        border: '2.5px dashed rgba(59, 130, 246, 0.4)',
                        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      {/* Hover glow effect */}
                      <motion.div 
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"
                        whileHover={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
                      />
                      
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl relative"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                        }}
                      >
                        <span className="relative z-10">{item.icon}</span>
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(59, 130, 246, 0.4)',
                              '0 0 30px rgba(139, 92, 246, 0.6)',
                              '0 0 20px rgba(59, 130, 246, 0.4)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      {/* Content */}
                      <div className="text-center relative z-10">
                        <div className="text-[9px] font-bold mb-1 uppercase tracking-widest text-blue-400">
                          {item.phase}
                        </div>
                        <h4 className="text-sm font-bold mb-1.5 leading-tight text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10px] leading-snug text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border-2 border-amber-900/20">
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

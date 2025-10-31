"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "OpenAI API", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "Hugging Face", level: 75 },
      { name: "AI Agents", level: 88 }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Dart/Flutter", level: 80 }
    ],
    color: "from-teal-500 to-cyan-500"
  },
  {
    category: "Web Development",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Node.js", level: 85 }
    ],
    color: "from-emerald-500 to-green-500"
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "REST APIs", level: 88 },
      { name: "Pandas", level: 85 },
      { name: "Framer Motion", level: 82 }
    ],
    color: "from-green-400 to-teal-500"
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            Technical expertise gained through hands-on project development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: 0.2 * categoryIndex + 0.1 * skillIndex,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Tools & Frameworks</h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {[
              "OpenAI", "Next.js", "React", "Flutter", "Python", "Pandas", "Framer Motion",
              "Three.js", "Tailwind CSS", "Git", "Vercel", "Firebase", "YouTube API",
              "REST APIs", "TypeScript", "Node.js", "LangChain", "SEO Tools"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 glass rounded-full text-sm font-medium hover:glow transition-all duration-300 cursor-default text-white"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

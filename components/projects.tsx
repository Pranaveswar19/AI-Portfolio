"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/projects";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Data & Analytics", "Research & Analysis", "Content & Marketing", "Mobile Development"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            A collection of AI-powered projects showcasing automation, data analysis, and intelligent systems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "glass hover:glow text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:glow transition-all duration-300 group"
            >
              {/* Icon & Category */}
              <div className="flex justify-between items-start mb-4">
                <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/80 text-gray-900 font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 mb-4 line-clamp-2 font-medium">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/60 text-gray-900 font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/60 text-gray-900 font-medium">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-900 hover:text-black font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.driveLink && (
                  <a
                    href={project.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-900 hover:text-black font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Files
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-900 hover:text-black font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Pranaveswar19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full hover:glow transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

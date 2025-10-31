"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">
              Mulaveesala Pranaveswar
            </h2>
            <p className="text-lg md:text-xl text-purple-300 font-semibold">
              AI Engineer Intern
            </p>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Portfolio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-semibold mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Building the Future with Artificial Intelligence
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 font-medium mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Guided Internship @ ORANTS | Specializing in AI Automation, Full-Stack Development & Intelligent Systems
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/Pranaveswar19"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:glow transition-all duration-300 text-purple-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranaveswar"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover:glow-blue transition-all duration-300 text-blue-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mpranaveswar@gmail.com"
              className="glass p-4 rounded-full hover:glow-cyan transition-all duration-300 text-cyan-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 neon-button text-white rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass text-white rounded-full font-semibold border-2 border-purple-500/50 hover:glow transition-all duration-300"
            >
              Contact Info
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
      </motion.div>
    </section>
  );
}

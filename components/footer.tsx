"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold gradient-text mb-2">AI Engineer Portfolio</div>
            <p className="text-white text-sm font-medium">
              Built with Next.js, Framer Motion & Three.js
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Pranaveswar19"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:glow transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pranaveswar"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full hover:glow transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mpranaveswar@gmail.com"
              className="glass p-3 rounded-full hover:glow transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-white text-xs font-medium">
              © {currentYear} All rights reserved
            </p>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white text-xs font-medium">
            Internship Portfolio Showcase • AI Engineer • Full Stack Developer
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

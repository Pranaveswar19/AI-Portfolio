"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Contact Information</h2>
          <p className="text-white text-lg max-w-2xl mx-auto font-medium">
            Let's collaborate on your next AI project or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.a
              href="mailto:mpranaveswar@gmail.com"
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-sm text-white mb-2 font-medium">Email</div>
              <div className="font-medium text-sm text-white">mpranaveswar@gmail.com</div>
            </motion.a>

            <motion.a
              href="https://github.com/Pranaveswar19"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Github className="w-8 h-8" />
              </div>
              <div className="text-sm text-white mb-2 font-medium">GitHub</div>
              <div className="font-medium text-sm text-white">@Pranaveswar19</div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pranaveswar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-8 hover:glow transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Linkedin className="w-8 h-8" />
              </div>
              <div className="text-sm text-white mb-2 font-medium">LinkedIn</div>
              <div className="font-medium text-sm text-white">Pranaveswar Mulaveesala</div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

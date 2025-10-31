"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Video, ChevronDown } from "lucide-react";
import { useState } from "react";

interface VideoShowcase {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Loom embed URL or placeholder
  category: string;
  duration?: string;
}

const showcaseVideos: VideoShowcase[] = [
  {
    id: "video-1",
    title: "Project Demo 1",
    description: "Comprehensive walkthrough of AI automation project showcasing real-time processing",
    videoUrl: "", // Add your Loom embed URL here: https://www.loom.com/embed/YOUR_VIDEO_ID
    category: "AI Automation",
    duration: "5:30"
  },
  {
    id: "video-2",
    title: "Project Demo 2",
    description: "Live demonstration of data analysis and visualization capabilities",
    videoUrl: "", // Add your Loom embed URL here
    category: "Data Analytics",
    duration: "4:45"
  },
  {
    id: "video-3",
    title: "Project Demo 3",
    description: "Step-by-step guide through the application architecture and features",
    videoUrl: "", // Placeholder for future video
    category: "Development",
    duration: "6:15"
  },
  {
    id: "video-4",
    title: "Project Demo 4",
    description: "Technical deep-dive into AI model implementation and optimization",
    videoUrl: "", // Placeholder for future video
    category: "Machine Learning",
    duration: "7:00"
  },
  {
    id: "video-5",
    title: "Project Demo 5",
    description: "End-to-end demonstration of the complete project workflow",
    videoUrl: "", // Placeholder for future video
    category: "Full Stack",
    duration: "8:20"
  }
];

export function Showcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showVideos, setShowVideos] = useState(false);

  const handleToggleVideos = () => {
    setShowVideos(!showVideos);
    if (!showVideos) {
      // Scroll to the videos section smoothly after showing
      setTimeout(() => {
        const element = document.getElementById('video-gallery');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section id="showcase" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Video className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4 gradient-text">Video Showcase</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium mb-8">
            Watch video demonstrations and walkthroughs of my projects in action
          </p>

          {/* Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleVideos}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            <Play className="w-6 h-6" />
            {showVideos ? 'Hide Videos' : 'Watch Video Demos'}
            <motion.div
              animate={{ y: showVideos ? [0, -3, 0] : [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showVideos ? 'rotate-180' : ''}`} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Video Gallery - Hidden by default */}
        <motion.div
          id="video-gallery"
          initial={false}
          animate={{
            height: showVideos ? 'auto' : 0,
            opacity: showVideos ? 1 : 0,
            marginTop: showVideos ? '3rem' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          {showVideos && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {showcaseVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 group"
                >
                  {/* Video Embed or Placeholder */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
                    {video.videoUrl ? (
                      <iframe
                        src={video.videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                        title={video.title}
                      />
                    ) : (
                      // Placeholder for videos not yet added
                      <div className="w-full h-full flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(147,51,234,0.5)] group-hover:shadow-[0_0_60px_rgba(147,51,234,0.8)] transition-all duration-300 cursor-pointer relative z-10"
                        >
                          <Play className="w-12 h-12 text-white ml-1" />
                        </motion.div>
                        <p className="text-gray-400 mt-6 text-sm relative z-10">Video Coming Soon</p>
                        
                        {/* Animated rings */}
                        <motion.div
                          className="absolute w-32 h-32 rounded-full border-2 border-purple-500/30"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute w-32 h-32 rounded-full border-2 border-blue-500/30"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {video.title}
                      </h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30 whitespace-nowrap ml-2">
                        {video.category}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {video.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <Play className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-300 font-medium">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

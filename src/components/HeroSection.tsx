"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || "/trailer.mp4";
  const posterUrl = process.env.NEXT_PUBLIC_POSTER_URL || "/trailer-poster.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full py-20 sm:py-28">
        {/* Hero text block */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-6"
            style={{ fontFamily: "var(--font-source-serif)", fontWeight: 300 }}
          >
            Soft Body Dynamics
          </h1>
          <div className="accent-line-purple w-24 mx-auto mb-6" />
          <p
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            AI Content &amp; VFX Studio
          </p>
        </motion.div>

        {/* Poster frame & Video Player */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
        >
          <div className="poster-frame aspect-video relative bg-black">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="poster"
                  className="w-full h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={posterUrl}
                    alt="Trailer Poster"
                    className="w-full h-full object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="play-overlay" onClick={() => setIsPlaying(true)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
                      <circle cx="12" cy="12" r="11" strokeOpacity="0.3" />
                      <polygon points="10,8 16,12 10,16" fill="currentColor" fillOpacity="0.6" stroke="none" />
                    </svg>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  className="w-full h-full relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover outline-none"
                    onEnded={() => setIsPlaying(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

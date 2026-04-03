"use client";

import { motion } from "framer-motion";

interface AboutSectionProps {
  contentHtml: string;
}

export default function AboutSection({ contentHtml }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-dim)] mb-4"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            About
          </p>
          <div className="accent-line-purple w-12 mx-auto" />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="glass-panel p-8 sm:p-12 lg:p-16">
            {/* Cinematic lead-in */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-[var(--color-text-primary)]"
              style={{ fontFamily: "var(--font-source-serif)", fontWeight: 300 }}
            >
              I don&apos;t just prompt; I direct.
            </h2>
            <div className="accent-line-teal w-16 mb-8" />

            {/* Markdown content */}
            <div
              className="prose prose-invert prose-lg max-w-none"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

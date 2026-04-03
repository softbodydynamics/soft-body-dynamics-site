"use client";

import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  content: string;
  featured?: boolean;
}

const services: ServiceCard[] = [
  {
    title: "Custom Character Packages",
    content:
      "Complete digital identity creation. Each package includes highly consistent LORAs trained on custom-made, fully nude base models to ensure absolute anatomical and facial fidelity. These are paired with a fully posable 3D Blender model, giving you granular control over pose, lighting, and scene composition before generation even begins.\n\nCurrently featuring Sophie—our flagship Spokane-based digital talent.",
    featured: true,
  },
  {
    title: "AI Content Creation",
    content:
      "Bespoke SFW and NSFW image and video generation. From raw, smartphone-style photorealism with practical lighting and infinite depth-of-field, to highly controlled, cinematic compositions. True intent, realized at the pixel level.",
  },
  {
    title: "Educational Consultation",
    content:
      "Master the pipeline. 1-on-1 instruction on creating your own high-end SFW and NSFW AI content. Learn the exact techniques that bridge the gap between basic AI generation and professional VFX.",
  },
];

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
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
            Services
          </p>
          <div className="accent-line-teal w-12 mx-auto" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Featured card - spans full width on md */}
          <motion.div
            className="md:col-span-2 glass-panel-featured p-8 sm:p-10 lg:p-12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-start gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-sophie-purple)] mt-2 shrink-0" />
              <h3
                className="text-xl sm:text-2xl text-[var(--color-text-primary)]"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
              >
                {services[0].title}
              </h3>
            </div>
            <div className="ml-4 space-y-4">
              {services[0].content.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="ml-4 mt-8">
              <button
                onClick={scrollToContact}
                className="capsule-btn capsule-btn-golden text-xs"
              >
                Contact
              </button>
            </div>
          </motion.div>

          {/* Secondary cards */}
          {services.slice(1).map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-panel p-8 sm:p-10"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.15 * (i + 1),
              }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{
                    backgroundColor:
                      i === 0
                        ? "var(--color-tech-teal)"
                        : "var(--color-sophie-purple)",
                  }}
                />
                <h3
                  className="text-lg sm:text-xl text-[var(--color-text-primary)]"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
              </div>
              <p
                className="ml-4 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
              >
                {service.content}
              </p>
              <div className="ml-4 mt-8">
                <button
                  onClick={scrollToContact}
                  className="capsule-btn capsule-btn-golden text-xs"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

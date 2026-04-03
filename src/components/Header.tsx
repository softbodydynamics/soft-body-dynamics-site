"use client";

import { motion } from "framer-motion";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <div
        className="backdrop-blur-xl border-b"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          borderColor: "rgba(255, 255, 255, 0.04)",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm tracking-widest uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-500"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            Soft Body Dynamics
          </button>

          <div className="flex items-center gap-8">
            {[
              { label: "Services", id: "services" },
              { label: "About", id: "about" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] transition-colors duration-500"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
              >
                {item.label}
              </button>
            ))}

            <button
              id="header-contact-btn"
              onClick={() => scrollTo("contact")}
              className="capsule-btn capsule-btn-golden text-xs"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

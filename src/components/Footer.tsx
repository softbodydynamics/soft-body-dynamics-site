"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.995 13.985c.004.124.004.247 0 .371 0 1.924-2.24 3.488-5.003 3.488-2.764 0-5.004-1.564-5.004-3.488a2.07 2.07 0 0 1 0-.37c-.427-.198-.718-.625-.718-1.116 0-.684.559-1.242 1.243-1.242.329 0 .627.128.849.337 1.109-.733 2.576-1.183 4.157-1.224l.812-3.849a.249.249 0 0 1 .299-.193l2.733.576c.173-.398.573-.675 1.04-.675a1.12 1.12 0 0 1 0 2.24c-.58 0-1.06-.447-1.109-1.015l-2.436-.513-.723 3.42c1.558.055 3.004.505 4.095 1.232.22-.2.512-.32.836-.32.684 0 1.243.558 1.243 1.242 0 .495-.294.926-.726 1.122zM9.5 12.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-4.698 4.052c-.073-.069-.073-.183 0-.252.07-.069.183-.069.253 0a3.252 3.252 0 0 0 3.89 0c.07-.069.183-.069.253 0 .069.069.069.183 0 .252a3.74 3.74 0 0 1-4.396 0z" />
      </svg>
    ),
  },
  {
    label: "Bluesky",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.585 3.513 6.168 3.271a9.02 9.02 0 0 0-.762.085c-2.627.385-6.17 1.33-3.53 4.736 2.905 3.481 4.972 2.528 6.5.627 1.218-1.533 1.699-3.685 2-.5.301-3.185.782-1.033 2 .5 1.528 1.901 3.595 2.854 6.5-.627 2.64-3.406.903-4.351-3.53-4.736a9.02 9.02 0 0 0-.762-.085c2.583.242 5.383-.644 6.168-3.271C21.622 9.418 22 4.458 22 3.768c0-.687-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C14.046 4.747 11.087 8.686 12 10.8z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative py-16 sm:py-20">
      <div className="accent-line-purple mb-16" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Studio name */}
          <p
            className="text-xs text-[var(--color-text-dim)] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            Soft Body Dynamics
          </p>

          <p
            className="text-xs text-[var(--color-text-dim)] opacity-50"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 400 }}
          >
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

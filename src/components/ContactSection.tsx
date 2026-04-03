"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContactState = "idle" | "captcha" | "revealed";

export default function ContactSection() {
  const [state, setState] = useState<ContactState>("idle");
  const [captchaInput, setCaptchaInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [captchaChallenge] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 2;
    const b = Math.floor(Math.random() * 10) + 2;
    return { a, b, answer: a + b };
  });

  const discordUsername = "soft.body.dynamics";

  const handleOpenCaptcha = () => {
    setState("captcha");
  };

  const handleCaptchaSubmit = () => {
    if (parseInt(captchaInput) === captchaChallenge.answer) {
      setState("revealed");
    }
  };

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(discordUsername);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = discordUsername;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
            Get in Touch
          </p>
          <div className="accent-line-purple w-12 mx-auto" />
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="glass-panel p-8 sm:p-12 text-center">
            <AnimatePresence mode="wait">
              {state === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p
                    className="text-[var(--color-text-secondary)] text-sm mb-8 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-jost)", fontWeight: 400,
                    }}
                  >
                    All commissions and inquiries are handled through Discord.
                    Complete a quick verification to get the username.
                  </p>
                  <button
                    id="contact-reveal-btn"
                    onClick={handleOpenCaptcha}
                    className="capsule-btn capsule-btn-golden"
                  >
                    Contact
                  </button>
                </motion.div>
              )}

              {state === "captcha" && (
                <motion.div
                  key="captcha"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p
                    className="text-[var(--color-text-secondary)] text-sm mb-6"
                    style={{
                      fontFamily: "var(--font-jost)", fontWeight: 400,
                    }}
                  >
                    Quick verification: What is{" "}
                    <span className="text-[var(--color-text-primary)]">
                      {captchaChallenge.a} + {captchaChallenge.b}
                    </span>
                    ?
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <input
                      id="captcha-input"
                      type="number"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCaptchaSubmit();
                      }}
                      className="w-20 h-10 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-center text-[var(--color-text-primary)] text-sm outline-none focus:border-[var(--color-sophie-purple)] transition-colors duration-500"
                      style={{
                        fontFamily: "var(--font-jost)", fontWeight: 400,
                      }}
                      autoFocus
                    />
                    <button
                      id="captcha-submit-btn"
                      onClick={handleCaptchaSubmit}
                      className="capsule-btn capsule-btn-glass text-xs"
                    >
                      Verify
                    </button>
                  </div>
                </motion.div>
              )}

              {state === "revealed" && (
                <motion.div
                  key="revealed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p
                    className="text-xs text-[var(--color-text-dim)] mb-4 uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-jost)", fontWeight: 400,
                    }}
                  >
                    Discord Username
                  </p>
                  <p
                    className="text-xl sm:text-2xl text-[var(--color-text-primary)] mb-6"
                    style={{
                      fontFamily: "var(--font-jost)", fontWeight: 400,
                    }}
                  >
                    {discordUsername}
                  </p>
                  <button
                    id="copy-discord-btn"
                    onClick={handleCopy}
                    className="capsule-btn capsule-btn-glass text-xs"
                  >
                    {copied ? (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color-tech-teal)"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy to Clipboard
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [passed, setPassed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("sbd-age-verified");
    if (stored === "true") {
      setPassed(true);
    }
    setChecking(false);
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem("sbd-age-verified", "true");
    setPassed(true);
  };

  if (checking) {
    return (
      <div className="age-gate-overlay">
        <div />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {!passed && (
          <motion.div
            className="age-gate-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="glass-panel p-10 sm:p-14 text-center max-w-md mx-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="accent-line-purple w-16 mx-auto mb-8" />
                <h2
                  className="text-2xl font-light tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Age Verification
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  This site contains content intended for adults. You must be 18
                  years or older to continue.
                </p>
              </div>

              <button
                id="age-gate-confirm"
                onClick={handleConfirm}
                className="capsule-btn capsule-btn-entry"
              >
                I am 18 or older
              </button>

              <p className="mt-6 text-xs text-[var(--color-text-dim)]">
                By entering, you confirm that you are of legal age in your
                jurisdiction.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {passed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

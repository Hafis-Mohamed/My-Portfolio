"use client";

import { motion } from "framer-motion";

/**
 * Unified section heading with a monospace numbered index.
 * The index encodes real scroll order (01 -> 07), so it's information, not decoration.
 */
export default function SectionHeading({ index, eyebrow, title, align = "center" }) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col mb-14 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="font-mono text-sm font-medium text-aurora">
          {index}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-indigo-400/60 to-transparent" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="font-display text-4xl md:text-6xl font-bold tracking-tight text-soft-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}

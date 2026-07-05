"use client";

import { motion } from "framer-motion";
import { Layout, Smartphone, Terminal, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap = { Layout, Smartphone, Terminal, Cpu };

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function About() {
  const { about } = portfolioData;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const card = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 13 },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionHeading
          index="01"
          eyebrow="Who I Am"
          title="About Me"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-slate-100 mb-5 leading-snug">
              MCA student building{" "}
              <span className="text-aurora">practical software</span> that
              removes manual work.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">{about.description}</p>
            <p className="text-slate-400 leading-relaxed">
              My approach centers on efficiency, clarity, and structural
              integrity — learning modern architectures, sharpening algorithms,
              and turning manual processes into dependable software systems.
            </p>

            <div className="mt-8 aurora-rule" />
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { k: "2+", v: "Years coding" },
                { k: "5+", v: "Tech stacks" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-bold text-aurora">
                    {s.k}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {about.highlights.map((h, idx) => {
              const Icon = iconMap[h.icon] || Cpu;
              return (
                <motion.div
                  key={idx}
                  variants={card}
                  onMouseMove={handleMove}
                  className="gradient-border gradient-border-hover p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="glow-overlay" />
                  <div className="w-11 h-11 rounded-xl grid place-items-center text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">
                    {h.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {h.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight, Building2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Experience() {
  const { experience } = portfolioData;

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.18 } } };
  const item = {
    hidden: { x: -24, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <SectionHeading
          index="04"
          eyebrow="Where I've Worked"
          title="Experience"
        />

        <motion.div
          className="relative pl-8 sm:pl-10 space-y-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* gradient rail */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/40 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={item} className="relative group">
              <div className="absolute -left-8 sm:-left-10 top-2 w-[9px] h-[9px] rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 ring-4 ring-[#070711] z-10" />

              <div
                onMouseMove={handleMove}
                className="gradient-border gradient-border-hover p-7 rounded-2xl relative overflow-hidden"
              >
                <div className="glow-overlay" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md surface text-indigo-200 text-xs font-mono font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-fuchsia-300" />
                  {exp.company}
                </h4>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                    >
                      <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

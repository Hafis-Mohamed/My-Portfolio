"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Server, Wrench, Database, Brain } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const categoryIconMap = {
  Languages: Code2,
  "Web & App Development": Terminal,
  "Backend & Database & Cloud": Server,
  Tools: Wrench,
  "Core CS": Database,
  "Soft Skills": Brain,
};

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

function SkillRow({ name, level }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] text-slate-300 font-medium">{name}</span>
        <span className="font-mono text-[11px] text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const card = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionHeading
          index="02"
          eyebrow="Toolkit"
          title="Skills & Expertise"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((group, idx) => {
            const Icon = categoryIconMap[group.category] || Code2;
            return (
              <motion.div
                key={idx}
                variants={card}
                onMouseMove={handleMove}
                className="gradient-border gradient-border-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="glow-overlay" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-100">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, i) => (
                    <SkillRow key={i} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

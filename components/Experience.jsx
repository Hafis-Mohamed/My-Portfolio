"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Briefcase className="w-4 h-4" />
            <span>Professional & Practical Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Timeline Layout */}
        <motion.div
          className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#030014] border-2 border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                <div className="glow-overlay" />

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono font-medium mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-slate-300 font-semibold mb-4 font-display">
                  {exp.company}
                </h4>

                {/* Main Paragraph */}
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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

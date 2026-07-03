"use client";

import { motion } from "framer-motion";
import { Layout, Smartphone, Terminal, Cpu, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  Layout: Layout,
  Smartphone: Smartphone,
  Terminal: Terminal,
  Cpu: Cpu,
};

export default function About() {
  const { about } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic & Professional Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            {about.title}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-200 mb-6 leading-snug">
              MCA Student at College of Engineering Trivandrum (CET)
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {about.description}
            </p>
            <p className="text-slate-400 leading-relaxed">
              My engineering approach centers around efficiency, clarity, and structural integrity. I strive to learn modern architectures, optimize algorithms, and convert manual work processes into highly functional software systems.
            </p>
          </motion.div>

          {/* Right Highlights Cards Column */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {about.highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Cpu;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
                >
                  {/* Subtle hover overlay effect */}
                  <div className="glow-overlay" />

                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Info */}
                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Server, Wrench, Database } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Icon mapping based on category names
const categoryIconMap = {
  "Languages": Code2,
  "Web & App Development": Terminal,
  "Backend & Database & Cloud": Server,
  "Tools": Wrench,
  "Core CS": Database,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: {},
    visible: {
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
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };


  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

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
            <Code2 className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            My Tech Stack
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((group, idx) => {
            const Icon = categoryIconMap[group.category] || Code2;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="glow-overlay" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-100 group-hover:text-white transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-4">
                    {group.items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: hoveredCard === idx ? `${skill.level}%` : 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: skillIdx * 0.03 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

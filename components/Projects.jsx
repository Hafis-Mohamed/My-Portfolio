"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, ShieldCheck, Database, Smartphone, BarChart3 } from "lucide-react";
import { GithubIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

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
            <FolderGit2 className="w-4 h-4" />
            <span>Creative Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/5 flex flex-col group h-full"
            >
              <div className="glow-overlay" />

              {/* Graphic Header (Premium Mockup instead of simple img) */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-black/50 border-b border-white/5 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent)]" />

                {idx === 0 ? (
                  /* Hostel Management System Visual Mockup */
                  <div className="flex flex-col gap-2 w-full max-w-[280px] scale-90 sm:scale-100 transition-transform duration-300 group-hover:scale-105">
                    <div className="glass-card p-3 rounded-lg border border-white/10 shadow-lg flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <div className="text-left">
                        <div className="text-xs text-white font-semibold">Asmabees Hostel</div>
                        <div className="text-[10px] text-slate-400">Database connection: Active</div>
                      </div>
                    </div>
                    <div className="glass-card p-3 rounded-lg border border-white/10 shadow-lg flex items-center gap-3 ml-6 bg-[#030014]/60">
                      <Database className="w-5 h-5 text-cyan-400" />
                      <div className="text-left font-mono text-[9px] text-cyan-300">
                        SELECT * FROM rooms WHERE status='vacant';
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Small Business Management System Visual Mockup */
                  <div className="flex flex-col gap-2 w-full max-w-[280px] scale-90 sm:scale-100 transition-transform duration-300 group-hover:scale-105">
                    <div className="glass-card p-3 rounded-lg border border-white/10 shadow-lg flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-indigo-400" />
                      <div className="text-left">
                        <div className="text-xs text-white font-semibold">Business Mobile App</div>
                        <div className="text-[10px] text-slate-400">Firebase sync status: Online</div>
                      </div>
                    </div>
                    <div className="glass-card p-3 rounded-lg border border-white/10 shadow-lg flex items-center justify-between ml-6 bg-[#030014]/60">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                        <span className="text-[10px] text-slate-300">Weekly sales</span>
                      </div>
                      <span className="text-xs text-emerald-400 font-bold font-mono">+$1,240.00</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-cyan-500/10 bg-cyan-950/10 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] text-xs font-semibold flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

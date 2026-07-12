"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  Database,
  Smartphone,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Projects() {
  const { projects } = portfolioData;

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
  const card = {
    hidden: { y: 36, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Featured Projects"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={card}
              onMouseMove={handleMove}
              className="gradient-border gradient-border-hover rounded-2xl overflow-hidden flex flex-col group relative"
            >
              <div className="glow-overlay" />

              {/* Visual header */}
              <div className="relative h-52 bg-gradient-to-br from-indigo-950/50 via-fuchsia-950/20 to-black/40 border-b border-white/[0.06] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(129,140,248,0.18),transparent_60%)]" />
                <span className="absolute top-4 left-4 font-mono text-[11px] text-slate-500">
                  {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>

                {idx === 0 ? (
                  <div className="flex flex-col gap-2.5 w-full max-w-[280px] transition-transform duration-300 group-hover:scale-105">
                    <div className="surface p-3 rounded-lg flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="text-left">
                        <div className="text-xs text-white font-semibold">
                          Asmabees Hostel
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Database connection: Active
                        </div>
                      </div>
                    </div>
                    <div className="surface p-3 rounded-lg flex items-center gap-3 ml-6 bg-black/40">
                      <Database className="w-5 h-5 text-cyan-400 shrink-0" />
                      <div className="text-left font-mono text-[9px] text-cyan-300">
                        {"SELECT * FROM rooms WHERE status='vacant';"}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5 w-full max-w-[280px] transition-transform duration-300 group-hover:scale-105">
                    <div className="surface p-3 rounded-lg flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-indigo-400 shrink-0" />
                      <div className="text-left">
                        <div className="text-xs text-white font-semibold">
                          Business Mobile App
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Firebase sync status: Online
                        </div>
                      </div>
                    </div>
                    <div className="surface p-3 rounded-lg flex items-center justify-between ml-6 bg-black/40">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-[10px] text-slate-300">
                          Weekly sales
                        </span>
                      </div>
                      <span className="text-xs text-emerald-400 font-bold font-mono">
                        +$1,240.00
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 flex items-start justify-between gap-2">
                    <span className="text-white group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-white/[0.08] bg-white/[0.03] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 border-t border-white/[0.06] pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg surface hover:text-white hover:border-white/15 text-slate-300 transition-all text-xs font-semibold flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      View Code
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-aurora px-4 py-2 rounded-lg text-white text-xs font-semibold flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
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
  )

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Let's Collaborate
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Contact Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center justify-between min-h-[160px] group relative overflow-hidden"
            >
              <div className="glow-overlay" />
              <div className="w-12 h-12 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">Email Address</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors break-all">{personal.email}</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center justify-between min-h-[160px] group relative overflow-hidden"
            >
              <div className="glow-overlay" />
              <div className="w-12 h-12 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300 mb-4">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{personal.name}</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center justify-between min-h-[160px] group relative overflow-hidden"
            >
              <div className="glow-overlay" />
              <div className="w-12 h-12 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-300 mb-4">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">GitHub Profile</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Hafis-Mohamed</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

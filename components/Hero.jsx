"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Background grids and glowing blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Recruiter-ready Developer</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-4"
          >
            Hi, I'm <br />
            <span className="text-gradient-cyan-indigo drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              {personal.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-slate-300 font-display mb-6 flex flex-wrap items-center gap-2"
          >
            <span>{personal.role}</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-sans"
          >
            {personal.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium flex items-center gap-2 hover:scale-102 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-98 transition-all group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all font-medium"
            >
              Contact Me
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl border border-dashed border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/5 text-cyan-400 hover:text-cyan-300 transition-all font-medium flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 text-slate-400">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:text-white transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:text-white transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Abstract Code Visual */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Glow backing */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

            {/* Window Container */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-500 font-mono">hafis-developer.json</div>
                <div className="w-6" />
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                <p className="text-indigo-400">const<span className="text-slate-100"> developer</span> = &#123;</p>
                <div className="pl-6">
                  <p><span className="text-cyan-400">name</span>: <span className="text-emerald-400">"Hafis Mohamed"</span>,</p>
                  <p><span className="text-cyan-400">education</span>: <span className="text-emerald-400">"MCA @ CET Trivandrum"</span>,</p>
                  <p><span className="text-cyan-400">interests</span>: [</p>
                  <p className="pl-6 text-slate-400">
                    <span className="text-emerald-400">"Full Stack Web"</span>,
                    <br />
                    <span className="text-emerald-400">"Mobile App Dev"</span>
                  </p>
                  <p>],</p>
                  <p><span className="text-cyan-400">stack</span>: &#123;</p>
                  <div className="pl-6 text-slate-400">
                    <p><span className="text-cyan-400">web</span>: [<span className="text-emerald-400">"Django"</span>, <span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"Tailwind"</span>],</p>
                    <p><span className="text-cyan-400">mobile</span>: [<span className="text-emerald-400">"Flutter"</span>, <span className="text-emerald-400">"Firebase"</span>],</p>
                    <p><span className="text-cyan-400">database</span>: [<span className="text-emerald-400">"SQLite"</span>, <span className="text-emerald-400">"MySQL"</span>]</p>
                  </div>
                  <p>&#125;,</p>
                  <p><span className="text-cyan-400">philosophy</span>: <span className="text-emerald-400">"Build systems that automate, simplify, & solve."</span></p>
                </div>
                <p className="text-indigo-400">&#125;;</p>
              </div>
            </div>

            {/* Bottom floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card px-4 py-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-3 bg-[#030014]/80"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="text-xs text-slate-300 font-mono">Open for Opportunities</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

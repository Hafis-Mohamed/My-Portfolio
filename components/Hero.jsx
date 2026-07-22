"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden px-6"
    >
      <div className="aurora-mesh" />
      <div className="absolute inset-0 grid-overlay" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-14 items-center z-10">
        {/* Left Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 pl-2.5 pr-3.5 py-1.5 rounded-full surface text-xs font-medium text-slate-300 mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships &amp; graduate roles
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-5"
          >
            <span className="text-aurora-animate">Hafis</span>{" "}
            <span className="text-aurora-animate">Mohamed</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-medium text-slate-200 font-display mb-5"
          >
            Full Stack &amp; Mobile App Developer
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-slate-500 mb-9"
          >
            <MapPin className="w-4 h-4 text-indigo-400" />
            {personal.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3.5 mb-9">
            <button
              onClick={() => handleScrollTo("#projects")}
              className="btn-aurora px-6 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl surface text-slate-200 hover:text-white hover:border-white/15 transition-all font-semibold text-sm flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-300" />
              Resume
            </a>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-6 py-3.5 rounded-xl text-slate-300 hover:text-white transition-all font-semibold text-sm flex items-center gap-2"
            >
              Contact
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-slate-400"
          >
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg surface hover:text-white hover:border-white/15 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg surface hover:text-white hover:border-white/15 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-lg surface hover:text-white hover:border-white/15 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right code window */}
        <motion.div
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.94, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-2xl bg-[conic-gradient(from_180deg,#22d3ee,#818cf8,#c084fc,#f472b6,#22d3ee)] opacity-25 blur-2xl group-hover:opacity-40 transition-opacity" />

            <div className="relative gradient-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/[0.06]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  developer.json
                </div>
                <div className="w-6" />
              </div>

              <div className="p-6 font-mono text-[13px] leading-relaxed text-slate-300">
                <p>
                  <span className="text-fuchsia-400">const</span>
                  <span className="text-slate-100"> developer</span> ={" "}
                  <span className="text-slate-500">&#123;</span>
                </p>
                <div className="pl-5">
                  <p>
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-emerald-300">{'"Hafis Mohamed"'}</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">education</span>:{" "}
                    <span className="text-emerald-300">
                      {'"MCA @ CET Trivandrum"'}
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-cyan-400">stack</span>:{" "}
                    <span className="text-slate-500">&#123;</span>
                  </p>
                  <div className="pl-5">
                    <p>
                      <span className="text-cyan-400">web</span>: [
                      <span className="text-emerald-300">{'"Django"'}</span>,{" "}
                      <span className="text-emerald-300">{'"Next.js"'}</span>],
                    </p>
                    <p>
                      <span className="text-cyan-400">mobile</span>: [
                      <span className="text-emerald-300">{'"Flutter"'}</span>,{" "}
                      <span className="text-emerald-300">{'"Firebase"'}</span>],
                    </p>
                    <p>
                      <span className="text-cyan-400">data</span>: [
                      <span className="text-emerald-300">{'"SQLite"'}</span>,{" "}
                      <span className="text-emerald-300">{'"MySQL"'}</span>]
                    </p>
                  </div>
                  <p>
                    <span className="text-slate-500">&#125;</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">mission</span>:{" "}
                    <span className="text-emerald-300">
                      {'"Automate, simplify, solve."'}
                    </span>
                  </p>
                </div>
                <p>
                  <span className="text-slate-500">&#125;;</span>
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-5 surface px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 bg-[#070711]/85"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-slate-300 font-mono">
                Available now
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-indigo-400/60 to-transparent" />
      </div>
    </section>
  );
}

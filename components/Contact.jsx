"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Contact() {
  const { personal } = portfolioData;

  const channels = [
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      Icon: Mail,
      tint: "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "in/hafis-mohamed",
      href: personal.linkedinUrl,
      Icon: LinkedinIcon,
      tint: "text-indigo-300 bg-indigo-500/10 border-indigo-400/20",
      external: true,
    },
    {
      label: "GitHub",
      value: "Hafis-Mohamed",
      href: personal.githubUrl,
      Icon: GithubIcon,
      tint: "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/20",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <SectionHeading
          index="06"
          eyebrow="Say Hello"
          title="Let's Build Together"
        />

        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMove}
          className="gradient-border rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden mb-8"
        >
          <div className="glow-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(129,140,248,0.14),transparent_60%)]" />
          <div className="relative">
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              I&apos;m currently open to internships and graduate developer
              roles. Have a project, a question, or just want to connect? My inbox
              is always open.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="btn-aurora inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm"
            >
              <Mail className="w-4 h-4" />
              Send a message
            </a>
          </div>
        </motion.div>

        {/* Channels */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {channels.map(({ label, value, href, Icon, tint, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onMouseMove={handleMove}
              className="gradient-border gradient-border-hover p-5 rounded-2xl flex items-center gap-4 group relative overflow-hidden"
            >
              <div className="glow-overlay" />
              <div
                className={`w-11 h-11 rounded-xl grid place-items-center border shrink-0 ${tint}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  {label}
                </div>
                <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                  {value}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-300 transition-colors shrink-0" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

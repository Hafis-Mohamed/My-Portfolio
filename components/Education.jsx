"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

function handleMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Education() {
  const { education } = portfolioData;

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const card = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 relative">
        <SectionHeading
          index="05"
          eyebrow="Foundations"
          title="Education & Certifications"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {education.map((item, idx) => {
            const isCert = item.degree.includes("Certificate");
            return (
              <motion.div
                key={idx}
                variants={card}
                onMouseMove={handleMove}
                className="gradient-border gradient-border-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="glow-overlay" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg grid place-items-center text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 group-hover:scale-105 transition-transform">
                      {isCert ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.duration}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-1.5 leading-snug">
                    {item.degree}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-fuchsia-300 shrink-0 mt-0.5" />
                    {item.institution}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {item.details}
                  </p>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono border w-fit ${
                    item.status === "Ongoing"
                      ? "border-amber-400/25 bg-amber-500/10 text-amber-300"
                      : "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.status === "Ongoing" ? "bg-amber-400" : "bg-emerald-400"
                    }`}
                  />
                  {item.status}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

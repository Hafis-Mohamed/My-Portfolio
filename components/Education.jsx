"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

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
            <GraduationCap className="w-4 h-4" />
            <span>Learning Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight"
          >
            Education & Certifications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"
          />
        </div>

        {/* Education and Certification Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Loop Education Data */}
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="glow-overlay" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {item.degree.includes("Certificate") ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{item.institution}</span>
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.details}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mt-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono border ${
                    item.status === "Ongoing"
                      ? "border-amber-500/20 bg-amber-950/20 text-amber-400"
                      : "border-emerald-500/20 bg-emerald-950/20 text-emerald-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Real data covers all cards */}
        </motion.div>
      </div>
    </section>
  );
}

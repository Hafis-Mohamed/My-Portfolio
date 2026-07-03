"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    if (personal.web3formsKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: personal.web3formsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Portfolio Message from ${formData.name}`,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    } else {
      // Fallback: Open mailto link with pre-filled subject and body
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

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
            Contact Me
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Socials Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">
              Let's connect & collaborate
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you are a recruiter looking for an MCA intern/full-time engineer, have a project idea, or just want to discuss software development, feel free to reach out. I will get back to you as soon as possible.
            </p>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="glow-overlay" />
              <div className="w-11 h-11 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Email Address</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{personal.email}</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="glow-overlay" />
              <div className="w-11 h-11 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">hafis-mohamed-31baa0254</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl flex items-center gap-4 group"
            >
              <div className="glow-overlay" />
              <div className="w-11 h-11 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-300">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">GitHub Profile</div>
                <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Hafis-Mohamed</div>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative">
              <div className="glow-overlay" />

              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-display font-bold text-white">Send a Message</h3>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-sm text-slate-400 max-w-[280px]">
                    Thank you for reaching out. I'll get back to you as soon as I review it.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === "sending"}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm disabled:opacity-50"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === "sending"}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm disabled:opacity-50"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={status === "sending"}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Hafis, let's discuss an internship/project opportunity..."
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all text-sm resize-none disabled:opacity-50"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-lg border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-mono text-center">
                      Failed to send. Please email directly to: {personal.email}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-white font-medium flex items-center justify-center gap-2 hover:scale-101 active:scale-99 transition-all text-sm disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

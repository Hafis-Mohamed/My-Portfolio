import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#030014] z-10 px-6 py-12">
      {/* Top Gradient Border Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Copy */}
        <div className="text-center md:text-left">
          <h4 className="text-base font-display font-bold text-white tracking-wide">
            {personal.name}
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {currentYear} All rights reserved. Crafted with Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-slate-500">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

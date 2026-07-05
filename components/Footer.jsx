import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-10 px-6 py-12">
      <div className="aurora-rule mb-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="grid place-items-center w-9 h-9 rounded-lg font-display font-bold text-sm text-white bg-gradient-to-br from-indigo-500 to-fuchsia-500">
            HM
          </span>
          <div>
            <h4 className="font-display font-semibold text-white tracking-tight">
              {personal.name}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              &copy; {currentYear} — Built with Next.js &amp; Tailwind CSS.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
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
        </div>
      </div>
    </footer>
  );
}

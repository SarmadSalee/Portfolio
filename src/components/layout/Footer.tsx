"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-bg-soft">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <a
              href="#home"
              className="flex items-center gap-3"
              aria-label="Sarmad home"
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-[#121d2c] shadow-[0_4px_16px_rgba(17,28,42,0.14)]">
                <img
                  src="/sarmad-mark.svg"
                  alt="Sarmad logo"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground leading-none">
                Sarmad<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              I build SaaS products and AI automation systems that help
              businesses ship faster and scale with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/SarmadSalee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sarmad-saleem-111176200/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:sarmad.saleem62@gmail.com"
                className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Sarmad Saleem. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
          >
            Back to top
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

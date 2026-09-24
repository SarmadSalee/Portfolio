"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { navLinks } from "@/data/portfolio";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_1px_2px_rgba(23,32,51,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Sarmad home"
        >
          <img
            src={theme === "dark" ? "/white-logo.png" : "/dark-logo.png"}
            alt="Sarmad logo"
            className="h-16 w-16 object-contain drop-shadow-lg"
          />
          
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/contact"
            className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm"
          >
            Let&apos;s Talk
          </a>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass text-muted hover:text-foreground hover:border-primary/40 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass text-muted hover:text-foreground transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-foreground rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-foreground rounded-full"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-foreground rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary px-5 py-3 rounded-xl font-semibold text-sm text-center"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

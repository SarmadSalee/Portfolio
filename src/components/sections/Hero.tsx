"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import { statistics } from "@/data/portfolio";

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "AWS",
  "Flutter",
  "LangChain",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-24 pb-20 bg-white dark:bg-[#05080d]"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-peach-light border border-peach-soft rounded-full text-xs font-semibold text-peach-deep tracking-wide dark:bg-[#1f1a15] dark:border-[#f4a26133] dark:text-[#f7c9a5]">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for New Projects
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lift group"
        >
          <Image
            src="/profile.png"
            alt="Sarmad Saleem"
            width={112}
            height={112}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl xl:text-[4.5rem] font-bold font-heading tracking-tight leading-[1.08] text-foreground mb-8"
        >
          I Build <span className="text-gradient">SaaS Products</span> &amp;{" "}
          <span className="text-gradient">AI Automation</span> Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Senior Full Stack Developer with 5+ years of experience turning ideas
          into reliable, scalable software — from B2B SaaS platforms to AI-powered
          automation systems that save teams real hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium rounded-full bg-bg-soft text-muted border border-border px-3 py-1.5 inline-flex items-center gap-1.5 dark:bg-[#101923] dark:text-[#dfe7f5] dark:border-[#2f3c4c]"
            >
              <FiCode size={11} className="text-peach-deep" />
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://github.com/SarmadSalee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm shadow-lift"
          >
            <FiGithub size={18} />
            View on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sarmad-saleem-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm"
          >
            <FiLinkedin size={18} />
            Connect on LinkedIn
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl font-semibold text-sm text-muted hover:text-foreground transition-colors"
          >
            View Projects →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-border rounded-2xl p-4 md:p-6 text-center shadow-soft dark:bg-[#111923] dark:border-[#243244] dark:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <FiArrowDown className="text-muted" size={20} />
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";

export function GitHubSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative section-padding bg-white"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            Open Source
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
        </motion.div>

        <motion.div style={{ y }} className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <FiGithub size={24} className="text-foreground" />
                <div>
                  <h3 className="text-lg font-bold font-heading text-foreground">
SarmadSalee
                  </h3>
                  <p className="text-sm text-muted">Software Engineer</p>
                </div>
              </div>
              <a
                href="https://github.com/SarmadSalee"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 glass-card rounded-xl text-xs text-foreground hover:border-primary/30 transition-all"
              >
                View Profile
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Repositories", value: "30+" },
                { label: "Stars", value: "100+" },
                { label: "Contributions", value: "500+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center glass-card p-4 rounded-2xl">
                  <div className="text-xl font-bold font-heading text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {([
                ["Enterprise-HRMS", 18],
                ["AI-Resume-Analyzer", 24],
                ["ToolNova", 16],
                ["AI-RAG-Assistant", 9],
                ["PaperHouse", 11],
              ] as [string, number][]).map(([repo, stars], i) => (
                <motion.div
                  key={repo}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between glass-card p-4 rounded-xl hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FiGitBranch className="text-muted" size={14} />
                    <span className="text-sm text-foreground">{repo}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <FiStar size={12} />
                    <span>{stars}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


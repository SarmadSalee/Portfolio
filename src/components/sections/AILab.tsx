"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiSearch,
  FiCpu,
  FiMessageSquare,
  FiZap,
  FiDatabase,
  FiFile,
  FiShare2,
  FiGrid,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { aiLabItems } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  search: <FiSearch size={20} />,
  bot: <FiCpu size={20} />,
  message: <FiMessageSquare size={20} />,
  sparkles: <HiOutlineSparkles size={20} />,
  network: <FiShare2 size={20} />,
  file: <FiFile size={20} />,
  database: <FiDatabase size={20} />,
  cpu: <FiCpu size={20} />,
  zap: <FiZap size={20} />,
};

export function AILab() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="ai-lab" ref={sectionRef} className="relative section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            Innovation Lab
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            AI <span className="text-gradient">Playground</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Exploring the frontier of artificial intelligence â€” from RAG
            pipelines to autonomous agents.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {aiLabItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group glass-card p-8 text-center cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 glass-card rounded-xl flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  {iconMap[item.icon] || <FiGrid size={20} />}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


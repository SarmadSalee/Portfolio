"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiClock, FiCheck, FiCode, FiTarget } from "react-icons/fi";
import { currentlyBuilding } from "@/data/portfolio";

const statusConfig: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
  live: { color: "text-success", icon: <FiCheck size={14} />, label: "Live" },
  "in-progress": {
    color: "text-primary",
    icon: <FiCode size={14} />,
    label: "In Progress",
  },
  planning: {
    color: "text-muted",
    icon: <FiTarget size={14} />,
    label: "Planning",
  },
};

export function CurrentlyBuilding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="building" ref={sectionRef} className="relative section-padding bg-bg-soft">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            In Development
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            Currently <span className="text-gradient">Building</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            What I&apos;m working on right now â€” live products and upcoming
            launches.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {currentlyBuilding.map((item, index) => {
              const config = statusConfig[item.status];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white border border-border p-6 flex items-center justify-between gap-4 rounded-2xl hover:border-primary/40 hover:shadow-lift transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs ${config.color}`}
                      >
                        {config.icon}
                        {config.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                  <FiClock className="text-muted shrink-0" size={16} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


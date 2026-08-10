"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCalendar } from "react-icons/fi";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative section-padding bg-white"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A track record of delivering impact across roles and technologies.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary opacity-30 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-0 md:pl-12 pb-8 last:pb-0"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(244,162,97,0.4)] hidden md:block" />

                <div
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="bg-white border border-border p-6 md:p-8 rounded-2xl cursor-pointer hover:border-primary/40 hover:shadow-lift transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs text-peach-deep font-semibold mb-2">
                        <FiCalendar size={12} />
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold font-heading text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted mt-1">{exp.company}</p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown className="text-muted shrink-0 mt-1" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="flex items-start gap-3 text-sm text-muted"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap" style={{ gap: 8 }}>
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs rounded-full bg-bg-soft text-muted border border-border"
                                  style={{ padding: "6px 12px", display: "inline-block" }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = ["Frontend", "Backend", "AI", "Cloud", "Tools"];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="skills" ref={sectionRef} className="relative section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            The tools I use to design, build, and ship production software.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-peach-deep">
                  {category}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="group bg-white border border-border rounded-2xl p-5 text-center cursor-default hover:border-primary/40 hover:shadow-lift transition-all"
                    >
                      <div className="text-xs sm:text-sm font-medium text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


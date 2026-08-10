"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/data/portfolio";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding overflow-hidden bg-bg-soft"
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
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            The Journey of a{" "}
            <span className="text-gradient">Product Builder</span>
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            From WordPress intern to Senior Full Stack Developer â€” a story of continuous evolution,
            deep technical curiosity, and a relentless drive to build software that makes a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div style={{ y }} className="relative">
            <div className="glass-card p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold font-heading mb-6">
                My Mission
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                I build and scale B2B SaaS applications using the MERN stack
                (MongoDB, Express.js, React.js, Node.js), Flutter, and WordPress.
                Experienced in real-time systems with Socket.io, Firebase
                authentication, RESTful APIs, and AWS deployment. I also build
                cross-platform mobile apps with Flutter and publish them to
                both Google Play and Apple App Store.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Focus", value: "B2B SaaS" },
                  { label: "Impact", value: "50+ Projects" },
                  { label: "Stack", value: "MERN + Flutter" },
                  { label: "Philosophy", value: "User-Centered" },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-4 rounded-2xl">
                    <div className="text-xs text-muted mb-1">{item.label}</div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary opacity-40" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-16 pb-10 last:pb-0"
              >
                <div className="absolute left-[22px] top-1 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_12px_rgba(244,162,97,0.4)]" />

                <div className="bg-white border border-border p-5 rounded-2xl hover:border-primary/40 hover:shadow-lift transition-all">
                  <span className="text-xs font-semibold text-peach-deep tracking-wider">
                    {item.year}
                  </span>
                  <h4 className="text-base font-semibold font-heading text-foreground mt-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


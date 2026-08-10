"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiCpu,
  FiCloud,
  FiLayout,
  FiCode,
  FiServer,
  FiZap,
  FiUsers,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { services } from "@/data/portfolio";

const serviceIcons: Record<string, React.ReactNode> = {
  brain: <FiCpu size={24} />,
  cloud: <FiCloud size={24} />,
  layout: <FiLayout size={24} />,
  code: <FiCode size={24} />,
  server: <FiServer size={24} />,
  zap: <FiZap size={24} />,
  users: <FiUsers size={24} />,
  monitor: <FiMonitor size={24} />,
  smartphone: <FiSmartphone size={24} />,
};

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="services" ref={sectionRef} className="relative section-padding bg-bg-soft">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From AI integration to enterprise architecture â€” I deliver
            production-ready solutions.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:text-secondary transition-colors">
                  {serviceIcons[service.icon] || <FiCode size={24} />}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


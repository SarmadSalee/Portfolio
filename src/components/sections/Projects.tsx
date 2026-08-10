"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";

const mockupGradients: Record<string, string> = {
  Enterprise: "from-[#FFF1E8] via-[#FAD7C3] to-[#F4A261]",
  AI: "from-[#FFF8F4] via-[#FAD7C3] to-[#EA8C55]",
  SaaS: "from-[#FFF1E8] via-[#F6B78A] to-[#EA8C55]",
  WordPress: "from-[#FFF8F4] via-[#FAD7C3] to-[#F4A261]",
  Automation: "from-[#FFF7F1] via-[#FCE5D6] to-[#D98043]",
};

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative section-padding bg-bg-soft"
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
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real products with real impact. Click any project to explore the
            full case study.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradient = mockupGradients[project.category] || mockupGradients.SaaS;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setSelectedProject(project.id)}
                className="group bg-white border border-border rounded-[20px] overflow-hidden cursor-pointer shadow-soft hover:shadow-lift transition-shadow"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden ${
                    project.image
                      ? ""
                      : `bg-gradient-to-br ${gradient}`
                  }`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {project.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                  )}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/70 text-[10px] font-semibold text-foreground/70 tracking-wide uppercase">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-16 h-16 object-contain mb-4 drop-shadow-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-lift flex items-center justify-center mb-4">
                        <span className="text-primary font-bold text-lg">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <h3
                      className={`text-lg sm:text-xl font-bold font-heading ${
                        project.image ? "text-white" : "text-foreground"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs mt-1 max-w-xs line-clamp-2 ${
                        project.image ? "text-white/80" : "text-muted"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white shadow-lift flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiChevronRight className="text-primary" size={16} />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs rounded-full bg-bg-soft text-muted border border-border px-3 py-1 inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs rounded-full bg-bg-soft text-muted px-3 py-1 inline-block">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-border rounded-[20px] shadow-lift max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-12"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center text-muted hover:text-foreground hover:border-primary/40 top-6 right-6 shadow-soft"
              >
                <FiX size={18} />
              </button>

              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {selectedProjectData.category}
              </span>
              <h3 className="text-3xl font-bold font-heading text-foreground mt-2 mb-6">
                {selectedProjectData.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Overview
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedProjectData.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Problem
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedProjectData.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedProjectData.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Architecture
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {selectedProjectData.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs rounded-full bg-bg-soft text-muted border border-border px-3 py-1.5 inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {selectedProjectData.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProjectData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                  <a
                    href={selectedProjectData.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


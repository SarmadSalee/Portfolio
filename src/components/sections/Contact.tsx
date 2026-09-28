"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import {
  FiCheckCircle,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

const countryNameFormatter = new Intl.DisplayNames(["en"], { type: "region" });
const countryOptions = getCountries()
  .map((country) => ({
    country,
    name: countryNameFormatter.of(country) || country,
    callingCode: `+${getCountryCallingCode(country)}`,
  }))
  .sort((first, second) => first.name.localeCompare(second.name));

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    countryCode: "+92",
    phone: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          phone: formState.phone ? `${formState.countryCode} ${formState.phone}` : "",
          formStartedAt,
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send message.");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        countryCode: "+92",
        phone: "",
        company: "",
        service: "",
        timeline: "",
        message: "",
      });
      setFormStartedAt(Date.now());
      setWebsite("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-peach-deep tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mt-4 mb-6 text-foreground">
            Let&apos;s build something{" "}
            <span className="text-gradient">amazing</span> together
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div style={{ y }}>
            <form onSubmit={handleSubmit} className="bg-white border border-border p-8 rounded-3xl space-y-5 shadow-soft">
              <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formState.countryCode}
                      onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                      aria-label="Country code"
                      className="w-[92px] shrink-0 px-2 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                    >
                      {countryOptions.map((option) => (
                        <option key={option.country} value={option.callingCode}>
                          {option.name} ({option.callingCode})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="min-w-0 w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                      placeholder="300 1234567"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                    placeholder="Company or organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">What do you need?</label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Web application">Web application</option>
                    <option value="SaaS platform">SaaS platform</option>
                    <option value="AI automation">AI automation</option>
                    <option value="API or backend">API or backend</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Target timeline</label>
                  <select
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground focus:outline-none focus:border-primary/50 focus:bg-white transition-colors"
                  >
                    <option value="">When would you like to start?</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1 - 3 months">1 - 3 months</option>
                    <option value="3+ months">3+ months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-bg-soft border border-border rounded-xl text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary/50 focus:bg-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center"
                  role="status"
                >
                  <FiCheckCircle className="mx-auto mb-3 text-green-600" size={28} />
                  <h3 className="text-base font-semibold text-green-900">
                    Thank you for reaching out
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-green-800">
                    Your message has been received successfully. Someone from our team will review your inquiry and contact you shortly.
                  </p>
                  <p className="mt-2 text-xs text-green-700">
                    We appreciate your interest and look forward to speaking with you.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSending}
                className="btn-primary w-full py-4 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            style={{ y }}
            className="flex flex-col justify-center gap-4"
          >
            {[
              {
                icon: <FiMail size={18} />,
                label: "Email",
                value: "sarmad.saleem62@gmail.com",
                href: "mailto:sarmad.saleem62@gmail.com",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-muted">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/SarmadSalee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-2xl flex items-center justify-center gap-2 text-sm text-foreground hover:border-primary/20 transition-all"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sarmad-saleem-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-2xl flex items-center justify-center gap-2 text-sm text-foreground hover:border-primary/20 transition-all"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


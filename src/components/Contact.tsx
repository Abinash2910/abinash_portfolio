"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./SectionWrapper";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    try {
      // EmailJS configuration
      // To set up: Create account at emailjs.com, create a service + template,
      // then replace these IDs with your own
      await emailjs.sendForm(
        "service_rxznm14",
        "template_syf197u",
        formRef.current,
        "t3eNZf6qY9EbJvMHQ"
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto section-padding" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
                Contact
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6"
            >
              Let&apos;s Build Intelligent<br />
              <span className="gradient-text">Systems Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted font-body text-lg max-w-md mb-10"
            >
              Have a project idea or want to collaborate on AI systems?
              Drop me a message and let&apos;s talk.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-foreground/70 font-body">beheraabinash634@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-foreground/70 font-body">Odisha , India</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-8 md:p-10 rounded-2xl glass-light"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent/20 rounded-br-2xl" />

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="from_name" className="block text-sm font-body font-medium text-foreground/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white font-body placeholder:text-muted/40 focus:outline-none focus:border-accent/30 focus:bg-accent/[0.02] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-body font-medium text-foreground/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white font-body placeholder:text-muted/40 focus:outline-none focus:border-accent/30 focus:bg-accent/[0.02] transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-foreground/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white font-body placeholder:text-muted/40 focus:outline-none focus:border-accent/30 focus:bg-accent/[0.02] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Hidden field for recipient */}
                <input type="hidden" name="to_email" value="beheraabinash634@gmail.com" />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="group relative w-full py-4 bg-accent text-white font-heading font-semibold text-sm tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === "idle" && (
                      <>
                        Send Message
                        <FaPaperPlane className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Sending...
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        Message Sent!
                        <FaCheck className="w-3.5 h-3.5" />
                      </>
                    )}
                    {status === "error" && "Failed — Try Again"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
                  >
                    <p className="text-sm text-green-400 font-body">
                      Thanks! I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center"
                  >
                    <p className="text-sm text-red-400 font-body">
                      Something went wrong. Please try again or email directly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

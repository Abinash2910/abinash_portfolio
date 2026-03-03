"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  github: string;
  tags: string[];
  image?: string;
  accent: string;
  svgLogo?: "estimator" | "bot";
}

const projects: Project[] = [
  {
    title: "GrowTrade",
    description:
      "A Modern Full-Stack Stock Trading Platform.",
    longDescription:
      "A comprehensive AI-powered tool that deep-dives into code repositories to identify patterns of technical debt, evaluate architectural risks, and assess long-term maintainability. Uses advanced static analysis combined with LLM-powered reasoning to provide actionable intelligence about codebase health.",
    github: "https://github.com/Abinash2910/growtrade",
    tags: ["📈 Real-Time Stock Trading", "🔐 Secure User Authentication", "💼 Portfolio Management"],
    image: "/images/pic3.png",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "ZOOMY",
    description:
      "A real-time video conferencing platform.",
    longDescription:
      "A real-time video conferencing platform built with React, WebRTC, and Socket.IO, offering high-quality video and audio calls along with simultaneous real-time chat for effective online communication.",
    github: "https://github.com/Abinash2910/ZOMMY",
    tags: ["🎥 Real-Time Video Calling", "🎧 Live Audio Streaming","💬 Real-time chat"],
    image: "/images/zoomy.png",
    accent: "from-purple-500 to-pink-500",

    // svgLogo: "estimator",
  },
  {
    title: "SIGMAGPT",
    description: "Think. Ask. Get Answers.",
    longDescription:
      "SIGMAGPT is a production-ready AI chat application that delivers intelligent, context-aware conversations in real time.Built with a scalable full-stack architecture, it focuses on performance, security, and a smooth user experience.",
    github: "https://github.com/Abinash2910/SigmaGPT",
    tags: ["🤖 AI Chat Assistant", "🧠 Conversational Intelligence", "⚡ Real-Time Responses"],
    image: "/images/Sigma_Gpt.png",
    accent: "from-green-500 to-emerald-500",
    svgLogo: "bot",
  },
];



function BotLogo() {
  return (
    <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Robot head */}
      <rect x="22" y="24" width="36" height="32" rx="8" stroke="url(#botGrad)" strokeWidth="2" fill="none" />
      {/* Antenna */}
      <line x1="40" y1="24" x2="40" y2="16" stroke="#22c55e" strokeWidth="2" />
      <circle cx="40" cy="14" r="3" fill="#22c55e" />
      {/* Eyes */}
      <circle cx="33" cy="37" r="4" fill="#22c55e" opacity="0.8" />
      <circle cx="47" cy="37" r="4" fill="#34d399" opacity="0.8" />
      {/* Eye pupils */}
      <circle cx="34" cy="36.5" r="1.5" fill="white" />
      <circle cx="48" cy="36.5" r="1.5" fill="white" />
      {/* Mouth */}
      <path d="M33 47H47" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      {/* Ears */}
      <rect x="15" y="32" width="7" height="12" rx="3" fill="#22c55e" opacity="0.3" />
      <rect x="58" y="32" width="7" height="12" rx="3" fill="#34d399" opacity="0.3" />
      {/* Text */}
      <text x="74" y="38" fontFamily="sans-serif" fontSize="15" fontWeight="800" fill="#22c55e">AI</text>
      <text x="96" y="38" fontFamily="sans-serif" fontSize="15" fontWeight="800" fill="#34d399">BOT</text>
      <text x="74" y="52" fontFamily="sans-serif" fontSize="9" fontWeight="500" fill="#6ee7b7" opacity="0.7">AUTOMATION</text>
      <defs>
        <linearGradient id="botGrad" x1="22" y1="24" x2="58" y2="56">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-surface border border-white/[0.04] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(0,102,255,0.12),0_0_80px_rgba(0,102,255,0.06)]"
      onClick={onOpen}
    >
      {/* Top gradient accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accent} transition-all duration-500 group-hover:h-1.5 group-hover:shadow-lg`} />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-6 md:p-8 relative z-10">
        {/* Image / SVG Logo area */}
        {project.image ? (
          <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center group-hover:bg-accent/[0.03] transition-colors duration-500">
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ) : project.svgLogo === "estimator" ? (
          <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center group-hover:bg-purple-500/[0.03] transition-colors duration-500">
           {/* <EstimatorLogo /> */}
          </div>
        ) : project.svgLogo === "bot" ? (
          <div className="relative w-full h-32 mb-6 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center group-hover:bg-green-500/[0.03] transition-colors duration-500">
            <BotLogo />
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} opacity-20 mb-6 flex items-center justify-center`}>
            <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${project.accent}`} />
          </div>
        )}

        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted font-body text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-body text-muted bg-white/[0.03] rounded-full border border-white/[0.05] group-hover:border-accent/10 group-hover:text-foreground/60 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors font-body"
          >
            <FaGithub className="w-4 h-4" />
            Source Code
          </a>
          <button className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-body">
            <FaExternalLinkAlt className="w-3 h-3" />
            Details
          </button>
        </div>
      </div>

      {/* Corner glow on hover */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/0 group-hover:bg-accent/[0.06] rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/0 group-hover:bg-accent/[0.04] rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-white/[0.06]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

        <div className="p-8 md:p-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            <HiX className="w-5 h-5" />
          </button>

          {project.image ? (
            <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          ) : project.svgLogo === "estimator" ? (
            <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center">
              {/* <EstimatorLogo /> */}
            </div>
          ) : project.svgLogo === "bot" ? (
            <div className="relative w-full h-40 mb-8 rounded-xl overflow-hidden bg-surface-light flex items-center justify-center">
              <BotLogo />
            </div>
          ) : null}

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 pr-8">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-body text-accent bg-accent/10 rounded-full border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-foreground/70 font-body leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-heading font-semibold text-sm rounded-xl hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transition-all duration-300"
          >
            <FaGithub className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto section-padding" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <span className="w-12 h-[2px] bg-accent" />
          <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
            Work
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6"
        >
          Live <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted font-body text-lg max-w-2xl mb-16"
        >
          Production-ready applications powering real users.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
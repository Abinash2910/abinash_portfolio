"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  FaBrain,
  FaLayerGroup,
  FaRobot,
  FaVideo,
  FaGitAlt,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { HiOutlineLightningBolt, HiOutlineTerminal } from "react-icons/hi";

const skills = [
  {
    icon: FaBrain,
    title: "AI System Architecture",
    description: "Designing end-to-end intelligent systems for production environments",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "hover:border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: FaLayerGroup,
    title: "MERN Full Stack",
    description: "End-to-end applications using MongoDB, Express, React, and Node.js.",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "hover:border-purple-500/20",
    iconColor: "text-purple-400",
  },
  
  {
    icon: FaVideo,
    title: "Real-Time Applications",
    description: "Building real-time applications using WebRTC and Socket.IO.",
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: FaRobot,
    title: "AI-Driven Applications",
    description: "Building applications enhanced with intelligent AI features.",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description: "Designing, organizing, and maintaining application data for scalable systems.",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "hover:border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: HiOutlineTerminal,
    title: "Prompt Engineering",
    description: "Crafting precision prompts for maximum LLM output quality",
    color: "from-rose-500/20 to-rose-600/5",
    borderColor: "hover:border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: FaGitAlt,
    title: "Git & Version Control",
    description: "Professional git workflows, CI/CD pipelines, and collaboration",
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "hover:border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: FaReact,
    title: "Next.js for AI Interfaces",
    description: "Building sleek, performant interfaces for AI-powered products",
    color: "from-sky-500/20 to-sky-600/5",
    borderColor: "hover:border-sky-500/20",
    iconColor: "text-sky-400",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills">
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
            Expertise
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6"
        >
          Core <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted font-body text-lg max-w-2xl mb-16"
        >
          Technologies and domains I architect solutions in.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className={`group relative p-6 rounded-2xl bg-surface border border-white/[0.04] ${skill.borderColor} transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-default`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className={`mb-4 ${skill.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                  <skill.icon className="w-7 h-7" />
                </div>

                <h3 className="text-base font-heading font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {skill.title}
                </h3>

                <p className="text-sm text-muted font-body leading-relaxed group-hover:text-foreground/60 transition-colors">
                  {skill.description}
                </p>
              </div>

              {/* Corner glow */}
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-accent/0 group-hover:bg-accent/5 rounded-full blur-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

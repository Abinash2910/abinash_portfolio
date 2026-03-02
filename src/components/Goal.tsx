"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const goalBullets = [
  "AI-powered production intelligence — predicting delays, scope creep, and burnout before they happen",
  "Data-driven game design pipelines that replace guesswork with precision",
  "LLM-integrated tools for real-time team analytics and sprint health monitoring",
  "Risk modeling engines that give producers a strategic edge from day one",
  "AI-backed playtesting and balancing systems that accelerate quality at scale",
];

function GlowKeyword({ children }: { children: React.ReactNode }) {
  return (
    <span className="keyword-glow text-accent font-semibold">
      {children}
    </span>
  );
}

export default function Goal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="goal">
      <div className="max-w-4xl mx-auto section-padding" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <span className="w-12 h-[2px] bg-accent" />
          <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
            Vision
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-12"
        >
          My <span className="gradient-text">Goal</span>
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative p-8 md:p-10 rounded-2xl glass-light group hover:border-accent/10 transition-all duration-500"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent/20 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent/20 rounded-br-2xl" />

          <div className="relative">
            {/* Vision Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground/80 font-body font-light leading-relaxed mb-8"
            >
              I am building toward founding an AI-first game studio — a company
              where every production decision is <GlowKeyword>predicted</GlowKeyword>,
              every workflow is <GlowKeyword>data-driven</GlowKeyword>, and every
              release is <GlowKeyword>AI-backed</GlowKeyword> from concept to launch.
            </motion.p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-10">
              {goalBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                  <span className="text-foreground/70 font-body text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="pt-8 border-t border-white/5"
            >
              <p className="text-xl md:text-2xl font-heading font-bold text-foreground/90 leading-snug mb-2">
                The future of game production is intelligent.
              </p>
              <p className="text-xl md:text-2xl font-heading font-semibold gradient-text-accent leading-snug">
                I am building the systems that make it happen.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

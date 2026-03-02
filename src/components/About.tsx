"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const intersectionAreas = [
  "Artificial Intelligence",
  "Production Intelligence",
  "Risk Modeling",
  "Game Development Systems",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
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
            About
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-12"
        >
          Who I <span className="gradient-text">Am</span>
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 font-body font-light leading-relaxed mb-6"
        >
          I am Abinash Behera — a Full Stack Developer building production-ready web applications that solve real-world problems combining scalable backend systems, intuitive frontends, and modern tools like MERN and Next.js, with a strong focus on performance ,  security and usability.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-foreground/80 font-body font-light leading-relaxed mb-10"
        >
          I design end-to-end, production-ready systems that turn data into actionable insights. My work spans scalable backend services, intelligent data pipelines, AI-driven workflows, and interactive dashboards that help teams make informed decisions.
        </motion.p>

        {/* Intersection Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="space-y-3 mb-10"
        >
          <p className="text-sm text-accent font-body font-medium tracking-[0.15em] uppercase mb-4">
            Where I Operate
          </p>
          {intersectionAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
              <span className="text-foreground/70 font-body text-base group-hover:text-foreground transition-colors duration-300">
                {area}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-xl md:text-2xl font-heading font-semibold text-foreground/90 leading-snug"
        >
          I am not just building tools —{" "}
          <span className="gradient-text-accent">
            I am engineering decision-making systems.
          </span>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}

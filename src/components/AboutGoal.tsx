"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const intersectionAreas = [
  "End-to-end full stack applications",
  "Backend APIs and core services",
  "Databases & data flow",
  "Cloud-hosted deployments",
];

const goalBullets = [
  "Building Production-Ready Full Stack Systems",
  "Integrating GenAI into Real Products",
  "End-to-End GenAI System Ownership",
  "Creating Scalable & High-Performance Applications",
  "Delivering Clean and User-Focused Experiences",
  "Delivering Measurable Business Impact with GenAI",
  "Continuous Learning & Technical Growth",
];

function GlowKeyword({ children }: { children: React.ReactNode }) {
  return (
    <span className="keyword-glow text-accent font-semibold">
      {children}
    </span>
  );
}

export default function AboutGoal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto section-padding" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative items-start">

          {/* Vertical Divider — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 z-10">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent relative">
              <div className="absolute inset-0 w-[3px] -translate-x-[1px] bg-accent/[0.06] blur-md" />
            </div>
          </div>

          {/* LEFT — Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 md:p-10 lg:mr-6 rounded-2xl glass-light border border-accent/[0.06] group hover:border-accent/[0.12] hover:shadow-[0_0_40px_rgba(0,102,255,0.06)] transition-all duration-500"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-body font-medium tracking-[0.2em] uppercase">
                About
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold tracking-tight mb-8">
              Who I <span className="gradient-text">Am</span>
            </h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[0.95rem] md:text-base text-foreground/80 font-body font-light leading-relaxed mb-5"
            >
              I am <GlowKeyword>Abinash Behera</GlowKeyword> — a <GlowKeyword>Full Stack Developer</GlowKeyword> building production-ready web applications that solve real-world problems combining scalable backend systems, intuitive frontends, and modern tools like MERN and Next.js, with a strong focus on performance ,  security and usability.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[0.95rem] md:text-base text-foreground/80 font-body font-light leading-relaxed mb-8"
            >
             I design end-to-end, production-ready systems that turn data into actionable insights. My work spans scalable backend services, intelligent data pipelines, AI-driven workflows, and interactive dashboards that help teams make informed decisions.
            </motion.p>

            {/* Intersection Areas */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2.5 mb-8"
            >
              <p className="text-xs text-accent font-body font-medium tracking-[0.15em] uppercase mb-3">
                Where I Operate
              </p>
              {intersectionAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                  className="flex items-center gap-3 group/area"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover/area:scale-150 transition-transform duration-300" />
                  <span className="text-foreground/70 font-body text-sm group-hover/area:text-foreground transition-colors duration-300">
                    {area}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing statement */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-base md:text-lg font-heading font-semibold text-foreground/90 leading-snug"
            >
              I am not just building tools —{" "}
              <span className="gradient-text-accent">
                I am engineering decision-making systems.
              </span>
            </motion.p>
          </motion.div>

          {/* RIGHT — My Goal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 md:p-10 lg:ml-6 rounded-2xl glass-light border border-accent/[0.06] group hover:border-accent/[0.12] hover:shadow-[0_0_40px_rgba(0,102,255,0.06)] transition-all duration-500"
          >
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-accent/15 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-accent/15 rounded-bl-2xl" />

            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-body font-medium tracking-[0.2em] uppercase">
                Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold tracking-tight mb-8">
              My <span className="gradient-text">Goal</span>
            </h2>

            {/* Vision statement */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[0.95rem] md:text-base text-foreground/80 font-body font-light leading-relaxed mb-7"
            >
              My goal is to grow as a <GlowKeyword>Full Stack Developer</GlowKeyword> by building production-ready applications that solve real-world problems, while continuously improving my skills in system design, performance, and scalable architectures.
            </motion.p>

            {/* Bullets */}
            <div className="space-y-3 mb-8">
              {goalBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.07 }}
                  className="flex items-start gap-3 group/item"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                  <span className="text-foreground/70 font-body text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="pt-6 border-t border-white/5"
            >
              <p className="text-base md:text-lg font-heading font-bold text-foreground/90 leading-snug mb-1.5">
               Turning AI into real, scalable systems.
              </p>
              <p className="text-base md:text-lg font-heading font-semibold gradient-text-accent leading-snug">
                I build the systems that turn ideas into reliable, real-world products.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}

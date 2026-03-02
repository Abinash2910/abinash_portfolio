"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 ${className}`}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

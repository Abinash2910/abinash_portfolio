"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
          </div>

          {/* Logo / Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* MIKEY Logo */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/logo.png"
                alt="MIKEY Logo"
                width={96}
                height={96}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Name */}
            <motion.div
              className="text-2xl md:text-3xl font-heading font-bold tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-white">ABINASH </span>
              <span className="text-accent">BEHERA</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-muted text-sm tracking-[0.3em] uppercase font-body mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-graphite rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            <motion.span
              className="text-muted/60 text-xs mt-3 font-body tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

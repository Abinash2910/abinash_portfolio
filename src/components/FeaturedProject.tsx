"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineClock } from "react-icons/hi";

const predictions = [
  { label: "Scope Creep", risk: 73, color: "from-red-500 to-orange-500" },
  { label: "Unrealistic Deadlines", risk: 58, color: "from-amber-500 to-yellow-500" },
  { label: "Budget Overruns", risk: 42, color: "from-blue-500 to-cyan-500" },
  { label: "Feature Explosion", risk: 85, color: "from-purple-500 to-pink-500" },
  { label: "Developer Burnout", risk: 67, color: "from-rose-500 to-red-500" },
];

const chartData = [35, 48, 52, 65, 72, 68, 75, 82, 78, 85, 90, 88];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const roadmap = [
  { task: "Core Risk Engine", status: "done" },
  { task: "Scope Creep Detection", status: "done" },
  { task: "Budget Prediction Module", status: "progress" },
  { task: "Burnout Index Tracker", status: "progress" },
  { task: "Dashboard UI v1", status: "pending" },
  { task: "Studio Integration API", status: "pending" },
];

function RiskMeter({ label, risk, color, delay }: { label: string; risk: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-foreground/70">{label}</span>
        <span className="text-sm font-heading font-bold text-white">{risk}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${risk}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function MiniChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const maxVal = Math.max(...chartData);

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex items-end justify-between h-32 gap-1.5">
        {chartData.map((val, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={isInView ? { height: `${(val / maxVal) * 100}%` } : {}}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/40 to-accent/80 relative group cursor-default"
          >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-surface text-xs text-accent font-body rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {val}%
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between">
        {months.map((m) => (
          <span key={m} className="text-[10px] text-muted/40 font-body flex-1 text-center">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

}
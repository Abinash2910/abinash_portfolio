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

  // return (
  //   <section className="relative py-24 md:py-32 overflow-hidden">
  //     {/* Background glow */}
  //     <div className="absolute inset-0">
  //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px]" />
  //     </div>

  //     <div className="max-w-7xl mx-auto section-padding relative z-10" ref={ref}>
  //       {/* Section Label + In Production Badge */}
  //       <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
  //         <motion.div
  //           initial={{ opacity: 0, x: -30 }}
  //           animate={isInView ? { opacity: 1, x: 0 } : {}}
  //           transition={{ duration: 0.6 }}
  //           className="inline-flex items-center gap-3"
  //         >
  //           <span className="w-12 h-[2px] bg-accent" />
  //           <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
  //             Flagship Product
  //           </span>
  //         </motion.div>

  //         {/* In Production Badge */}
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.8 }}
  //           animate={isInView ? { opacity: 1, scale: 1 } : {}}
  //           transition={{ duration: 0.5, delay: 0.2 }}
  //           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20"
  //         >
  //           <HiOutlineClock className="w-4 h-4 text-amber-400" />
  //           <span className="text-xs font-body font-semibold text-amber-400 tracking-wider uppercase">
  //             In Production — Not Yet Released
  //           </span>
  //         </motion.div>
  //       </div>

  //       <motion.h2
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.7, delay: 0.1 }}
  //         className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4"
  //       >
  //         AI Game Scope &<br />
  //         <span className="gradient-text">Risk Analyzer</span>
  //       </motion.h2>

  //       <motion.p
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6, delay: 0.2 }}
  //         className="text-muted font-body text-lg max-w-3xl mb-16"
  //       >
  //         AI-powered production intelligence system designed specifically for game studios.
  //         Predicts scope creep, unrealistic deadlines, budget overruns, feature explosion,
  //         and developer burnout risk.
  //       </motion.p>

  //       {/* Dashboard Mockup */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 40 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.8, delay: 0.3 }}
  //         className="relative rounded-2xl border border-white/[0.06] overflow-hidden bg-surface"
  //       >
  //         {/* Window bar */}
  //         <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04] bg-surface-light">
  //           <div className="flex items-center gap-2">
  //             <div className="w-3 h-3 rounded-full bg-red-500/60" />
  //             <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
  //             <div className="w-3 h-3 rounded-full bg-green-500/60" />
  //           </div>
  //           <span className="text-xs text-muted/40 font-body">AI Game Scope Analyzer — Dashboard</span>
  //           <span className="px-2.5 py-0.5 text-[10px] text-amber-400/70 bg-amber-400/5 border border-amber-400/10 rounded-full font-body">
  //             Preview Build
  //           </span>
  //         </div>

  //         <div className="p-6 md:p-8 lg:p-10">
  //           {/* Top stats row */}
  //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  //             {[
  //               { label: "Overall Risk Score", value: "72", unit: "/100", status: "High", statusColor: "text-red-400 bg-red-400/10" },
  //               { label: "Sprint Velocity", value: "84", unit: "%", status: "Good", statusColor: "text-green-400 bg-green-400/10" },
  //               { label: "Scope Deviation", value: "+23", unit: "%", status: "Warning", statusColor: "text-amber-400 bg-amber-400/10" },
  //               { label: "Team Health", value: "61", unit: "/100", status: "Monitor", statusColor: "text-blue-400 bg-blue-400/10" },
  //             ].map((stat, i) => (
  //               <motion.div
  //                 key={stat.label}
  //                 initial={{ opacity: 0, y: 20 }}
  //                 animate={isInView ? { opacity: 1, y: 0 } : {}}
  //                 transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
  //                 className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
  //               >
  //                 <p className="text-xs text-muted font-body mb-2">{stat.label}</p>
  //                 <div className="flex items-baseline gap-1">
  //                   <span className="text-2xl md:text-3xl font-heading font-bold text-white">{stat.value}</span>
  //                   <span className="text-sm text-muted font-body">{stat.unit}</span>
  //                 </div>
  //                 <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-body font-medium ${stat.statusColor}`}>
  //                   {stat.status}
  //                 </span>
  //               </motion.div>
  //             ))}
  //           </div>

  //           <div className="grid lg:grid-cols-2 gap-8">
  //             {/* Left: Risk meters */}
  //             <motion.div
  //               initial={{ opacity: 0, x: -20 }}
  //               animate={isInView ? { opacity: 1, x: 0 } : {}}
  //               transition={{ duration: 0.6, delay: 0.6 }}
  //               className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]"
  //             >
  //               <h3 className="text-sm font-heading font-semibold text-white mb-1">
  //                 AI Risk Predictions
  //               </h3>
  //               <p className="text-xs text-muted font-body mb-6">
  //                 Real-time risk analysis based on project telemetry
  //               </p>
  //               <div className="space-y-5">
  //                 {predictions.map((p, i) => (
  //                   <RiskMeter key={p.label} {...p} delay={0.8 + i * 0.1} />
  //                 ))}
  //               </div>
  //             </motion.div>

  //             {/* Right: Chart + AI Panel */}
  //             <div className="space-y-6">
  //               <motion.div
  //                 initial={{ opacity: 0, x: 20 }}
  //                 animate={isInView ? { opacity: 1, x: 0 } : {}}
  //                 transition={{ duration: 0.6, delay: 0.7 }}
  //                 className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]"
  //               >
  //                 <h3 className="text-sm font-heading font-semibold text-white mb-1">
  //                   Scope Trend Analysis
  //                 </h3>
  //                 <p className="text-xs text-muted font-body mb-6">
  //                   Monthly scope deviation percentage
  //                 </p>
  //                 <MiniChart />
  //               </motion.div>

  //               {/* AI Prediction Panel */}
  //               <motion.div
  //                 initial={{ opacity: 0, x: 20 }}
  //                 animate={isInView ? { opacity: 1, x: 0 } : {}}
  //                 transition={{ duration: 0.6, delay: 0.9 }}
  //                 className="p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/[0.02] border border-accent/10"
  //               >
  //                 <div className="flex items-center gap-2 mb-3">
  //                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
  //                   <h3 className="text-sm font-heading font-semibold text-accent">
  //                     AI Prediction Engine
  //                   </h3>
  //                 </div>
  //                 <p className="text-sm text-foreground/60 font-body leading-relaxed mb-4">
  //                   Based on current velocity and scope expansion rate, the project has a
  //                   <span className="text-red-400 font-medium"> 73% probability</span> of
  //                   missing the Q3 deadline. Recommend reducing feature scope by 15% or
  //                   extending timeline by 3 weeks.
  //                 </p>
  //                 <div className="flex items-center gap-3">
  //                   <span className="px-3 py-1 text-xs text-accent bg-accent/10 rounded-full font-body">
  //                     Confidence: 89%
  //                   </span>
  //                   <span className="px-3 py-1 text-xs text-muted bg-white/5 rounded-full font-body">
  //                     Updated 2h ago
  //                   </span>
  //                 </div>
  //               </motion.div>
  //             </div>
  //           </div>

  //           {/* Feature Roadmap */}
  //           <motion.div
  //             initial={{ opacity: 0, y: 20 }}
  //             animate={isInView ? { opacity: 1, y: 0 } : {}}
  //             transition={{ duration: 0.6, delay: 1 }}
  //             className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]"
  //           >
  //             <h3 className="text-sm font-heading font-semibold text-white mb-1">
  //               Feature Roadmap
  //             </h3>
  //             <p className="text-xs text-muted font-body mb-5">
  //               Current development progress
  //             </p>
  //             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  //               {roadmap.map((item) => (
  //                 <div
  //                   key={item.task}
  //                   className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.03]"
  //                 >
  //                   {item.status === "done" && (
  //                     <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
  //                       <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  //                       </svg>
  //                     </div>
  //                   )}
  //                   {item.status === "progress" && (
  //                     <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
  //                       <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
  //                     </div>
  //                   )}
  //                   {item.status === "pending" && (
  //                     <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
  //                       <div className="w-2 h-2 rounded-full bg-muted/30" />
  //                     </div>
  //                   )}
  //                   <span className={`text-xs font-body ${
  //                     item.status === "done" ? "text-foreground/60" :
  //                     item.status === "progress" ? "text-amber-300/80" :
  //                     "text-muted/50"
  //                   }`}>
  //                     {item.task}
  //                   </span>
  //                 </div>
  //               ))}
  //             </div>
  //           </motion.div>
  //         </div>
  //       </motion.div>

  //       {/* Bottom label */}
  //       <motion.p
  //         initial={{ opacity: 0 }}
  //         animate={isInView ? { opacity: 1 } : {}}
  //         transition={{ delay: 1.2, duration: 0.6 }}
  //         className="text-center text-sm text-muted/40 font-body mt-8"
  //       >
  //         Concept Dashboard UI — AI Game Scope & Risk Analyzer — Currently In Production
  //       </motion.p>
  //     </div>
  //   </section>
  // );
}
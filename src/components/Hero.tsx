// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import gsap from "gsap";

// export default function Hero() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const portraitRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);
//   const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

//   useEffect(() => {
//     if (!portraitRef.current) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       const { innerWidth, innerHeight } = window;
//       const x = (clientX / innerWidth - 0.5) * 20;
//       const y = (clientY / innerHeight - 0.5) * 20;

//       gsap.to(portraitRef.current, {
//         x,
//         y,
//         duration: 1,
//         ease: "power2.out",
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleScroll = (href: string) => {
//     const el = document.querySelector(href);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background layer with blur */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{ y: bgParallaxY }}
//       >
//         {/* Gradient background simulating outdoor depth */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a15] via-[#050510] to-background" />
//         <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-accent/3" />

//         {/* Radial glow spots */}
//         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[100px]" />
//       </motion.div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 z-[1]" />

//       {/* Main content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
//         style={{ opacity, scale }}
//       >
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
//           {/* Left: Text Content */}
//           <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
//             {/* Overline */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 2.0, duration: 0.6 }}
//               className="inline-flex items-center gap-2 mb-6"
//             >
//               <span className="w-8 h-[2px] bg-accent" />
//               <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
//                 AI Engineer
//               </span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-6"
//             >
//               <span className="block text-white">Ragul</span>
//               <span className="block gradient-text">Priyan M</span>
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.5, duration: 0.6 }}
//               className="text-lg md:text-xl text-muted font-body font-light max-w-xl mb-4 mx-auto lg:mx-0"
//             >
//               AI Engineer | Production Intelligence Systems Builder
//             </motion.p>

//             {/* Tagline - no dot at end */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.7, duration: 0.6 }}
//               className="text-base md:text-lg text-accent/80 font-body italic max-w-lg mb-10 mx-auto lg:mx-0"
//             >
//               &ldquo;Designing AI Systems That Predict Risk Before It Happens&rdquo;
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 2.9, duration: 0.6 }}
//               className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
//             >
//               <button
//                 onClick={() => handleScroll("#projects")}
//                 className="group relative px-8 py-4 bg-accent text-white font-heading font-semibold text-sm tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.3)]"
//               >
//                 <span className="relative z-10">View Projects</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>

//               <button
//                 onClick={() => handleScroll("#contact")}
//                 className="group relative px-8 py-4 font-heading font-semibold text-sm tracking-wider rounded-xl border border-white/10 text-white/80 hover:text-white transition-all duration-300 hover:border-accent/30 hover:bg-accent/5"
//               >
//                 Contact Me
//                 <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
//                   &rarr;
//                 </span>
//               </button>
//             </motion.div>
//           </div>

//           {/* Right: Portrait */}
//           <motion.div
//             className="flex-1 flex justify-center order-1 lg:order-2 relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 2.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             style={{ y: parallaxY }}
//           >
//             <div ref={portraitRef} className="relative">
//               {/* Glow behind portrait */}
//               <div className="absolute inset-0 -m-8 bg-accent/10 rounded-full blur-[80px] animate-glow-pulse" />

//               {/* Animated gradient border ring */}
//               <div className="relative p-1 rounded-full">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-light to-blue-400 opacity-40 blur-sm animate-gradient-border bg-[length:300%_300%]" />
//                 <div className="absolute inset-[1px] rounded-full bg-background" />

//                 {/* Portrait image */}
//                 <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden animate-float">
//                   <Image
//                     src="/images/hero-portrait.png"
//                     alt="Ragul Priyan M"
//                     fill
//                     className="object-cover object-top scale-110"
//                     priority
//                     sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
//                   />
//                 </div>
//               </div>

//               {/* Floating accent dots */}
//               <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-accent/60 animate-float" style={{ animationDelay: "1s" }} />
//               <div className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-accent-light/40 animate-float" style={{ animationDelay: "2s" }} />
//               <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "3s" }} />
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 3.5, duration: 0.8 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
//       >
//         <span className="text-muted/40 text-xs font-body tracking-[0.3em] uppercase">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
//         >
//           <div className="w-1 h-2 rounded-full bg-accent/60" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }








































"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    if (!portraitRef.current) return;

    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to(portraitRef.current, {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgParallaxY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a15] via-[#050510] to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/3 via-transparent to-accent/3" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[100px]" />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
        style={{ opacity, scale }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-body font-medium tracking-[0.2em] uppercase">
                Full Stack Developer
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.9] mb-6"
            >
              <span className="block text-white">Abinash</span>
              <span className="block gradient-text">Behera</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted max-w-xl mb-4 mx-auto lg:mx-0"
            >
              Full Stack Developer | MERN & Next.js
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.6 }}
              className="text-base md:text-lg text-accent/80 italic max-w-lg mb-10 mx-auto lg:mx-0"
            >
              &ldquo;Building Fast, Scalable & User-Friendly Web Applications&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
    <button
  onClick={() => handleScroll("#projects")}
  className="px-8 py-4 bg-accent text-white rounded-xl font-semibold transition-colors duration-300 hover:bg-accent/80"
>
  View Projects
</button>





              

              <button
  onClick={() => handleScroll("#contact")}
  className="group px-8 py-4 border border-white/10 rounded-xl text-white/80 hover:text-white transition flex items-center gap-2">
  Contact Me
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>

            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center order-1 lg:order-2"
            style={{ y: parallaxY }}
          >
            <div ref={portraitRef} className="relative">
              <div className="absolute inset-0 -m-8 bg-accent/10 rounded-full blur-[80px]" />

              <div className="relative p-1 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-blue-400 opacity-40 blur-sm" />
                <div className="absolute inset-[1px] rounded-full bg-background" />

                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden">
                  <Image
                    src="/images/hero-portrait.png"
                    alt="Abinash Behera"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
                  <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-accent/60 animate-float" style={{ animationDelay: "1s" }} />
                  <div className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-accent-light/40 animate-float" style={{ animationDelay: "2s" }} />
                  <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "3s" }} />
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-muted/40 text-xs font-body tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

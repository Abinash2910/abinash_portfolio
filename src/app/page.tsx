"use client";

import { Suspense, lazy } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutGoal from "@/components/AboutGoal";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen noise-bg">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="relative z-[2]">
        <Hero />

        {/* Divider */}
        <div className="relative h-px max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <AboutGoal />

        <div className="relative h-px max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <Skills />

        <div className="relative h-px max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <Projects />

        <FeaturedProject />

        <div className="relative h-px max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        <Contact />

        <Footer />
      </div>
    </main>
  );
}

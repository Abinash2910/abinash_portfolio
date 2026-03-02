"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaGithub,FaEnvelope } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaEnvelope,
    href: "mailto:beheraabinash634@gmail.com",
    label: "Email",
    hoverColor: "hover:text-blue-400 hover:shadow-blue-400/30",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917609025240",
    label: "WhatsApp",
    hoverColor: "hover:text-green-400 hover:shadow-green-400/30",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/abinashbehera01/",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400 hover:shadow-blue-400/30",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Abinash2910",
    label: "GitHub",
    hoverColor: "hover:text-white hover:shadow-white/20",
  },


];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-xl py-2.5 navbar-border-glow"
            : "bg-transparent backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo + Brand */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="relative group flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow behind logo */}
            <div className="absolute -inset-3 bg-accent/[0.07] rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            <Image
              src="/images/logo.png"
              alt="MIKEY Logo"
              width={120}
              height={120}
              className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              style={{ width: 48, height: 48 }}
              priority
            />

            {/* Brand text */}
            <div className="hidden md:flex flex-col relative z-10">
              <span className="text-[0.8rem] font-heading font-bold tracking-[0.18em] uppercase gradient-text-accent leading-tight">
                ABINASH BEHERA
              </span>
              <span className="text-[0.6rem] font-body text-muted/60 tracking-[0.25em] uppercase">
                Full Stack Developer
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent/[0.08] rounded-lg border border-accent/[0.1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`relative p-2.5 text-muted transition-all duration-300 rounded-lg hover:scale-125 ${social.hoverColor} hover:shadow-lg hover:bg-white/5`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-center py-3 text-lg font-heading font-medium transition-colors rounded-xl ${
                    activeSection === link.href.replace("#", "")
                      ? "text-accent bg-accent/5"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 text-muted rounded-xl transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

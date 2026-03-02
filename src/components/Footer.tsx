"use client";

import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram,FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  {
  icon: FaEnvelope,
  href: "mailto:beheraabinash634@gmail.com",
  label: "Email",
  hoverColor: "hover:text-blue-400 hover:shadow-blue-400/30",
},

  {
    icon: FaWhatsapp,
    href: "https://wa.me/916372577574",
    label: "WhatsApp",
    hoverColor: "hover:text-green-400 hover:shadow-green-400/20",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/abinashbehera01/",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400 hover:shadow-blue-400/20",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Abinash2910",
    label: "GitHub",
    hoverColor: "hover:text-white hover:shadow-white/20",
  },
  {
    icon: FaInstagram,
      href: "https://www.instagram.com/abinashbehera__10/?hl=en",
      label: "Instagram",
      hoverColor: "hover:text-pink-400 hover:shadow-pink-400/30",
  },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="MIKEY Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-sm text-muted font-body">
              &copy; {new Date().getFullYear()} Abinash Behera
            </span>
          </div>

          {/* Social Icons - bigger */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2.5 text-muted rounded-lg transition-all duration-300 hover:scale-125 hover:bg-white/5 hover:shadow-lg ${social.hoverColor}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Attribution */}
          <p className="text-sm text-muted/40 font-body">
            Code. Create. Innovate.
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Abinash Behera | Full Stack Developer | MERN & Next.js Specialist",
  description:
    "Abinash Behera is a Full Stack Web Developer specializing in MERN Stack and Next.js. Experienced in building scalable web applications including stock trading platforms, video conferencing apps, and AI-based chat systems.",
  keywords: [
    "Abinash Behera",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "AWS Deployment",
    "Real-time Web Applications",
    "AI Chat Application",
  ],
  authors: [{ name: "Abinash Behera" }],
  openGraph: {
    title: "Abinash Behera | Full Stack Developer",
    description:
      "MERN Stack & Next.js Developer Portfolio.",
    url: "http://localhost:3000",
    siteName: "Abinash Behera — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-portrait.png",
        width: 800,
        height: 800,
        alt: "Abinash Behera — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinash Behera | Full Stack Developer",
    description:
      "MERN Stack & Next.js Developer Portfolio.",
    images: ["/images/hero-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

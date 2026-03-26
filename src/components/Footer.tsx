"use client";

import { Mail, ShieldAlert } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-alt-bg border-t border-slate-300 dark:border-white/10 py-12 relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#home" className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-6 h-6 text-primary" />
            <span className="font-heading font-bold text-xl tracking-tighter text-slate-900 dark:text-white uppercase">
              ARHAM <span className="text-primary">KHAN</span>
            </span>
          </Link>
          <p className="text-foreground text-sm text-center md:text-left">
            Cybersecurity Specialist. Protecting digital ecosystems.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/arham-khan-301435281/" target="_blank" className="p-2 bg-background border border-slate-300 dark:border-white/5 rounded-md text-foreground hover:text-primary hover:border-primary/50 transition">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/Arhaam1khan" target="_blank" className="p-2 bg-background border border-slate-300 dark:border-white/5 rounded-md text-foreground hover:text-primary hover:border-primary/50 transition">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="mailto:khan19arham@gmail.com" className="p-2 bg-background border border-slate-300 dark:border-white/5 rounded-md text-foreground hover:text-primary hover:border-primary/50 transition">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-slate-300 dark:border-white/5 text-center text-xs text-foreground max-w-7xl mx-auto px-4">
         &copy; {new Date().getFullYear()} Arham Khan. Designed & Developed with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}

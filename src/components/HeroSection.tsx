"use client";

import { motion } from "framer-motion";
import { Mail, Terminal, FileText, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex text-center lg:text-left items-center justify-center pt-20 overflow-hidden cyber-grid text-slate-900 dark:text-white">
      {/* Background glowing orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 lg:items-start items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium font-inter">
              <Terminal className="w-4 h-4" />
              <span>Cybersecurity Specialist</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight">
              <span className="text-2xl lg:text-3xl text-foreground font-mono font-medium block mb-2">root@arham:~#</span>
              <span className="text-primary glow-text">Arham Khan</span>
            </h1>

            <p className="text-lg text-foreground max-w-lg">
              B.Tech CSE Student focused on securing digital landscapes. Ready to combat threats, analyze malware, and build robust architectures.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="#projects"
                className="px-6 py-3 bg-primary text-black font-semibold rounded-md hover:bg-primary/90 transition glow-box"
              >
                View My Work
              </Link>
              <Link
                href="mailto:khan19arham@gmail.com"
                className="px-6 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex gap-4 pt-6">
              <Link href="https://www.linkedin.com/in/arham-khan-301435281/" target="_blank" className="p-2 border border-foreground/30 rounded-md text-foreground hover:text-primary hover:border-primary transition" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Arhaam1khan" target="_blank" className="p-2 border border-foreground/30 rounded-md text-foreground hover:text-primary hover:border-primary transition" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="mailto:khan19arham@gmail.com" className="p-2 border border-foreground/30 rounded-md text-foreground hover:text-primary hover:border-primary transition" aria-label="Email">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://drive.google.com/file/d/1VTzM_9vdYltNNIV8B9f3OEREkqHZ5xM0/view?usp=sharing" target="_blank" className="p-2 border border-foreground/30 rounded-md text-foreground hover:text-primary hover:border-primary transition" aria-label="View CV">
                <FileText className="w-5 h-5" />
              </Link>
              <Link href="https://drive.google.com/uc?export=download&id=1VTzM_9vdYltNNIV8B9f3OEREkqHZ5xM0" target="_blank" className="p-2 border border-foreground/30 rounded-md text-foreground hover:text-primary hover:border-primary transition" aria-label="Download CV">
                <Download className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-slate-100 dark:bg-[#0a0f18] rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 glow-box font-mono text-sm text-primary/100 dark:text-primary/80">
              <div className="flex items-center px-4 py-3 bg-slate-200 dark:bg-white/5 border-b border-slate-300 dark:border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto text-xs text-foreground/50 tracking-wider">bash - root@shield</div>
              </div>
              <div className="p-6 space-y-4 text-left">
                <p><span className="text-slate-900 dark:text-white font-bold">&gt;</span> <span className="text-primary">systemctl status</span> security-protocols</p>
                <p className="text-green-600 dark:text-green-400 opacity-90">[ OK ] Local defenses active.</p>
                <p className="text-green-600 dark:text-green-400 opacity-90">[ OK ] Threat monitoring online.</p>
                <p><span className="text-slate-900 dark:text-white font-bold">&gt;</span> <span className="text-primary">whoami</span></p>
                <p className="text-slate-800 dark:text-foreground">Arham Khan - Cybersecurity Student</p>
                <p><span className="text-slate-900 dark:text-white font-bold">&gt;</span> <span className="text-primary">cat</span> mission_statement.txt</p>
                <p className="text-slate-800 dark:text-foreground leading-relaxed">"To engineer robust monitoring solutions, analyze malware behavior, and safeguard critical infrastructure against emerging cyber threats."</p>
                <p className="animate-pulse"><span className="text-slate-900 dark:text-white font-bold">&gt;</span> _</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

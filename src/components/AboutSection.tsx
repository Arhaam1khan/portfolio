"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Shield, User, Download } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    items: ["C/C++", "Python"],
  },
  {
    category: "Tools & Platforms",
    icon: <Shield className="w-6 h-6 text-primary" />,
    items: [
      "Nmap", "Wireshark", "Masscan", "Nessus", "Kali Linux",
      "macOS", "Windows", "ELK Stack", "Sysmon", "Metasploit",
      "Burp Suite", "SQLmap", "Git"
    ],
  },
  {
    category: "Soft Skills",
    icon: <User className="w-6 h-6 text-primary" />,
    items: ["Problem-Solving", "Team Player", "Adaptability"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-alt-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">About Me</h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-box"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-foreground text-lg leading-relaxed"
          >
            <p>
              I am <span className="text-primary font-bold">Arham Khan</span>, a passionate Cybersecurity Specialist and B.Tech CSE student at Lovely Professional University. My journey in the tech world revolves around understanding vulnerabilities, analyzing malware behavior, and engineering robust threat monitoring solutions.
            </p>
            <p>
              With strong hands-on experience in the ELK stack, network scanning, and Python scripting for security analysis, I bridge the gap between theoretical knowledge and practical application. I am dedicated to continuous learning, securing systems, and staying ahead of modern cyber threats.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="p-4 border border-slate-300 dark:border-white/10 rounded-xl bg-background flex flex-col justify-center items-center">
                <span className="text-3xl font-heading font-bold text-slate-900 dark:text-white">2+</span>
                <span className="text-sm">Major Projects</span>
              </div>
              <div className="p-4 border border-slate-300 dark:border-white/10 rounded-xl bg-background flex flex-col justify-center items-center">
                <span className="text-3xl font-heading font-bold text-slate-900 dark:text-white">3</span>
                <span className="text-sm">Certifications</span>
              </div>
              <a
                href="https://drive.google.com/uc?export=download&id=1VTzM_9vdYltNNIV8B9f3OEREkqHZ5xM0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-primary bg-primary/10 rounded-xl text-primary font-bold flex flex-col justify-center items-center hover:bg-primary hover:text-black transition-all glow-box"
              >
                <Download className="w-6 h-6 mb-2" />
                <span className="text-sm">Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <div key={skill.category} className="bg-background border border-slate-300 dark:border-white/5 p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-primary/50 transition-colors">
                {/* Subtle cyber background element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition duration-500"></div>
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="p-3 bg-alt-bg rounded-lg border border-primary/20 text-primary">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{skill.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-alt-bg text-foreground text-sm rounded-full border border-slate-200 dark:border-white/10 flex items-center gap-2 transition hover:text-slate-900 dark:hover:text-white hover:border-primary border-transparent"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

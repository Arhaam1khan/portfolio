"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Smartphone, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Air-Gapped Visual Transfer",
    timeline: "Windows Release",
    description:
      "A desktop transfer workflow that packages a file into a ZIP payload, turns it into QR frames, and lets the recipient reconstruct it with no internet dependency. The current public release is the Windows app, while macOS, iOS, and Android support are planned for future milestones.",
    icon: <Activity className="w-10 h-10 text-primary mb-6" />,
    tech: ["Windows", "Python", "QR Transfer", "Zip Payload"],
    githubUrl: "https://github.com/Arhaam1khan/air-app",
    releaseUrl: "https://github.com/Arhaam1khan/air-app/releases/latest",
  },
  {
    title: "Roadmap: Cross-Platform Expansion",
    timeline: "Coming Soon",
    description:
      "The next phase is bringing the same offline-transfer pattern to broader device coverage. The core visual exchange model is already verified, and the roadmap targets macOS, iOS, and Android support with the same QR-driven safety model.",
    icon: <Smartphone className="w-10 h-10 text-primary mb-6" />,
    tech: ["macOS", "iOS", "Android", "Roadmap"],
    githubUrl: "https://github.com/Arhaam1khan/air-app",
    releaseUrl: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background cyber-grid relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Featured Project</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Air-Gapped Visual Transfer</h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-box"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-alt-bg border border-slate-300 dark:border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  {project.icon}
                  <span className="text-xs font-mono font-medium tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    {project.timeline}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-foreground text-sm lg:text-base leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-col mt-auto gap-4">
                <div className="w-full h-px bg-slate-300 dark:bg-white/5 mb-2"></div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold text-slate-700 dark:text-white/70 bg-background px-3 py-1 rounded border border-slate-300 dark:border-white/10 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.releaseUrl && (
                    <a
                      href={project.releaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-background border border-slate-300 dark:border-white/10 hover:border-primary/50 text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_-3px_var(--glow)]"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="font-bold text-sm tracking-wide">View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

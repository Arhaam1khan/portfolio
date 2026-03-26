"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Scroll } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech Computer Science and Engineering",
      date: "Aug 2023 - Present",
      grade: "CGPA: 7.62",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
    },
    {
      institution: "Ryan International School",
      degree: "Intermediate (12th Grade)",
      date: "2021 - 2022",
      grade: "78%",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      institution: "Ryan International School",
      degree: "Matriculation (10th Grade)",
      date: "2019 - 2020",
      grade: "77%",
      icon: <Scroll className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="education" className="py-24 bg-background cyber-grid relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Education</h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-box"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-alt-bg border border-slate-300 dark:border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center h-full glow-box overflow-hidden"
            >
               {/* Hover Accent Bar */}
               <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

               <div className="mb-6 p-4 bg-background border border-slate-300 dark:border-white/10 rounded-full group-hover:scale-110 transition-transform">
                  {edu.icon}
               </div>

               <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{edu.institution}</h4>
               
               <p className="text-primary font-medium text-sm mb-4 leading-relaxed font-mono">
                  {edu.degree}
               </p>
               
               <div className="mt-auto space-y-2">
                  <div className="inline-block bg-background px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/5 text-xs font-bold text-foreground tracking-widest uppercase">
                    {edu.date}
                  </div>
                  <div className="text-slate-700 dark:text-white/60 text-sm font-bold">
                     Grade: <span className="text-slate-900 dark:text-white font-mono">{edu.grade}</span>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

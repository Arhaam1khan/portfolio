"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, ExternalLink } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      title: "Ethical Hacking",
      organization: "NPTEL",
      date: "Oct 2025",
      icon: <Award className="w-6 h-6 text-primary" />,
      type: "Certification",
      link: "https://drive.google.com/file/d/1CGiHXrY5h6l_53wWTJ6UH-_dJsh19ZTZ/view?usp=sharing",
    },
    {
      title: "Cyber Security",
      organization: "CipherSchools",
      date: "Jul 2025",
      icon: <Award className="w-6 h-6 text-primary" />,
      type: "Certification",
      link: "https://drive.google.com/file/d/1PSwwwGhEsMXrm44_k4yaPUkAtXXEmjUo/view?usp=sharing",
    },
    {
      title: "Complete Git and GitHub",
      organization: "CipherSchools",
      date: "Jul 2025",
      icon: <Award className="w-6 h-6 text-primary" />,
      type: "Certification",
      link: "https://drive.google.com/file/d/1Tg6tK2I5zssYV6Y1cUWA2j1F78Sy4jO5/view?usp=sharing",
    },
    {
      title: "Global Rank 783rd",
      organization: "Leetcode Biweekly Contest 96",
      date: "Top 3.7% of 21k+ participants",
      icon: <Trophy className="w-6 h-6 text-primary" />,
      type: "Achievement",
    },
    {
      title: "Global Rank 557th",
      organization: "CodeChef Starters 76 Div3",
      date: "Top 14% of 4k+ participants",
      icon: <Medal className="w-6 h-6 text-primary" />,
      type: "Achievement",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-alt-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">Certifications</h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-box"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-300 dark:bg-white/10 md:-translate-x-1/2"></div>
          
          {awards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-alt-bg md:-translate-x-1/2 shadow-[0_0_10px_2px_rgba(41,204,113,0.5)] z-10 transition-transform hover:scale-150"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 flex ${index % 2 === 0 ? "md:pr-12 md:justify-end" : "md:pl-12 md:justify-start"}`}>
                <div className="bg-background border border-slate-300 dark:border-white/5 p-6 rounded-2xl shadow-lg w-full max-w-md hover:border-primary/40 transition glow-box group relative overflow-hidden">
                  {/* Subtle Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10 flex flex-col items-start gap-4">
                     <div className="flex justify-between items-start w-full gap-4">
                        <div className="bg-alt-bg p-3 rounded-xl border border-slate-300 dark:border-white/10">{item.icon}</div>
                        <span className="text-xs font-mono px-3 py-1 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full text-foreground whitespace-nowrap">{item.date}</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">{item.title}</h4>
                        <div className="text-foreground text-sm flex items-center gap-2">
                           <span className="block w-2 h-2 rounded-full bg-primary/50"></span>
                           {item.organization}
                        </div>
                     </div>
                     <div className="flex w-full items-center justify-between mt-2 border-t border-slate-300 dark:border-white/5 pt-3">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70">{item.type}</span>
                       {item.link && (
                         <a
                           href={item.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary hover:text-black transition-all"
                         >
                           View <ExternalLink className="w-3.5 h-3.5" />
                         </a>
                       )}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

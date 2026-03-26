"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const bullets = [
    "Specialized in Threat Monitoring, Malware Analysis & SIEM",
    "Hands-on experience with 2+ real-world security projects",
    "Continuous learner with strong problem-solving skills",
    "Strong foundation in ethical hacking & system defense"
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-alt-bg border border-slate-300 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow behind the container */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column: Text & Bullets */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Opportunity
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Ready to <br />
                <span className="text-primary glow-text">collaborate?</span>
              </h3>
              <p className="text-foreground text-lg mb-8 leading-relaxed">
                I'm actively seeking internship and full-time opportunities where I can apply my cybersecurity expertise and contribute to robust security architectures and innovative projects.
              </p>

              <div className="space-y-4">
                {bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-white/80">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-background border border-slate-300 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="w-7 h-7 text-primary" />
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Send Me a Message</h4>
                </div>
                
                <form className="space-y-6" action="https://formspree.io/f/mjgpkkqn" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-bold tracking-wide text-foreground">Your Name <span className="text-primary">*</span></label>
                      <input type="text" name="name" required placeholder="John Doe" className="w-full bg-alt-bg/60 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-bold tracking-wide text-foreground">Your Email <span className="text-primary">*</span></label>
                      <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-alt-bg/60 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold tracking-wide text-foreground">Subject <span className="text-primary">*</span></label>
                    <input type="text" name="subject" required placeholder="What's this about?" className="w-full bg-alt-bg/60 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm" />
                  </div>
                  
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold tracking-wide text-foreground">Message <span className="text-primary">*</span></label>
                    <textarea rows={4} name="message" required placeholder="Tell me more about your project or idea..." className="w-full bg-alt-bg/60 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none font-mono text-sm"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-black font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300">
                    <Send className="w-5 h-5 -ml-2" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

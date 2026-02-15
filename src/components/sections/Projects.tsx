"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiNextdotjs, SiFastapi, SiDjango, SiTailwindcss, SiTypescript } from "react-icons/si";

const TechIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 20, className: "text-zinc-400 group-hover:text-blue-500 transition-colors" };
  switch (name.toLowerCase()) {
    case "next.js": return <SiNextdotjs {...iconProps} />;
    case "fastapi": return <SiFastapi {...iconProps} />;
    case "django": return <SiDjango {...iconProps} />;
    case "tailwind css": return <SiTailwindcss {...iconProps} />;
    case "typescript": return <SiTypescript {...iconProps} />;
    default: return <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">{name}</span>;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center w-full py-24">
      <motion.h2 
        className="text-4xl font-bold tracking-tighter mb-20 text-center"
        initial={{ opacity: 0, letterSpacing: "-0.05em" }}
        whileInView={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 0.8 }}
      >
        Selected Works.
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-6xl">
        {portfolioData.projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            className="group relative flex flex-col p-8 rounded-[2.5rem] bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ margin: "-50px" }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
              {project.desc}
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              {project.tech.map(t => <TechIcon key={t} name={t} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
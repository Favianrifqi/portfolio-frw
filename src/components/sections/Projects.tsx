"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiNextdotjs, SiFastapi, SiDjango, SiTailwindcss, SiTypescript } from "react-icons/si";

const TechIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 20, className: "text-foreground/50 group-hover:text-primary transition-colors" };
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
    <section id="projects" className="flex flex-col justify-start items-start w-full">
      <div className="mb-16">
        <motion.h2 
          className="text-4xl font-bold tracking-tighter text-foreground font-serif"
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 0.8 }}
        >
          Selected Works.
        </motion.h2>
        <motion.div 
          className="h-[2px] bg-primary mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "40px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.8 }}
        />
      </div>
      
      <div className="flex flex-col gap-16 w-full">
        {portfolioData.projects.map((project, index) => (
          <motion.div 
            key={project.title} 
            className="group relative flex flex-col p-8 rounded-3xl bg-secondary/30 border border-secondary hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden items-start text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ margin: "-50px" }}
          >
            <div className="flex items-center justify-between w-full mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-serif">
                {project.title}
              </h3>
              <div className="p-2 rounded-full bg-background border border-secondary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={18} className="text-foreground group-hover:text-white" />
              </div>
            </div>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {project.desc}
            </p>

            <div className="mt-auto flex flex-wrap justify-start items-center gap-4 pt-6 border-t border-secondary w-full">
              {project.tech.map(t => <TechIcon key={t} name={t} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
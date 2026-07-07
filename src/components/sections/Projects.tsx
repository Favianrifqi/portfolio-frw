"use client";
import React from "react";
import portfolioData from "@/content/data.json";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiNextdotjs, SiFastapi, SiDjango, SiTailwindcss, SiTypescript } from "react-icons/si";

const TechIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 20, className: "text-foreground group-hover:text-foreground transition-colors" };
  switch (name.toLowerCase()) {
    case "next.js": return <SiNextdotjs {...iconProps} />;
    case "fastapi": return <SiFastapi {...iconProps} />;
    case "django": return <SiDjango {...iconProps} />;
    case "tailwind css": return <SiTailwindcss {...iconProps} />;
    case "typescript": return <SiTypescript {...iconProps} />;
    default: return <span className="text-[10px] font-mono uppercase tracking-widest font-bold border border-black px-1">{name}</span>;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-start items-start w-full">
      <div className="mb-8 w-full border-b-2 border-black pb-4 flex items-end justify-between">
        <motion.h2
          className="text-4xl font-bold tracking-tight text-foreground font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Systems & Architecture
        </motion.h2>
        <span className="font-mono text-xs font-bold uppercase hidden md:block">Evidence // Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-4">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="brutalist-card group relative flex flex-col p-6 bg-[#FAFAFA] overflow-hidden items-start text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ margin: "-50px" }}
          >
            <div className="flex items-center justify-between w-full mb-4 border-b-2 border-black pb-4">
              <h3 className="text-xl font-bold tracking-tight text-foreground font-serif">
                {project.title}
              </h3>
              <div className="p-2 border-2 border-black bg-white group-hover:bg-yellow-300 transition-colors duration-200">
                <ArrowUpRight size={18} className="text-foreground" />
              </div>
            </div>

            <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-6">
              {project.desc}
            </p>

            <div className="mt-auto flex flex-wrap justify-start items-center gap-4 w-full bg-white p-3 border-2 border-black">
              <span className="text-[10px] font-bold font-mono">STACK:</span>
              {project.tech.map(t => <TechIcon key={t} name={t} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
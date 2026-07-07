"use client";
import React from "react";
import portfolioData from "@/content/data.json";
import { motion, Variants } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFastapi, SiDjango, SiPostgresql, SiPython, SiGit, SiVercel, SiKali, SiKalilinux } from "react-icons/si";

const TechIcon = ({ name }: { name: string }) => {
  const iconProps = { size: 32, className: "text-black" };
  switch (name.toLowerCase()) {
    case "next.js": return <SiNextdotjs {...iconProps} />;
    case "react": return <SiReact {...iconProps} />;
    case "typescript": return <SiTypescript {...iconProps} />;
    case "tailwind css": return <SiTailwindcss {...iconProps} />;
    case "fastapi": return <SiFastapi {...iconProps} />;
    case "django": return <SiDjango {...iconProps} />;
    case "postgresql": return <SiPostgresql {...iconProps} />;
    case "python": return <SiPython {...iconProps} />;
    case "git": return <SiGit {...iconProps} />;
    case "vercel": return <SiVercel {...iconProps} />;
    case "kali linux": return <SiKalilinux {...iconProps} />;
    default: return <span className="font-mono font-bold text-xs">{name}</span>;
  }
};

export default function TechStack() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { 
      opacity: 1, scale: 1, y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <section id="tech" className="flex flex-col justify-start items-start text-left w-full">
      <div className="w-full flex flex-col items-start">
        <div className="mb-8 w-full border-b-2 border-black pb-4 flex items-end justify-between">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-foreground font-serif"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Core Tech
          </motion.h2>
          <span className="font-mono text-xs font-bold uppercase hidden md:block">Stack // Arsenal</span>
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-6 mt-4"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {portfolioData.techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.15, rotate: (index % 2 === 0 ? 5 : -5), boxShadow: "4px 4px 0px 0px #000" }}
              className="brutalist-card w-20 h-20 flex flex-col items-center justify-center cursor-pointer bg-[#FAFAFA] border-2 border-black group"
              title={tech}
            >
              <TechIcon name={tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
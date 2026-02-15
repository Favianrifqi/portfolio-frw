"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion, Variants } from "framer-motion"; // Tambahkan Variants di sini

export default function TechStack() {
  // Menambahkan tipe : Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };

  // Menambahkan tipe : Variants
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", // Sekarang TS tahu ini adalah AnimationGeneratorType
        stiffness: 260, 
        damping: 20 
      }
    }
  };

  return (
    <section id="tech" className="min-h-screen flex flex-col justify-center items-end text-right w-full">
      <div className="w-full max-w-2xl flex flex-col items-end">
        <motion.h2 
          className="text-3xl font-bold tracking-tight border-b-2 border-zinc-200 dark:border-zinc-800 pb-4 mb-12 inline-block pl-12"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tech Stack.
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-end gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {portfolioData.techStack.map((tech) => (
            <motion.span 
              key={tech} 
              variants={item}
              className="px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
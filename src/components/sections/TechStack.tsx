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
    <section id="tech" className="flex flex-col justify-start items-start text-left w-full">
      <div className="w-full flex flex-col items-start">
        <div className="mb-12">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-foreground font-serif"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack.
          </motion.h2>
          <motion.div 
            className="h-[2px] bg-primary mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.8 }}
          />
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-start gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {portfolioData.techStack.map((tech) => (
            <motion.span 
              key={tech} 
              variants={item}
              className="px-6 py-3 rounded-full border border-secondary text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
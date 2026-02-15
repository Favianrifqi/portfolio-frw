"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-start text-left w-full">
      <div className="w-full max-w-2xl">
        <div className="relative inline-block mb-8">
          <motion.h2 
            className="text-3xl font-bold tracking-tight pr-12 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
          >
            About.
          </motion.h2>
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.8 }}
          />
        </div>
        
        <motion.div 
          className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
        >
          <p>{portfolioData.about}</p>
          <p>
            Saat ini saya sedang menempuh studi di <span className="text-zinc-900 dark:text-zinc-100 font-medium">{portfolioData.university}</span> (Semester {portfolioData.semester}), dengan IPK <span className="text-blue-500 font-bold">{portfolioData.gpa}</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex flex-col justify-start items-start text-left w-full">
      <div className="w-full">
        <div className="mb-10">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-foreground font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
          >
            About.
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
          className="text-foreground/80 text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
        >
          <p>{portfolioData.about}</p>
          <p>
            Saat ini saya sedang menempuh studi di <span className="text-foreground font-medium">{portfolioData.university}</span> (Semester {portfolioData.semester}), dengan IPK <span className="text-primary font-bold">{portfolioData.gpa}</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-start items-start text-left w-full pb-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full brutalist-card p-12 bg-white flex flex-col items-center text-center border-t-8 border-t-black"
      >
        <motion.h2 
          className="text-xs font-mono font-bold tracking-[0.4em] uppercase text-foreground mb-4 bg-yellow-300 px-3 py-1 border-2 border-black inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          CONNECT_
        </motion.h2>
        
        <motion.p 
          className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-8 text-foreground font-serif max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Mari bangun arsitektur sistem <br />
          <span className="italic opacity-60 font-sans">yang aman dan terukur.</span>
        </motion.p>

        <motion.a
          href="mailto:rifqi191104vian@gmail.com"
          whileHover={{ y: -4, x: -4, boxShadow: "8px 8px 0px 0px #111111" }}
          className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-mono font-bold tracking-widest uppercase border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
        >
          INITIATE_CONTACT
        </motion.a>
      </motion.div>
    </section>
  );
}
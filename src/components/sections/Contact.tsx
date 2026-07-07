"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-start items-start text-left w-full pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <motion.h2 
          className="text-sm font-bold tracking-[0.4em] uppercase text-primary mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8 text-foreground font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tertarik untuk berkolaborasi? <br />
          <span className="text-foreground/50">Mari ciptakan sesuatu yang luar biasa.</span>
        </motion.p>

        <motion.a
          href="mailto:rifqi191104vian@gmail.com"
          whileHover={{ y: -4 }}
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
        >
          Kirim Pesan
        </motion.a>
      </motion.div>
    </section>
  );
}
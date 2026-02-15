"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center w-full px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <motion.h2 
          className="text-sm font-bold tracking-[0.4em] uppercase text-blue-500 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tertarik untuk berkolaborasi? <br />
          <span className="text-zinc-400">Mari ciptakan sesuatu yang luar biasa.</span>
        </motion.p>

        {/* Logo Sosmed Dipusatkan secara horizontal dan vertikal */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <ContactLink href="mailto:rifqi191104vian@gmail.com" icon={<Mail size={32} />} label="Email" />
          <ContactLink href="https://linkedin.com/in/favianrifqi" icon={<Linkedin size={32} />} label="LinkedIn" />
          <ContactLink href="https://github.com/Favianrifqi" icon={<Github size={32} />} label="GitHub" />
        </div>
      </motion.div>
    </section>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      whileHover={{ y: -8, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group flex flex-col items-center gap-4 text-zinc-500 hover:text-blue-500 transition-all duration-300"
    >
      <div className="p-6 rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all shadow-sm group-hover:shadow-blue-500/20">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </motion.a>
  );
}
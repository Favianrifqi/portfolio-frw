"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col justify-start items-start text-left">
      <motion.p 
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-primary font-medium mb-4 uppercase text-xs tracking-[0.2em]"
      >
        Welcome to my world
      </motion.p>
      
      <div className="overflow-hidden py-2">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground font-serif leading-tight"
        >
          Favian Rifqi <br/> Wibowo
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-foreground/70 text-lg max-w-sm leading-relaxed"
      >
        Informatics Student at UPNVJT. Building scalable web systems like the National Corpus Website.
      </motion.p>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <motion.p 
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-blue-500 font-medium mb-4 uppercase text-xs tracking-[0.2em]"
      >
        Welcome to my world
      </motion.p>
      
      <div className="overflow-hidden py-2">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
        >
          Favian Rifqi Wibowo
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed"
      >
        Informatics Student at UPNVJT. Building scalable web systems like the National Corpus Website.
      </motion.p>
    </section>
  );
}
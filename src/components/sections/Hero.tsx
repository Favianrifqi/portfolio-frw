"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolioData from "@/content/data.json";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const SlotChar = ({ char, delayIndex }: { char: string, delayIndex: number }) => {
  const [display, setDisplay] = useState(char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]);

  useEffect(() => {
    if (char === " ") {
      setDisplay(" ");
      return;
    }
    let iterations = 0;
    const maxIterations = 10 + (delayIndex * 3); // Characters spin longer the further right they are

    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        setDisplay(char);
        clearInterval(interval);
      } else {
        setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)]);
      }
      iterations++;
    }, 40);

    return () => clearInterval(interval);
  }, [char, delayIndex]);

  return <span className="inline-block">{display}</span>;
};

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  const firstName = portfolioData.name.split(" ")[0].toUpperCase();
  const lastName = portfolioData.name.split(" ")[1].toUpperCase();

  return (
    <motion.div
      className="flex flex-col justify-center min-h-[70vh] mt-12 relative"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* DECORATIVE ELEMENTS */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 border-4 border-black border-dashed rounded-full animate-[spin_10s_linear_infinite] opacity-20 hidden md:block"
        variants={item}
      />
      <motion.div
        className="absolute bottom-20 right-20 text-4xl font-black opacity-20 hidden md:block"
        variants={item}
      >
        +++
      </motion.div>

      <motion.div variants={item} className="mb-8">
        <p className="text-xs md:text-sm font-mono uppercase tracking-[0.4em] text-foreground border-l-4 border-black pl-4 font-bold inline-block bg-[#FAFAFA]">
          [ STATUS: ACTIVE // 2026 ]
        </p>
      </motion.div>

      <motion.h1
        className="text-[12vw] sm:text-8xl md:text-[140px] lg:text-[180px] font-bold tracking-tighter text-foreground font-serif mb-8 leading-[0.8] uppercase relative z-10 flex flex-col"
        variants={item}
      >
        {/* SLOT ANIMATION FIRST NAME */}
        <span>
          {firstName.split("").map((char, index) => (
            <SlotChar key={index} char={char} delayIndex={index} />
          ))}
        </span>

        {/* SLOT ANIMATION LAST NAME */}
        <span>
          {lastName.split("").map((char, index) => (
            <SlotChar key={index} char={char} delayIndex={firstName.length + index} />
          ))}
          <motion.span
            className="inline-block w-[10vw] md:w-[80px] h-[10vw] md:h-[120px] bg-yellow-300 ml-4 align-middle mb-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-8 md:items-center mt-8 relative z-10"
        variants={item}
      >
        <h2 className="text-sm md:text-lg font-mono font-bold text-foreground bg-yellow-300 inline-block w-max px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
          {portfolioData.role}
        </h2>
        <p className="text-base md:text-xl font-mono text-foreground/80 leading-relaxed max-w-2xl font-medium border-l-2 border-black/20 pl-6">
          Membangun sistem web berskala. Mengamankan kerentanan. Memadukan engineering dan penetration testing.
        </p>
      </motion.div>
    </motion.div>
  );
}
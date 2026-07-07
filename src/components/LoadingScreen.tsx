"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const RollingChar = ({ char, delayIndex }: { char: string, delayIndex: number }) => {
  const [column, setColumn] = useState<string[]>([]);
  
  useEffect(() => {
    if (char === " " || char === "_") {
      setColumn([char]);
      return;
    }
    // Create a column of random characters, ending with the actual character
    const chars = [];
    const height = 15 + delayIndex * 4; // Subsequent letters have taller columns (spin longer)
    for (let i = 0; i < height - 1; i++) {
      chars.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }
    chars.push(char);
    setColumn(chars);
  }, [char, delayIndex]);

  if (column.length === 0) return <span className="opacity-0">{char}</span>;
  if (char === " " || char === "_") return <span>{char}</span>;

  return (
    <div className="inline-flex h-[1.2em] overflow-hidden leading-[1.2em] align-bottom relative">
      <motion.div
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: `-${(column.length - 1) * 1.2}em` }}
        transition={{ 
          duration: 1.5 + delayIndex * 0.2, // Time to reach the bottom
          ease: [0.1, 0.8, 0.1, 1] // Smooth ease-out
        }}
      >
        {column.map((c, i) => (
          <span key={i} className="h-[1.2em] flex items-center justify-center">{c}</span>
        ))}
      </motion.div>
    </div>
  );
};

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const introText = "MY _PORTOFOLIO";

  useEffect(() => {
    // Total spin animation is about ~4.5 seconds for the last character.
    // We will make the progress bar take exactly 4 seconds, and then wait 1.5 seconds.
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1500); // 1.5s delay after 100% and text settled
          return 100;
        }
        return prev + 2; 
      });
    }, 80); // 50 iterations * 80ms = 4000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#111] text-white flex flex-col items-center justify-center font-mono"
        >
          {/* GIANT ROLLING TEXT */}
          <div className="text-[12vw] sm:text-7xl md:text-[100px] lg:text-[120px] font-bold text-white/90 mb-16 tracking-tighter uppercase text-center flex flex-wrap justify-center gap-y-4 font-serif leading-[1em]">
            {introText.split("").map((char, index) => (
              <RollingChar key={index} char={char} delayIndex={index} />
            ))}
          </div>

          <div className="w-full max-w-md px-8 flex flex-col items-start gap-4">
            <div className="w-full flex justify-between items-end border-b-2 border-white/30 pb-2">
              <span className="text-xs uppercase tracking-widest text-white/50">System Boot // FRW</span>
              <span className="text-2xl font-bold text-yellow-400">{progress}%</span>
            </div>
            
            <div className="w-full h-2 bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <div className="text-xs text-white/50 uppercase tracking-widest mt-4 animate-pulse">
              {progress < 30 && "Decrypting assets..."}
              {progress >= 30 && progress < 70 && "Establishing secure connection..."}
              {progress >= 70 && progress < 100 && "Compiling user interface..."}
              {progress >= 100 && "Access Granted."}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

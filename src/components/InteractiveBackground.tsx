"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  // Cursor tracking untuk pergerakan kabut yang mengikuti mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fisika pegas dibuat sangat lambat (damping tinggi, stiffness rendah)
  // Agar kabut merespon kursor seperti ditiup angin sepoi-sepoi, bukan menempel kaku
  const springX = useSpring(mouseX, { damping: 100, stiffness: 10 });
  const springY = useSpring(mouseY, { damping: 100, stiffness: 10 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fdfdfd] dark:bg-[#050507] transition-colors duration-500">
      
      {/* 1. KABUT UTAMA - KIRI ATAS (Biru Lembut) */}
      <motion.div
        animate={{
          x: ["-10vw", "10vw", "-10vw"],
          y: ["-10vh", "10vh", "-10vh"],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vh] rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-[160px] md:blur-[200px]"
      />

      {/* 2. KABUT KEDUA - KANAN BAWAH (Indigo / Putih Kebiruan) */}
      <motion.div
        animate={{
          x: ["10vw", "-10vw", "10vw"],
          y: ["10vh", "-10vh", "10vh"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vh] rounded-full bg-indigo-300/10 dark:bg-slate-300/10 blur-[160px] md:blur-[200px]"
      />

      {/* 3. KABUT TENGAH - MERATA (Sangat Tipis, Bergerak Memutar Lambat) */}
      <motion.div
        animate={{
          x: ["-5vw", "5vw", "-5vw"],
          y: ["5vh", "-5vh", "5vh"],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[90vw] h-[90vh] rounded-[40%] bg-cyan-200/5 dark:bg-blue-300/5 blur-[180px] md:blur-[250px]"
      />

      {/* 4. KABUT KURSOR - Mengikuti pergerakan mouse dengan sangat halus */}
      <motion.div
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="absolute top-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-white/5 dark:bg-white/5 blur-[150px] md:blur-[200px]"
      />

      {/* LAYER NOISE FILM TEXTURE 
          Rahasia agar gradasinya tidak terlihat "patah-patah" di monitor yang kurang bagus,
          memberikan kesan fisik seperti lensa kamera. Sangat tipis (opacity 2%).
      */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
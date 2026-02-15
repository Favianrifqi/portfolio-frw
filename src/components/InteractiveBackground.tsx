"use client";
import React, { useEffect, useState } from "react"; // FIXED: Menambahkan import React & useState
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  // SETUP CURSOR TRACKING
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fisika pegas agar asap terasa "berat" dan mengalir (liquid)
  const springX = useSpring(mouseX, { damping: 50, stiffness: 30 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Posisi kursor dikurangi setengah ukuran blob (600/2) agar pas di tengah
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fafafa] dark:bg-[#080808] transition-colors duration-500">
      
      {/* LIQUID SMOKE 1: CYAN (Mengikuti Kursor) */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* LIQUID SMOKE 2: MAGENTA (Bergerak Bebas) */}
      <motion.div
        animate={{
          x: ["10vw", "50vw", "10vw"],
          y: ["10vh", "60vh", "10vh"],
          rotate: [0, 360],
          borderRadius: ["30% 70% 50% 50% / 30% 30% 70% 70%", "70% 30% 80% 20% / 60% 30% 70% 40%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-fuchsia-500/20 dark:bg-fuchsia-600/10 blur-[130px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* LIQUID SMOKE 3: VIOLET (Bergerak Bebas) */}
      <motion.div
        animate={{
          x: ["80vw", "30vw", "80vw"],
          y: ["70vh", "20vh", "70vh"],
          rotate: [360, 0],
          borderRadius: ["50% 50% 20% 80% / 50% 50% 20% 80%", "20% 80% 50% 50% / 20% 80% 50% 50%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-violet-500/20 dark:bg-violet-600/10 blur-[150px] mix-blend-multiply dark:mix-blend-screen"
      />

    </div>
  );
}

// Helper scroll hook yang menyebabkan error sebelumnya
function useScroll() {
  const [progress, setProgress] = useState(0); // FIXED: Tidak lagi menggunakan React.useState
  useEffect(() => {
    const update = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(winScroll / height);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return { scrollYProgress: progress };
}